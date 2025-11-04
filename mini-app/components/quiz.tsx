"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const questions = [
  {
    question: "What is your favorite color?",
    options: [
      { label: "Red", value: "Belle" },
      { label: "Blue", value: "Ariel" },
      { label: "Pink", value: "Cinderella" },
      { label: "Purple", value: "Rapunzel" },
      { label: "Gold", value: "Aurora" },
    ],
  },
  {
    question: "Which activity do you enjoy most?",
    options: [
      { label: "Reading", value: "Belle" },
      { label: "Swimming", value: "Ariel" },
      { label: "Dancing", value: "Cinderella" },
      { label: "Exploring", value: "Rapunzel" },
      { label: "Sleeping", value: "Aurora" },
    ],
  },
  {
    question: "What is your ideal vacation?",
    options: [
      { label: "A library", value: "Belle" },
      { label: "A beach", value: "Ariel" },
      { label: "A ball", value: "Cinderella" },
      { label: "A tower", value: "Rapunzel" },
      { label: "A castle", value: "Aurora" },
    ],
  },
  {
    question: "Which trait describes you best?",
    options: [
      { label: "Curious", value: "Belle" },
      { label: "Free-spirited", value: "Ariel" },
      { label: "Kind", value: "Cinderella" },
      { label: "Creative", value: "Rapunzel" },
      { label: "Dreamy", value: "Aurora" },
    ],
  },
  {
    question: "What is your favorite dessert?",
    options: [
      { label: "Apple pie", value: "Belle" },
      { label: "Fish cake", value: "Ariel" },
      { label: "Chocolate cake", value: "Cinderella" },
      { label: "Fruit tart", value: "Rapunzel" },
      { label: "Honey cake", value: "Aurora" },
    ],
  },
];

export function Quiz({ onAnswer, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  const handleNext = () => {
    if (selected) {
      onAnswer(selected);
      setSelected(null);
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        onFinish();
      }
    }
  };

  const { question, options } = questions[current];

  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl mb-4">{question}</h2>
      <div className="flex flex-col gap-2">
        {options.map(opt => (
          <Button
            key={opt.value}
            variant={selected === opt.value ? 'outline' : 'default'}
            onClick={() => handleSelect(opt.value)}
            className="w-full justify-start"
          >
            {opt.label}
          </Button>
        ))}
      </div>
      <Button
        onClick={handleNext}
        disabled={!selected}
        className="mt-4"
      >
        {current + 1 < questions.length ? 'Next' : 'Finish'}
      </Button>
    </div>
  );
}
