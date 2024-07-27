import { Checkbox } from '../components/Checkbox';

export class DarkCheckbox implements Checkbox {
  paint() {
    console.log('Rendering a dark-themed checkbox');
  }
}
