"use strict";
// src/facades/HomeAutomationFacade.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAutomationFacade = void 0;
const LightSystem_1 = require("../subsystems/LightSystem");
const MusicSystem_1 = require("../subsystems/MusicSystem");
const Thermostat_1 = require("../subsystems/Thermostat");
class HomeAutomationFacade {
    constructor() {
        this.lightSystem = new LightSystem_1.LightSystem();
        this.musicSystem = new MusicSystem_1.MusicSystem();
        this.thermostat = new Thermostat_1.Thermostat();
    }
    activateEveningMode() {
        console.log("\nActivating Mode...");
        this.lightSystem.turnOn();
        this.musicSystem.playMusic();
        this.thermostat.setTemperature(22);
    }
    deactivateEveningMode() {
        console.log("\nDeactivating Mode...");
        this.lightSystem.turnOff();
        this.musicSystem.stopMusic();
    }
}
exports.HomeAutomationFacade = HomeAutomationFacade;
