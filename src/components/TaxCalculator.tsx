"use client";

import { useState } from "react";

interface StateData {
  name: string;
  incomeTaxRate: number;
  avgPropertyTaxOnEquivalent: number;
}

const STATES: Record<string, StateData> = {
  CA: { name: "California", incomeTaxRate: 13.3, avgPropertyTaxOnEquivalent: 33000 },
  NY: { name: "New York", incomeTaxRate: 10.9, avgPropertyTaxOnEquivalent: 48000 },
  NJ: { name: "New Jersey", incomeTaxRate: 10.75, avgPropertyTaxOnEquivalent: 53000 },
  CT: { name: "Connecticut", incomeTaxRate: 6.99, avgPropertyTaxOnEquivalent: 27500 },
  MA: { name: "Massachusetts", incomeTaxRate: 9.0, avgPropertyTaxOnEquivalent: 22000 },
  IL: { name: "Illinois", incomeTaxRate: 4.95, avgPropertyTaxOnEquivalent: 36750 },
  TX: { name: "Texas", incomeTaxRate: 0, avgPropertyTaxOnEquivalent: 54000 },
  WA: { name: "Washington", incomeTaxRate: 0, avgPropertyTaxOnEquivalent: 22000 },
  FL: { name: "Florida", incomeTaxRate: 0, avgPropertyTaxOnEquivalent: 24000 },
  VA: { name: "Virginia", incomeTaxRate: 5.75, avgPropertyTaxOnEquivalent: 21000 },
  MD: { name: "Maryland", incomeTaxRate: 5.75, avgPropertyTaxOnEquivalent: 22000 },
};

const NC_INCOME_TAX = 3.99;
const WHITNEY_PROPERTY_TAX = 14223;

export default function TaxCalculator() {
  const [stateCode, setStateCode] = useState("CA");
  const [income, setIncome] = useState(1000000);

  const state = STATES[stateCode];

  const incomeTaxSavings = Math.round(
    (income * (state.incomeTaxRate - NC_INCOME_TAX)) / 100,
  );
  const propertyTaxSavings =
    state.avgPropertyTaxOnEquivalent - WHITNEY_PROPERTY_TAX;
  const annualTotal = incomeTaxSavings + propertyTaxSavings;
  const fiveYearTotal = annualTotal * 5;

  return (
    <section id="tax-calculator" className="bg-navy px-6 py-20 text-white md:px-12 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Relocation Arbitrage
        </p>
        <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
          Your Tax Savings
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/60">
          A comparison of your current state&rsquo;s tax burden against North
          Carolina&rsquo;s 3.99% flat income tax and the Town of Marvin&rsquo;s
          0.648% property tax rate.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-gold">
              Current State
            </label>
            <select
              value={stateCode}
              onChange={(e) => setStateCode(e.target.value)}
              className="form-input w-full border-white/20 bg-white/5 px-4 py-4 text-lg text-white focus:border-gold"
            >
              {Object.entries(STATES).map(([code, data]) => (
                <option key={code} value={code} className="bg-navy">
                  {data.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-gold">
              Annual Household Income
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-white/50">
                $
              </span>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                step="50000"
                min="100000"
                max="20000000"
                className="form-input w-full border-white/20 bg-white/5 py-4 pl-8 pr-4 text-lg text-white focus:border-gold"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border border-gold/30 bg-white/5 p-8 md:p-12">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-gold">
            Moving from {state.name} to Marvin, NC saves you:
          </p>

          <div className="mb-8 grid gap-8 md:grid-cols-3">
            <div>
              <p className="mb-2 text-sm text-white/60">Annual Income Tax</p>
              <p className="font-heading text-3xl text-white md:text-4xl">
                ${incomeTaxSavings.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-white/60">Annual Property Tax</p>
              <p className="font-heading text-3xl text-white md:text-4xl">
                ${propertyTaxSavings.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-white/60">Annual Total</p>
              <p className="font-heading text-3xl text-gold md:text-4xl">
                ${annualTotal.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="mb-2 text-sm text-white/60">
              Five-year cumulative savings
            </p>
            <p className="font-heading text-5xl text-gold md:text-6xl">
              ${fiveYearTotal.toLocaleString()}
            </p>
            <p className="mt-4 text-xs italic text-white/40">
              Estimates only. Tax obligations vary by individual circumstances.
              Property tax comparison assumes equivalent $2.2M home in
              destination market. Consult your tax advisor for precise
              calculations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
