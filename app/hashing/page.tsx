import React, { useRef, useEffect } from 'react';
import 'katex/dist/katex.min.css';

export default function intro() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Hashing</h1>
        <p className="text-center text-gray-600">Algorithms for finding key in hash table</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
        <p className="text-gray-700">
        <ul>
          <li>1. Understand the need of hashing.</li>
          <li>2. Have an understanding of the basic method of hashing strings.</li>
          <li>3. Know the various methods of handling collisions in hashing.</li>
          <li>4. Demonstrate knowledge of time and space complexity of hashing techniques.</li>
        </ul>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700">
        <b>Hashing</b> is a technique used in data structures that efficiently stores and retrieves data in a way that allows for quick access. 
        It involves mapping data to a specific index in a hash table using a hash function that enables fast retrieval of information based on its key. 
        This method is commonly used in databases, caching systems, and various programming applications to optimize search and retrieval operations. 
        It involves using a hash function to map data items to a fixed-size array which is called a hash table.
        Below are basic terminologies in hashing.</p>
        <p className="text-gray-700">
        <b>Hash Function:</b> You provide your data items into the hash function.<br/>
        <b>Hash Code:</b> The hash function crunches the data and give a unique hash code. This hash code is typically integer value that can be used an index.<br/>
        <b>Hash Table:</b> The hash code then points you to a specific location within the hash table.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Complexity</h2>
        <p className="text-gray-700">
        The time and space complexity for a hash map (or hash table) is not necessarily O(n) for all operations.
        The typical and desired time complexity for basic operations like insertion, lookup, and deletion in a well-designed hash map is O(1) on average.<br/>
        Here's a breakdown of time and space complexity for a hash map:<br/>
        <b>Time Complexity:</b><br/>
        Average Case:

        <li>Insertion: O(1)</li>
        <li>Lookup : O(1)</li>
        <li>Deletion : O(1)</li>
        Worst Case:<br/>
        Insertion : O(n), where n is the size of the hash map. This occurs when there are many hash collisions, 
        leading to linear probing or other collision resolution strategies that may involve traversing the entire hash map.<br/>
        Lookup and Deletion : O(n), for the same reason as insertion.<br/>
        <b>Space Complexity:</b><br/>
        The space complexity is typically O(n). Where n is the number of key-value pairs stored in the hash map. 
        Each key-value pair occupies constant space, and the space required grows linearly with the number of elements.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hash Collison</h2>
        <p className="text-gray-700">
        A hash collision occurs when two different keys map to the same index in a hash table. 
        This can happen even with a good hash function, especially if the hash table is full or the keys are similar.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Collision Resolution</h2>
        <p className="text-gray-700">
        There are two types of collision resolution techniques:<br/>
        <b>Open Addressing:</b>
        <li>Linear Probing: Search for an empty slot sequentially</li>
        <li>Quadratic Probing: Search for an empty slot using a quadratic function</li>
        <b>Closed Addressing:</b>
        <li>Separate Chaining: Store colliding keys in a linked list or binary search tree at each index</li>
        </p>
      </section>
    </div>
  );
}