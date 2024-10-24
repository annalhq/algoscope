class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size).fill(null);
      this.keys = new Array(size).fill(null);
    }
  
    // Hash function
    hash(key) {
      return key % this.size;
    }
  
    // Insert using quadratic probing
    insert(key, value) {
      let index = this.hash(key);
      let i = 0;
      let originalIndex = index;
  
      // Quadratic probing to find an empty spot
      while (this.table[index] !== null && this.keys[index] !== key) {
        i++;
        index = (originalIndex + i * i) % this.size;
  
        // If we go full circle and come back to the original index
        if (index === originalIndex) {
          throw new Error('Hash table is full');
        }
      }
  
      this.table[index] = value;
      this.keys[index] = key;
    }
  
    // Search for a key
    search(key) {
      let index = this.hash(key);
      let i = 0;
      let originalIndex = index;
  
      // Search using quadratic probing
      while (this.table[index] !== null) {
        if (this.keys[index] === key) {
          return this.table[index];
        }
  
        i++;
        index = (originalIndex + i * i) % this.size;
  
        // If we've circled back to the original index
        if (index === originalIndex) {
          break;
        }
      }
      return null; // Key not found
    }
  
    // Delete a key
    delete(key) {
      let index = this.hash(key);
      let i = 0;
      let originalIndex = index;
  
      // Search using quadratic probing to find the key
      while (this.table[index] !== null) {
        if (this.keys[index] === key) {
          this.table[index] = null;
          this.keys[index] = null;
          return true; // Successfully deleted
        }
  
        i++;
        index = (originalIndex + i * i) % this.size;
  
        if (index === originalIndex) {
          break;
        }
      }
      return false; // Key not found
    }
  }
  
  