import { UIFactory } from './UIFactory';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { LightButton } from '../themes/LightButton';
import { LightCheckbox } from '../themes/LightCheckBox';

// Concrete Factory
export class LightThemeFactory implements UIFactory {
  createButton(): Button {
    return new LightButton();
  }
  
  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}
