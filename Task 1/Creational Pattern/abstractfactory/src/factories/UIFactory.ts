import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';

// Abstract Factory
export interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
