import React from 'react'
import Quiz from '@/quiz/quiz'


const sampleQuestions = [
  {
    question: "What is the average time complexity of the Quicksort algorithm?",
    options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
    correctAnswer: "O(n log n)",
    explanation: "Quicksort has an average time complexity of O(n log n) because it recursively partitions the array and sorts the subarrays, leading to a logarithmic number of recursive calls, each processing n elements.",
  },
  {
    question: "Which of the following is a key disadvantage of the standard Quicksort algorithm?",
    options: ["High space complexity", "High time complexity in the average case", "Worst-case time complexity of O(n²)", "Difficult to implement"],
    correctAnswer: "Worst-case time complexity of O(n²)",
    explanation: "In its worst case (e.g., when the pivot is the smallest or largest element repeatedly), Quicksort's time complexity degrades to O(n²). This happens when the partitioning is unbalanced, like in a sorted or nearly sorted array.",
  },
  {
    question: "Which partitioning scheme is more efficient in practice due to its lower number of swaps?",
    options: ["Lomuto partition scheme", "Hoare partition scheme", "Median of three partitioning", "Randomized partitioning"],
    correctAnswer: "Hoare partition scheme",
    explanation: "Hoare's partitioning scheme is more efficient than Lomuto's because it generally requires fewer swaps and comparisons, making it faster in practice, though it produces slightly more complex code.",
  },
  {
    question: "What is the purpose of using the median of three strategy in Quicksort?",
    options: ["To reduce space complexity","To reduce the number of recursive calls","To improve pivot selection and avoid worst-case scenarios","To optimize partitioning for small subarrays"],
    correctAnswer: "To improve pivot selection and avoid worst-case scenarios",
    explanation: "The median of three strategy improves the pivot selection by choosing the median of the first, middle, and last elements, reducing the likelihood of worst-case partitioning in nearly sorted arrays.",
  },
  {
    question: "In a Quicksort implementation, which method can be used to optimize performance on small subarrays?",
    options: ["Use a larger pivot","Use Insertion Sort for small subarrays","Use Merge Sort for small subarrays","Increase the recursion depth"],
    correctAnswer: " Use Insertion Sort for small subarrays",
    explanation: "For small subarrays (typically fewer than 10 elements), switching to Insertion Sort improves performance, as it is more efficient for small, mostly sorted arrays due to lower overhead compared to recursive calls.",
  },
];

const pretestPage = () => {
  return (
  <div>
    <Quiz questions={sampleQuestions} />
  </div>
  )
}

export default pretestPage