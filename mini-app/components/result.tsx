import Image from 'next/image';
import { Button } from '@/components/ui/button';

const princessData = {
  Belle: {
    name: 'Belle',
    image: '/belle.png',
    description: 'A curious and book-loving princess who values inner beauty.',
  },
  Ariel: {
    name: 'Ariel',
    image: '/ariel.png',
    description: 'A free-spirited mermaid who loves exploring the world above water.',
  },
  Cinderella: {
    name: 'Cinderella',
    image: '/cinderella.png',
    description: 'A kind and resilient princess who finds hope in adversity.',
  },
  Rapunzel: {
    name: 'Rapunzel',
    image: '/rapunzel.png',
    description: 'A creative and adventurous princess with a long golden hair.',
  },
  Aurora: {
    name: 'Aurora',
    image: '/aurora.png',
    description: 'A dreamy princess who loves peace and beauty.',
  },
};

export function Result({ princess }) {
  const data = princessData[princess];
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl">{data.name}</h2>
      <Image src={data.image} alt={data.name} width={200} height={200} />
      <p>{data.description}</p>
      <Button onClick={() => window.location.reload()}>Try again</Button>
    </div>
  );
}
