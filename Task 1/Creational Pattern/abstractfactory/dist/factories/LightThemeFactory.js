"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightThemeFactory = void 0;
const LightButton_1 = require("../themes/LightButton");
const LightCheckBox_1 = require("../themes/LightCheckBox");
// Concrete Factory
class LightThemeFactory {
    createButton() {
        return new LightButton_1.LightButton();
    }
    createCheckbox() {
        return new LightCheckBox_1.LightCheckbox();
    }
}
exports.LightThemeFactory = LightThemeFactory;
