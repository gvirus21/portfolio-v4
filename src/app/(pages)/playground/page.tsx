import { FC } from 'react';
import Image from 'next/image';

const experiments = [
  {
    id: 1,
    title: 'Abstract Gradient',
    imageUrl: '/assets/images/homepage/work-section/bb-01.webp',
  },
  {
    id: 2,
    title: 'Geometric Shapes',
    imageUrl: '/assets/images/homepage/work-section/cw-01.webp',
  },
  {
    id: 3,
    title: 'Minimalist Typography',
    imageUrl: '/assets/images/homepage/work-section/ff-01.webp',
  },
  {
    id: 4,
    title: '3D Illustrations',
    imageUrl: '/assets/images/homepage/work-section/pg-01.webp',
  },
  {
    id: 5,
    title: 'Interactive Elements',
    imageUrl: '/assets/images/homepage/work-section/bb-02.webp',
  },
    {
    id: 6,
    title: 'Interactive Elements',
    imageUrl: '/assets/images/homepage/work-section/cw-02.webp',
  },
];

const PlaygroundPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">Web Design Playground</h1>
        <p className="text-lg text-gray-600">
          A collection of web design experiments and creative explorations.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiments.map((experiment) => (
          <div key={experiment.id} className="border rounded-lg overflow-hidden">
            <Image
              src={experiment.imageUrl}
              alt={experiment.title}
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{experiment.title}</h2>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default PlaygroundPage;