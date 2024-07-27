import { Checkbox } from '../components/Checkbox';

export class LightCheckbox implements Checkbox {
  paint() {
    console.log('Rendering a light-themed checkbox');
  }
}
