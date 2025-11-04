import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Share } from '@/components/share';
import { generateMetadata } from '@/lib/farcaster-embed';
import { Quiz } from '@/components/quiz';
import { Result } from '@/components/result';
import { title, description, url } from '@/lib/metadata';

export const metadata = generateMetadata();

export default function Home() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => [...prev, answer]);
  };

  const handleFinish = () => {
    const counts: Record<string, number> = {};
    answers.forEach(a => {
      counts[a] = (counts[a] || 0) + 1;
    });
    const winner = Object.entries(counts).reduce((a, b) => b[1] > a[1] ? b : a)[0];
    setResult(winner);
  };

  return (
    <main className="flex flex-col gap-4 items-center p-4">
      {!result ? (
        <Quiz onAnswer={handleAnswer} onFinish={handleFinish} />
      ) : (
        <Result princess={result} />
      )}
      <Share text={`${title} - ${description} ${url}`} />
    </main>
  );
}
