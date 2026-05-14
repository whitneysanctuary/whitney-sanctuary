"use client";

import { useEffect, useMemo } from "react";
import { resolveRegionFromUTM, type RegionKey } from "@/lib/campaigns";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type UTMParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

const STORAGE_KEY = "ws_utm";

function readStored(): UTMParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function persist(params: UTMParams) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  } catch {
    /* quota exceeded — non-critical */
  }
}

/**
 * On mount, capture UTM params from the URL (first-touch within session).
 * Returns the active UTM set and the resolved region key (if any).
 */
export function useUTM(): {
  utm: UTMParams;
  regionKey: RegionKey | null;
} {
  useEffect(() => {
    const existing = readStored();
    if (existing.utm_source) return; // first-touch already captured

    const url = new URL(window.location.href);
    const params: UTMParams = {};
    let hasAny = false;

    for (const key of UTM_KEYS) {
      const val = url.searchParams.get(key);
      if (val) {
        params[key] = val;
        hasAny = true;
      }
    }

    if (hasAny) {
      persist(params);
      window.dataLayer?.push({
        event: "utm_captured",
        ...params,
      });
    }
  }, []);

  const stored = typeof window !== "undefined" ? readStored() : {};

  const regionKey = useMemo(
    () => resolveRegionFromUTM(stored.utm_campaign ?? null),
    [stored.utm_campaign]
  );

  return { utm: stored, regionKey };
}

/**
 * Retrieve stored UTM params synchronously (for server-action payloads).
 */
export function getStoredUTM(): UTMParams {
  return readStored();
}
