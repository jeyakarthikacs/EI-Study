"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationManager = void 0;
class ConfigurationManager {
    constructor() {
        this.settings = {};
    }
    static getInstance() {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }
    setSetting(key, value) {
        this.settings[key] = value;
    }
    getSetting(key) {
        return this.settings[key];
    }
}
exports.ConfigurationManager = ConfigurationManager;
