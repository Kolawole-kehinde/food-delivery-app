
class LocalStorageService {
    static setItem(key, value) {
      try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    }
  
    static getItem(key) {
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (error) {
        console.error("Error retrieving from localStorage:", error);
        return null;
      }
    }
  
    static removeItem(key) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error("Error removing from localStorage:", error);
      }
    }
  
    static clear() {
      try {
        localStorage.clear();
      } catch (error) {
        console.error("Error clearing localStorage:", error);
      }
    }
  }
  
  export default LocalStorageService;
  