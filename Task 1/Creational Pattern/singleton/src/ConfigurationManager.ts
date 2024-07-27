export class ConfigurationManager {
    private static instance: ConfigurationManager;
    private settings: { [key: string]: string } = {};
  
    private constructor() {}
  
    public static getInstance(): ConfigurationManager {
      if (!ConfigurationManager.instance) {
        ConfigurationManager.instance = new ConfigurationManager();
      }
      return ConfigurationManager.instance;
    }
  
    public setSetting(key: string, value: string): void {
      this.settings[key] = value;
    }
  
    public getSetting(key: string): string | undefined {
      return this.settings[key];
    }
  }
  