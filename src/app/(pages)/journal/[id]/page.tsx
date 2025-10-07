import { FC } from "react";

const journalEntries = [
  {
    id: 1,
    title: "My First Journal Entry",
    excerpt: "This is a short excerpt of my first journal entry.",
    content:
      "This is the full content of my first journal entry. It can be much longer than the excerpt.",
    date: "October 26, 2025",
  },
  {
    id: 2,
    title: "A Day in the Life",
    excerpt:
      "An exploration of a typical day and the thoughts that come with it.",
    content: 'This is the full content of the "A Day in the Life" entry.',
    date: "October 27, 2025",
  },
  {
    id: 3,
    title: "Creative Inspirations",
    excerpt: "Diving deep into the sources of my creative inspiration.",
    content: 'This is the full content of the "Creative Inspirations" entry.',
    date: "October 28, 2025",
  },
  {
    id: 4,
    title: "The Future of Design",
    excerpt: "My thoughts on the future of design and technology.",
    content: 'This is the full content of "The Future of Design" entry.',
    date: "October 29, 2025",
  },
  {
    id: 5,
    title: "Reflections on a Project",
    excerpt: "Looking back at a challenging but rewarding project.",
    content:
      'This is the full content of the "Reflections on a Project" entry.',
    date: "October 30, 2025",
  },
];

const selected_journal = {
  title: "ROI of brand strategy: What leaders should know",
  tags: ["brand strategy", "roi", "leaders"],
  date: "Oct 29, 2025",
  subheading: "This is a subheading of the selected journal entry.",
};

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
    <div className="px-4 py-16 min-h-screen">
      <article className="mt-40 w-11/12 mx-auto">
        <header className="">
          <h1 className="text-7xl font-light mb-2 w-6/12">
            {selected_journal.title}
          </h1>
          <h3 className="text-3xl font-light my-20 w-8/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            voluptate nostrum eveniet explicabo quibusdam veniam, qui maiores?
            Voluptates sequi ratione animi.
          </h3>
        </header>
        <div>
          {/* <div className="flex space-x-3">
            {selected_journal.tags.map((tag, index) => (
              <div
                key={index}
                className="text-xl text-white px-3 py-1 bg-black rounded-full"
              >
                {tag}
              </div>
            ))}
          </div> */}
        </div>

        {/* content */}
        <div className="mt-20 text-2xl leading-10 w-8/12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            inventore vitae saepe magnam totam delectus dolorum minima magni
            alias quia quisquam voluptates aliquid error nisi blanditiis iusto
            quo reprehenderit. Itaque expedita iure cumque labore quos officia
            inventore aut laudantium corrupti adipisci reprehenderit quo id
            laboriosam ullam odio, distinctio iusto doloremque autem velit
            voluptatum impedit et. Odio eos explicabo unde ad. xpedita iure
            cumque labore quos officia inventore aut laudantium corrupti
            adipisci reprehenderit quo id laboriosam ullam odio, distinctio
            iusto doloremque autem velit voluptatum impedit et. Odio eos
            explicabo unde ad.
          </p>

          <div className="mt-20">
            <h3 className="font-semibold text-5xl mb-8">Importance of brand strategy</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              inventore vitae saepe magnam totam delectus dolorum minima magni
              alias quia quisquam voluptates aliquid error nisi blanditiis iusto
              quo reprehenderit. Itaque expedita iure cumque labore quos officia
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              inventore vitae saepe magnam totam delectus dolorum minima magni
              alias quia quisquam voluptates aliquid error nisi blanditiis iusto
              quo reprehenderit. Itaque expedita iure cumque labore quos officia
              aliquid error nisi blanditiis iusto quo reprehenderit. Itaque
              expedita iure cumque labore quos officia.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              inventore vitae saepe magnam totam .
            </p>
          </div>

          <div className="mt-20">
            <h3 className="font-semibold text-5xl mb-8">Challenges of brand strategy</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              inventore vitae saepe magnam totam delectus dolorum minima magni
              alias quia quisquam voluptates aliquid error nisi blanditiis iusto
              quo reprehenderit. Itaque expedita iure cumque labore quos officia
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              inventore vitae saepe magnam totam delectus dolorum minima magni
              alias quia quisquam voluptates aliquid error nisi blanditiis iusto
              quo reprehenderit. Itaque expedita.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default JournalEntryPage;
