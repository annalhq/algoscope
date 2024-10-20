import React, { useRef, useEffect } from "react";
import "katex/dist/katex.min.css";

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
          <li>1. Understand the need of stacks.</li>
          <li>2. Have an understanding of the basic method of stacks.</li>
          <li>3. Know the various methods of Stacks.</li>
          <li>
            4. Demonstrate knowledge of time and space complexity of Stacks
            techniques.
          </li>
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
        </p>
        <p className="text-gray-700">
          <b>Push :</b>Adds an element to the top of the stack.
          <br />
          <b>Pop :</b> Removes the top element from the stack.
          <br />
          <b>Peek :</b> Returns the top element of the stack without removing
          it. <br />
          <b>isEmpty :</b> Checks whether the stack is empty.
          <br />
          <b>isFull :</b>Returns the number of elements in the stack.
          <br />
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
            <strong>isEmpty</strong>: O(1)
          </li>
        </ul>
        <p className="text-gray-700">
          <strong>Space Complexity</strong>: O(n), where <em>n</em> is the
          number of elements in the stack.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applications of Stacks:</h2>
        <p className="text-gray-700">
          1.Undo/Redo functionality in text editors 2.Backtracking problems
          (like solving a maze) 3.Parenthesis checking in expressions 4.Call
          stack in recursive function calls
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <p className="text-gray-700 mb-4">
          Below are some resources to help you understand the algorithm better.
        </p>
        <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Aa2sqUhIn-E"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative mt-8" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/watch?v=rdmNr-9_RNY"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    
    </div>
  );
}
