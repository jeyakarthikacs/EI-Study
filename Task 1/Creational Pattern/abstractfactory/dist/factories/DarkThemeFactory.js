"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkThemeFactory = void 0;
const DarkButton_1 = require("../themes/DarkButton");
const DarkCheckBox_1 = require("../themes/DarkCheckBox");
// Concrete Factory
class DarkThemeFactory {
    createButton() {
        return new DarkButton_1.DarkButton();
    }
    createCheckbox() {
        return new DarkCheckBox_1.DarkCheckbox();
    }
}
exports.DarkThemeFactory = DarkThemeFactory;
