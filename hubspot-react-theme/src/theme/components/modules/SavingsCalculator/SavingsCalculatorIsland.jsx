import { useState } from 'react';
import './styles.css';

export default function SavingsCalculatorIsland() {
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [numberOfMonths, setNumberOfMonths] = useState(0);

  const totalSavings = monthlySavings * numberOfMonths;

  return (
    <div className="savings-calculator">
      <h2>Your Estimated Savings</h2>

      <div className="savings-calculator__input-group">
        <label>
          Estimated Monthly Savings ($)
          <input
            type="number"
            value={monthlySavings}
            onChange={(e) => setMonthlySavings(Number(e.target.value))}
            min="0"
          />
        </label>
      </div>

      <div className="savings-calculator__input-group">
        <label>
          Number of Months
          <input
            type="number"
            value={numberOfMonths}
            onChange={(e) => setNumberOfMonths(Number(e.target.value))}
            min="0"
          />
        </label>
      </div>

      <p className="total">
        Total savings: ${totalSavings.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </div>
  );
}
