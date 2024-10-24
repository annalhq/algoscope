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

  // Insert function using linear probing with a unique key
  insert(value) {
    // Make the key unique by appending the length of the table as an offset
    let key = 10 + this.table.filter((val) => val !== null).length;
    let index = this.hash(key);
    let originalIndex = index;

    // Linear probing to find the next available spot
    while (this.table[index] !== null && this.keys[index] !== key) {
      index = (index + 1) % this.size; // Move to next index in a circular way

      // If we've come full circle, the table is full
      if (index === originalIndex) {
        throw new Error('Hash table is full');
      }
    }

    this.table[index] = value;
    this.keys[index] = key;
  }

  // Search for a key using linear probing
  search(key) {
    let index = this.hash(key);
    let originalIndex = index;

    // Linear probing to find the key
    while (this.table[index] !== null) {
      if (this.keys[index] === key) {
        return this.table[index]; // Key found, return value
      }

      index = (index + 1) % this.size;

      // If we've circled back to the original index
      if (index === originalIndex) {
        break;
      }
    }
    return null; // Key not found
  }

  // Delete a key using linear probing
  delete(key) {
    let index = this.hash(key);
    let originalIndex = index;

    // Linear probing to find the key to delete
    while (this.table[index] !== null) {
      if (this.keys[index] === key) {
        this.table[index] = null; // Delete the value
        this.keys[index] = null;  // Delete the key
        return true; // Successfully deleted
      }

      index = (index + 1) % this.size;

      if (index === originalIndex) {
        break;
      }
    }
    return false; // Key not found
  }
}
