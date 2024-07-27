"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const HomeAutomationFacade_1 = require("./facades/HomeAutomationFacade");
// Create facade
const homeAutomation = new HomeAutomationFacade_1.HomeAutomationFacade();
// Activate evening mode
homeAutomation.activateEveningMode();
// Deactivate evening mode
homeAutomation.deactivateEveningMode();
