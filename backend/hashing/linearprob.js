class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null);
    this.keys = new Array(size).fill(null);
  }

  hash(key) {
    return key % this.size;
  }

  
  insert(value) {
    
    let key = 10 + this.table.filter((val) => val !== null).length;
    let index = this.hash(key);
    let originalIndex = index;

    
    while (this.table[index] !== null && this.keys[index] !== key) {
      index = (index + 1) % this.size; // Move to next index in a circular way

      
      if (index === originalIndex) {
        throw new Error('Hash table is full');
      }
    }

    this.table[index] = value;
    this.keys[index] = key;
  }

  
  search(key) {
    let index = this.hash(key);
    let originalIndex = index;

    
    while (this.table[index] !== null) {
      if (this.keys[index] === key) {
        return this.table[index]; 
      }

      index = (index + 1) % this.size;

      
      if (index === originalIndex) {
        break;
      }
    }
    return null; 
  }

  
  delete(key) {
    let index = this.hash(key);
    let originalIndex = index;

    
    while (this.table[index] !== null) {
      if (this.keys[index] === key) {
        this.table[index] = null; 
        this.keys[index] = null;  
        return true; 
      }

      index = (index + 1) % this.size;

      if (index === originalIndex) {
        break;
      }
    }
    return false; 
  }
}
