// src/index.ts

import { HomeAutomationFacade } from "./facades/HomeAutomationFacade";

// Create facade
const homeAutomation = new HomeAutomationFacade();

// Activate evening mode
homeAutomation.activateEveningMode();

// Deactivate evening mode
homeAutomation.deactivateEveningMode();
