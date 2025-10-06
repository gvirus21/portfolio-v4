
import Link from 'next/link';
import { FC } from 'react';

const journalEntries = [
  {
    id: 1,
    title: 'My First Journal Entry',
    excerpt: 'This is a short excerpt of my first journal entry.',
    date: 'October 26, 2025',
  },
  {
    id: 2,
    title: 'A Day in the Life',
    excerpt: 'An exploration of a typical day and the thoughts that come with it.',
    date: 'October 27, 2025',
  },
  {
    id: 3,
    title: 'Creative Inspirations',
    excerpt: 'Diving deep into the sources of my creative inspiration.',
    date: 'October 28, 2025',
  },
  {
    id: 4,
    title: 'The Future of Design',
    excerpt: 'My thoughts on the future of design and technology.',
    date: 'October 29, 2025',
  },
  {
    id: 5,
    title: 'Reflections on a Project',
    excerpt: 'Looking back at a challenging but rewarding project.',
    date: 'October 30, 2025',
  },
];

const JournalPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">From the Journal</h1>
        <p className="text-lg text-gray-600">
          A collection of thoughts, explorations, and stories.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {journalEntries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-2">{entry.title}</h2>
              <p className="text-gray-700 mb-4">{entry.excerpt}</p>
              <p className="text-sm text-gray-500">{entry.date}</p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default JournalPage;
