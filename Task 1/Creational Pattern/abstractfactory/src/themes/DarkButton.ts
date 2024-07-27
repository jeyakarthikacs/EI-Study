import { Button } from '../components/Button';

export class DarkButton implements Button {
  paint() {
    console.log('Rendering a dark-themed button');
  }
}
