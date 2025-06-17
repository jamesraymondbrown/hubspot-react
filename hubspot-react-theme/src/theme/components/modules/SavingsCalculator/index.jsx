import { Island } from '@hubspot/cms-components';
import SavingsCalculatorIsland from './SavingsCalculatorIsland.jsx?island';
import './styles.css';
import { ModuleFields } from '@hubspot/cms-components/fields';

export function Component() {
  return (
    <Island module={SavingsCalculatorIsland} />
  );
}

export const fields = <ModuleFields />;

export const meta = {
  label: 'Savings Calculator',
  isAvailableForNewContent: true,
};
