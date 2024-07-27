//Dynamic UI Theme Switching Using Abstract Factory Pattern

import { UIFactory } from './factories/UIFactory';
import { LightThemeFactory } from './factories/LightThemeFactory';
import { DarkThemeFactory } from './factories/DarkThemeFactory';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';

// Function to initialize UI components based on the factory provided
function initializeUI(factory: UIFactory) {
  const button: Button = factory.createButton();
  const checkbox: Checkbox = factory.createCheckbox();
  
  button.paint();
  checkbox.paint();
}

// Usage
const lightThemeFactory: UIFactory = new LightThemeFactory();
const darkThemeFactory: UIFactory = new DarkThemeFactory();

console.log('Light Theme:');
initializeUI(lightThemeFactory);

console.log('Dark Theme:');
initializeUI(darkThemeFactory);
