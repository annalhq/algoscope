import React, { useRef, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function intro() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Sorting</h1>
        <p className="text-center text-gray-600">Algorithms to Sort the Arrays</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700">
        Given a sequence of n elements <Latex>$S = (a_1, a_2, \dots, a_n)$</Latex>   from a totally ordered set, and a comparison operator ≤, arrange the elements of S in non-decreasing order.
        The result is a permutation <Latex>$S' = (a'_1, a'_2, \dots, a'_n)$</Latex> of the original sequence such that <Latex>$a'_1 \leq a'_2 \leq \dots \leq a'_n$</Latex>. 
        This problem is known as sorting, and it is a fundamental operation in computer science with numerous applications across various domains.        </p>
        <br />
        <p className="text-gray-700">
        Sorting algorithms can be categorized based on their approach, such as comparison-based or non-comparison-based methods. 
        The efficiency of sorting algorithms is typically measured in terms of time complexity and space complexity, with the goal of minimizing both.
        A common subproblem in sorting is finding the k-th smallest element in the sequence, which for some algorithms is no easier to solve than the general sorting problem.        </p>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">QuickSort Algorithm</h2>
  <p className="text-gray-700">
    QuickSort is an efficient, divide-and-conquer algorithm for sorting an array 
    <Latex>$A = (a_1, a_2, \dots, a_n)$</Latex> of n elements. The goal is to rearrange the elements of 
    <Latex>$A$</Latex> so that they are in ascending order. QuickSort is based on the partitioning principle and 
    is known for its average-case time complexity of <Latex>$O(n \log n)$</Latex>.
    <br />
    <br />
    The core idea of QuickSort is to select a 'pivot' element from the array and partition the other elements into 
    two sub-arrays, according to whether they are less than or greater than the pivot. This process is recursively 
    applied to the sub-arrays until the entire array is sorted.
    <br />
    <br />
    <b>Key components of the QuickSort algorithm include:</b>
    <br />
    <br />
    1. Partition function <Latex>{`$P(A, \\text{low}, \\text{high})$`}</Latex>, which takes the array <Latex>$A$</Latex> and 
    two indices low and high. It chooses an element as a pivot (often <Latex>{`$A[\\text{high}]$`}</Latex>) and places it at 
    its correct position in the sorted array. It also places all smaller elements to the left of the pivot, and all greater 
    elements to the right.
    <br />
    <br />
    2. A recursive function <Latex>{`$\\text{QuickSort}(A, \\text{low}, \\text{high})$`}</Latex> that calls itself on the 
    sub-arrays created by the partition function.
    <br />
    <br />
    <b>Data structures used by QuickSort include:</b>
    <br />
    <br />
    1. The input array <Latex>$A$</Latex>, which is modified in-place during the sorting process.
    <br />
    <br />
    2. Two pointers, <Latex>$i$</Latex> and <Latex>$j$</Latex>, used in the partitioning process to scan the array from left to right 
    and right to left, respectively.
    <br />
    <br />
    The algorithm&apos;s efficiency stems from its "divide-and-conquer" nature, where the problem is broken down into smaller subproblems 
    that can be solved independently. The "greedy" aspect of QuickSort lies in its choice of pivot and immediate partitioning, 
    assuming this local decision will lead to an efficient overall sort.
  </p>
</section>

<section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Complexity</h2>
  <p className="text-gray-700">
    QuickSort's performance varies depending on the implementation and the nature of the input data. 
    Overall, the randomized pivot selection version tends to offer the best average-case performance. 
    Conversely, the version with a fixed pivot selection (e.g., always choosing the last element) can lead to worst-case scenarios in certain input distributions.
    <br />
    <br />
    The time complexity of QuickSort can be characterized as follows:
    <br />
    <br />
    1. Best-case scenario: <Latex>$O(n \log n)$</Latex> <br />
    This occurs when the pivot always divides the array into two nearly equal halves.
    
    <br />
    2. Average-case scenario: <Latex>$O(n \log n)$</Latex> <br />
    This is achieved with random pivot selection or when the input is randomly distributed.
    
    <br />
    3. Worst-case scenario: <Latex>$O(n^2)$</Latex> <br />
    This happens when the pivot is always the smallest or largest element, leading to unbalanced partitions.
    <br />

    <br />
    The space complexity is <Latex>$O(\log n)$</Latex> on average due to the recursive call stack, 
    but can degrade to <Latex>$O(n)$</Latex> in the worst case.
    <br />

    <br />
    It's worth noting that despite the potential for worst-case quadratic performance, QuickSort is often faster in practice due to several factors:
    <br />
    <br />
    <ul>
      <li>1. Cache efficiency: QuickSort operates on contiguous memory, which is cache-friendly.</li>
      <li>2. In-place sorting: Unlike MergeSort, QuickSort typically requires no additional memory allocation.</li>
      <li>3. Adaptability: Various optimizations can be applied to improve QuickSort's performance on different types of input data.</li>
    </ul>
    
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
            src="https://www.youtube.com/embed/WprjBK0p6rw"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>

        </div>
        <div className="relative mt-8" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/MZaf_9IZCrc"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

        </div>
      </section>
    </div>
  );
}