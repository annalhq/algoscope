"use client"
import React, { useState } from 'react';

class LinearHashing {
    tableSize: number;
    hashTable: (number | null | undefined)[];

    constructor(tableSize = 11) {
        this.tableSize = tableSize;
        this.hashTable = new Array(tableSize);
    }

    hashFunction(key: number, order: number) {
        return (key + order) % this.tableSize;
    }

    insert(key: number) {
        key = parseInt(String(key));
        if (isNaN(key)) throw "Invalid Key!";
        for (let i = 0; i < this.tableSize; ++i) {
            let hashedKey = this.hashFunction(key, i);
            switch (this.hashTable[hashedKey]) {
                case undefined:
                case null:
                    this.hashTable[hashedKey] = key;
                    return hashedKey;
                case key:
                    throw "Duplicate Key!";
            }
        }
        throw "Overflow!";
    }

    search(key: number) {
        key = parseInt(String(key));
        if (isNaN(key)) throw "Invalid Key!";
        for (let i = 0; i < this.tableSize; ++i) {
            let hashedKey = this.hashFunction(key, i);
            switch (this.hashTable[hashedKey]) {
                case undefined:
                    throw "Key Not Found!";
                case key:
                    return hashedKey;
            }
        }
    }

    delete(key: number) {
      try {
          
          let hashedKey = this.search(key);
  
          
          if (hashedKey !== undefined && hashedKey !== null) {
              this.hashTable[hashedKey] = null; 
              return hashedKey;
          } else {
              throw "Key Not Found!"; 
          }
      } catch (error) {
          throw error; 
      }
  }
    
}

const LinearHashingComponent: React.FC = () => {
    const [linearHash] = useState(new LinearHashing());
    const [key, setKey] = useState<number | string>('');
    const [message, setMessage] = useState<string>('');
    const [table, setTable] = useState<(number | null | undefined)[]>(linearHash.hashTable);

    const handleInsert = () => {
        try {
            linearHash.insert(Number(key));
            setTable([...linearHash.hashTable]);
            setMessage(`Key ${key} inserted successfully!`);
        } catch (error: any) {
            setMessage(error);
        }
        setKey('');
    };

    const handleSearch = () => {
        try {
            const result = linearHash.search(Number(key));
            setMessage(`Key ${key} found at index ${result}.`);
        } catch (error: any) {
            setMessage(error);
        }
        setKey('');
    };

    const handleDelete = () => {
        try {
            const result = linearHash.delete(Number(key));
            setTable([...linearHash.hashTable]);
            setMessage(`Key ${key} deleted from index ${result}.`);
        } catch (error: any) {
            setMessage(error);
        }
        setKey('');
    };

    return (
        <div className="container mx-auto p-4">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Hashing Visualization</h1>
                
                <div className="mb-4">
                    <input
                        type="number"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Enter a key"
                    />
                </div>

                <div className="flex space-x-2">
                    <button
                        onClick={handleInsert}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                        Insert
                    </button>
                    <button
                        onClick={handleSearch}
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                    >
                        Search
                    </button>
                    <button
                        onClick={handleDelete}
                        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>

                {message && <p className="mt-4 text-center text-lg font-semibold text-gray-700">{message}</p>}

                <h2 className="mt-8 text-xl font-bold">Hash Table</h2>
                <div className="grid grid-cols-11 gap-2 mt-4">
                    {table.map((value, index) => (
                        <div
                            key={index}
                            className="border p-2 text-center rounded-lg bg-gray-100"
                        >
                            <p className="text-gray-700 font-semibold">{index}</p>
                            <p className="text-gray-900">{value !== undefined && value !== null ? value : '-'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LinearHashingComponent;
