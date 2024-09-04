import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

interface ExamInstructionsProps {
  onStart: () => void;
}

const ExamInstructions: React.FC<ExamInstructionsProps> = ({ onStart }) => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <Alert>
        <AlertTitle className="text-lg font-semibold">Exam Instructions</AlertTitle>
        <AlertDescription>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>You have 10 minutes to complete the quiz.</li>
            <li>Answer all questions to the best of your ability.</li>
            <li>Do not switch tabs or applications during the exam.</li>
            <li>Fullscreen mode will be enabled and must remain active.</li>
            <li>Copying content is not allowed.</li>
            <li>Use of keyboard shortcuts may be logged as suspicious activity.</li>
          </ul>
        </AlertDescription>
      </Alert>
      <Button onClick={onStart} className="mt-4 w-full">
        Start Quiz
      </Button>
    </div>
  );
};

export default ExamInstructions;