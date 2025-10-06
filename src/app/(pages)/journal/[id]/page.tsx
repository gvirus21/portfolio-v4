
import { FC } from 'react';

const journalEntries = [
  {
    id: 1,
    title: 'My First Journal Entry',
    excerpt: 'This is a short excerpt of my first journal entry.',
    content: 'This is the full content of my first journal entry. It can be much longer than the excerpt.',
    date: 'October 26, 2025',
  },
  {
    id: 2,
    title: 'A Day in the Life',
    excerpt: 'An exploration of a typical day and the thoughts that come with it.',
    content: 'This is the full content of the "A Day in the Life" entry.',
    date: 'October 27, 2025',
  },
  {
    id: 3,
    title: 'Creative Inspirations',
    excerpt: 'Diving deep into the sources of my creative inspiration.',
    content: 'This is the full content of the "Creative Inspirations" entry.',
    date: 'October 28, 2025',
  },
  {
    id: 4,
    title: 'The Future of Design',
    excerpt: 'My thoughts on the future of design and technology.',
    content: 'This is the full content of "The Future of Design" entry.',
    date: 'October 29, 2025',
  },
  {
    id: 5,
    title: 'Reflections on a Project',
    excerpt: 'Looking back at a challenging but rewarding project.',
    content: 'This is the full content of the "Reflections on a Project" entry.',
    date: 'October 30, 2025',
  },
];

interface JournalEntryPageProps {
  params: {
    id: string;
  };
}

const JournalEntryPage: FC<JournalEntryPageProps> = ({ params }) => {
  const entry = journalEntries.find((e) => e.id === parseInt(params.id, 10));

  if (!entry) {
    return <div>Journal entry not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <article>
        <header className="mb-8">
          <h1 className="text-5xl font-bold mb-2">{entry.title}</h1>
          <p className="text-sm text-gray-500">{entry.date}</p>
        </header>
        <div className="prose lg:prose-xl">
          {entry.content}
        </div>
      </article>
    </div>
  );
};

export default JournalEntryPage;
