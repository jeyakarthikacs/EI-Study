// src/facades/HomeAutomationFacade.ts

import { LightSystem } from "../subsystems/LightSystem";
import { MusicSystem } from "../subsystems/MusicSystem";
import { Thermostat } from "../subsystems/Thermostat";

export class HomeAutomationFacade {
  private lightSystem: LightSystem;
  private musicSystem: MusicSystem;
  private thermostat: Thermostat;

  constructor() {
    this.lightSystem = new LightSystem();
    this.musicSystem = new MusicSystem();
    this.thermostat = new Thermostat();
  }

  activateEveningMode(): void {
    console.log("\nActivating Mode...");
    this.lightSystem.turnOn();
    this.musicSystem.playMusic();
    this.thermostat.setTemperature(22);
  }

  deactivateEveningMode(): void {
    console.log("\nDeactivating Mode...");
    this.lightSystem.turnOff();
    this.musicSystem.stopMusic();
  }
}
