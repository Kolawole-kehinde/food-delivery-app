class LocalStorageService {

  static setItem(key, value) {
    try {
      if (value === undefined || value === null) {
        console.error(`Cannot store undefined or null value for key: ${key}`);
        return;
      }
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
      console.log(`Saved ${key}:`, serializedValue); 
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }


  static getItem(key) {
    try {
      const value = localStorage.getItem(key);
      if (!value) {
        console.warn(`No data found for key: ${key}`);
        return null;
      }
      const parsedValue = JSON.parse(value);
      console.log(`Loaded ${key}:`, parsedValue);
      return parsedValue;
    } catch (error) {
      console.error("Error retrieving from localStorage:", error);
      return null;
    }
  }


  static removeItem(key) {
    try {
      localStorage.removeItem(key);
      console.log(`Removed ${key} from localStorage`); 
    } catch (error) {
      console.error("Error removing from localStorage:", error);
    }
  }


  static clear() {
    try {
      localStorage.clear();
      console.log("Cleared all localStorage data");
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  }
}

export default LocalStorageService;
