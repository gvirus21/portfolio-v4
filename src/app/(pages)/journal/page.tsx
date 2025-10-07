import Link from "next/link";
import { FC } from "react";
import { GoArrowUpRight } from "react-icons/go";

interface JournalEntry {
  id: number;
  title: string;
  subheading: string;
  date: string;
  tags: string[];
}

const journalEntries: JournalEntry[] = [
  {
    id: 1,
    title: "My First Journal Entry",
    subheading: "This is a short subheading of my first journal entry.",
    date: "October 26, 2025",
    tags: ["AI", "ChatGPT", "Predictions"],
  },
  {
    id: 2,
    title: "A Day in the Life",
    subheading:
      "An exploration of a typical day and the thoughts that come with it.",
    date: "October 27, 2025",
    tags: ["AI", "Claude", "Thoughts"],
  },
  {
    id: 3,
    title: "Creative Inspirations",
    subheading: "Diving deep into the sources of my creative inspiration.",
    date: "October 28, 2025",
    tags: ["AI", "Claude", "Thoughts"],
  },
  {
    id: 4,
    title: "The Future of Design",
    subheading: "My thoughts on the future of design and technology.",
    date: "October 29, 2025",
    tags: ["web", "design", "figma", "creative"],
  },
  {
    id: 5,
    title: "Reflections on a Project",
    subheading: "Looking back at a challenging but rewarding project.",
    date: "October 30, 2025",
    tags: ["Inspo", "twitter", "Thoughts"],
  },
];

const JournalPage: FC = () => {
  return (
    <div className="px-4 py-16">
      {/* Header Section */}
      <header className="flex flex-col items-center text-center mb-12">
        <h1 className="text-9xl tracking-tight font-light mt-80">
          My Thoughts & Journals
        </h1>
        <p className="text-2xl font-light max-w-4xl mt-72 text-gray-600">
          I have a blog that doesn&apos;t really adhere to any fixed themes.
          From philosophy essays to movie reviews to shower thoughts, it really
          is the wild west. These days, I&apos;m trying to Tweet more instead.
        </p>
      </header>

      {/* Journal Entries Section */}
      <main className="mt-96 mb-20 px-10 w-11/12 mx-auto">
        <h2 className="text-2xl font-light mb-20">Journals</h2>

        <div className="flex flex-col --w-10/12">
          <div className="w-full h-[0.5px] bg-black" />

          {journalEntries.map((entry) => (
            <Link href={`/journal/${entry.id}`} key={entry.id}>
              {/* Tags */}
              <div className="flex gap-1 mt-3">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-[12px] tracking-tight text-black font-light rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Entry Content */}
              <div className="flex justify-between items-start border-b-[0.5px] border-black pb-6">
                <div>
                  <p className="text-xl font-light mt-4 tracking-tighter">
                    {entry.date} &mdash; {entry.title}
                  </p>
                  <p className="mt-1 text-gray-800 tracking-tight">
                    {entry.subheading}
                  </p>
                </div>
                <GoArrowUpRight className="text-2xl mt-4 flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JournalPage;
