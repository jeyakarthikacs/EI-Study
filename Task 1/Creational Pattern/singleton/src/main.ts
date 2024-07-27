import { ConfigurationManager } from './ConfigurationManager';

// Usage
const configManager1 = ConfigurationManager.getInstance();
const configManager2 = ConfigurationManager.getInstance();

configManager1.setSetting('theme', 'dark');
configManager2.setSetting('language', 'en');

console.log(configManager1.getSetting('theme'));    
console.log(configManager1.getSetting('language')); 
console.log(configManager1 === configManager2);     
