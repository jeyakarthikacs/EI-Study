import { UIFactory } from './UIFactory';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { DarkButton } from '../themes/DarkButton';
import { DarkCheckbox } from '../themes/DarkCheckBox';

// Concrete Factory
export class DarkThemeFactory implements UIFactory {
  createButton(): Button {
    return new DarkButton();
  }
  
  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}
