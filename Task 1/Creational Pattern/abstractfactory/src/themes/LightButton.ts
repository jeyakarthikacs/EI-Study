import { Button } from '../components/Button';

export class LightButton implements Button {
  paint() {
    console.log('Rendering a light-themed button');
  }
}
