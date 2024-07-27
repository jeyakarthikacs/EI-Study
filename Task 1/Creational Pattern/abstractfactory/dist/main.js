"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LightThemeFactory_1 = require("./factories/LightThemeFactory");
const DarkThemeFactory_1 = require("./factories/DarkThemeFactory");
// Function to initialize UI components based on the factory provided
function initializeUI(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    button.paint();
    checkbox.paint();
}
// Usage
const lightThemeFactory = new LightThemeFactory_1.LightThemeFactory();
const darkThemeFactory = new DarkThemeFactory_1.DarkThemeFactory();
console.log('Light Theme:');
initializeUI(lightThemeFactory);
console.log('Dark Theme:');
initializeUI(darkThemeFactory);
