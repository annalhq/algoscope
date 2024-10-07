import React from 'react'
import Quiz from '@/quiz/quiz'

const sampleQuestions = [
  {
    question: "Which of the following cases causes the worst performance for Quicksort?",
    options: ["Array with random elements","Array that is already sorted","Array with all identical elements","Array with distinct elements"],
    correctAnswer: "Array that is already sorted",
    explanation: "In a sorted array, if the pivot is chosen poorly (e.g., first or last element), Quicksort's partitioning is highly unbalanced, leading to O(n²) time complexity.",
  },
  {
    question: "How can the worst-case performance of Quicksort be avoided?",
    options: ["Use Merge Sort instead","Use a random pivot","Use Bubble Sort","Avoid recursion"],
    correctAnswer: "Use a random pivot",
    explanation: "Randomly choosing a pivot helps to prevent consistently unbalanced partitions, reducing the likelihood of the worst-case O(n²) time complexity.",
  },
  {
    question: "What is the space complexity of Quicksort when implemented using in-place partitioning?",
    options: ["O(n)","O(log n)","O(n log n)","O(1)"],
    correctAnswer: "O(log n)",
    explanation: "In-place Quicksort has a space complexity of O(log n) due to the recursive stack, which depends on the depth of recursion, generally proportional to log n.",
  },
  {
    question: "Which of the following best describes Quicksort's stability?",
    options: ["Quicksort is always stable","Quicksort is stable in the worst case","Quicksort is not stable","Quicksort can be made stable with extra memory"],
    correctAnswer: "Quicksort is not stable",
    explanation: "Quicksort is not a stable sorting algorithm, as it may reorder equal elements due to the way partitioning occurs.",
  },
  {
    question: "When applying Quicksort to an array, how many subarrays are created after the first partition?",
    options: ["One subarray","Two subarrays","Three subarrays","Four subarrays"],
    correctAnswer: "Two subarrays",
    explanation: "After the first partition, Quicksort divides the array into two subarrays: one with elements smaller than the pivot and one with elements greater than the pivot.",
  },
  {
    question: "Why is Quicksort preferred over Merge Sort for most practical purposes, despite both having O(n log n) average time complexity?",
    options: ["Quicksort is easier to implement","Quicksort has better worst-case performance","Quicksort generally uses less memory","Merge Sort is unstable"],
    correctAnswer: "Quicksort generally uses less memory",
    explanation: "Quicksort is preferred because it can be implemented as an in-place sorting algorithm, using O(log n) memory, whereas Merge Sort requires additional O(n) space for merging.",
  },
]


const postTestPage = () => {
  return (
    <div>
    <Quiz questions={sampleQuestions} />
  </div>
  )
}

export default postTestPage