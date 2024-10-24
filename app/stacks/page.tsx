import React, { useRef, useEffect } from "react";
import "katex/dist/katex.min.css";
import Image from 'next/image';

export default function intro() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Stacks</h1>
        <p className="text-center text-gray-600">Algorithms for Stacks</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
        <p className="text-gray-700">
          <li>Understand the need of stacks.</li>
          <li>Have an understanding of the basic method of stacks.</li>
          <li>Know the various methods of Stacks.</li>
          <li>Demonstrate knowledge of time and space complexity of Stacks techniques.</li>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700">
          <b>Stacks</b> A stack is a linear data structure that follows the
          Last-In-First-Out (LIFO) principle, where the most recently added
          element is the first to be removed.This structure allows insertion
          and deletion of elements only at one end, known as the top  of the
          stack.Common operations include push (adding an element), pop
          (removing the top element), and peek (viewing the top element without
          removing it).Stacks are widely used in various applications, such as
          managing function calls, expression evaluation, and implementing undo
          mechanisms in software cite turn0search1. 
          <br /> <br />
        </p>
        <p className="text-gray-700">
          <b>1. Push :</b>Adds an element to the top of the stack.
          <br />
          <b>2. Pop :</b> Removes the top element from the stack.
          <br />
          <b>3. Peek :</b> Returns the top element of the stack without removing
          it. <br />
          <b>4. isEmpty :</b> Checks whether the stack is empty.
          <br />
          <b>5. isFull :</b>Returns the number of elements in the stack.
          <br />
        </p>
        <div className="text-gray-700">
          {/* <Image src="/C:\Users\VICTUS\OneDrive\Desktop\Algoscope\app\stacks\stack.jpg" alt="stack" width={500} height={500} /> */}
        </div>
      </section>

      <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Basic Operations on Stack Data Structure</h2>
      
      <h2><b>1.Push Operation:</b></h2>
      <p className="text-gray-700">
      Adds an item to the stack. If the stack is full, then it is said to be an Overflow condition. <br />
      <b>Algorithm for Push Operation:</b> <br />
      1. Before pushing the element to the stack, we check if the stack is full . <br />
      2. If the stack is full (top == capacity-1) , then Stack Overflows and we cannot insert the element to the stack. <br />
      3. Otherwise, we increment the value of top by 1 (top = top + 1) and the new value is inserted at top position . <br />
      4. The elements can be pushed into the stack till we reach the capacity of the stack. <br />
      </p> <br /><br />

      <h2><b>2.Pop Operation:</b></h2>
      <p className="text-gray-700">
      Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition. <br />
      <b>Algorithm for Pop Operation:</b> <br />
      1. Before popping the element from the stack, we check if the stack is empty . <br /> 
      2. If the stack is empty (top == -1), then Stack Underflows and we cannot remove any element from the stack. <br />
      3. Otherwise, we store the value at top, decrement the value of top by 1 (top = top – 1) and return the stored top value. <br />
      </p> <br /><br />
      
      <h2><b>3.Peek Operation:</b></h2>
      <p className="text-gray-700">
      Returns the top element of the stack. <br />
      <b>Algorithm for Peek Operation:</b> <br />
      1. Before returning the top element from the stack, we check if the stack is empty. <br /> 
      2. If the stack is empty (top == -1), we simply print “Stack is empty”.      <br />
      3. Otherwise, we return the element stored at index = top . <br />
      </p> <br /><br />

      <h2><b>4.isFull:</b></h2>
      <p className="text-gray-700">
      Returns true if the stack is full, else false. <br />
      <b>Algorithm for isFull Operation:</b> <br />
      1. Check for the value of top in stack. <br /> 
      2. If (top == capacity-1), then the stack is full so return true.      <br />
      3. Otherwise, the stack is not full so return false. <br />
      </p> <br /><br />

      <h2><b>5.isEmpty:</b></h2>
      <p className="text-gray-700">
      Returns true if the stack is empty, else false. <br />
      <b>Algorithm for isEmpty Operation:</b> <br />
      1. Check for the value of top in stack. <br /> 
      2. If (top == -1) , then the stack is empty so return true .      <br />
      3. Otherwise, the stack is not empty so return false. <br />
      </p>

      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Complexity</h2>
        <p className="text-gray-700">
          The time complexity of stack operations depends on how the stack is
          implemented, but they are typically efficient:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Push</strong>: O(1)
          </li>
          <li>
            <strong>Pop</strong>: O(1)
          </li>
          <li>
            <strong>Peek</strong>: O(1)
          </li>
          <li>
            <strong>isFull</strong>: O(1)
          </li>
          <li>
            <strong>isEmpty</strong>: O(1)
          </li>
        </ul>
        <p className="text-gray-700"> <br />
          <strong>Space Complexity</strong>: O(n), where <em>n</em> is the
          number of elements in the stack.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applications of Stacks:</h2>
        <p className="text-gray-700">
          <b>1. Function calls: </b> Stacks are used to keep track of the return addresses of function calls, allowing the program to return to the correct location after a function has finished executing.  <br />
          <b>2. Memory management: </b>Stacks are used to allocate and manage memory in some operating systems and programming languages. <br />
          <b>3. Syntax parsing: </b> Stacks are used to check the validity of syntax in programming languages and other formal languages. <br />
          <b>4. Expression evaluation: </b> Stacks are used to evaluate arithmetic expressions written in postfix. They can also help convert infix expressions to postfix or prefix notation. <br />
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advantages of Stacks:</h2>
        <p className="text-gray-700">
          <b>1. Simplicity: </b> Stacks are a simple and easy-to-understand data structure, making them suitable for a wide range of applications.  <br />
          <b>2. Efficiency: </b> Push and pop operations on a stack can be performed in constant time (O(1)), providing efficient access to data. <br />
          <b>3. Last-in, First-out (LIFO): </b>Stacks follow the LIFO principle, ensuring that the last element added to the stack is the first one removed. This behavior is useful in many scenarios, such as function calls and expression evaluation. <br />
          <b>4. Limited memory usage: </b>Stacks only need to store the elements that have been pushed onto them, making them memory-efficient compared to other data structures. <br />
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Disadvantages of Stacks:</h2>
        <p className="text-gray-700">
          <b>1. Limited access: </b>Elements in a stack can only be accessed from the top, making it difficult to retrieve or modify elements in the middle of the stack. <br />
          <b>2. Potential for overflow: </b>If more elements are pushed onto a stack than it can hold, an overflow error will occur, resulting in a loss of data. <br />
          <b>3. Not suitable for random access: </b>Stacks do not allow for random access to elements, making them unsuitable for applications where elements need to be accessed in a specific order.<br />
          <b>4. Limited capacity: </b>Stacks have a fixed capacity, which can be a limitation if the number of elements that need to be stored is unknown or highly variable.<br />
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <p className="text-gray-700 mb-4">
          Below are some resources to help you understand the algorithm better.
        </p>
        
        <div className="relative mt-8" style={{ paddingBottom: '56.25%' }}>
          <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/rdmNr-9_RNY"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      </section>
    
    </div>
  );
}
