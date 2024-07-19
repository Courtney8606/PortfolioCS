import Tag from "./Tag";

function Project({
  headline,
  image,
  text,
  tags,
  link1,
  link2,
}: {
  headline: string;
  image: string;
  text: string;
  tags: string[];
  link1: string;
  link2: string;
}) {
  return (
    <div
      className="p-12 flex-col pb-20 pr-20 small:p-3 small:pb-20 small:pr-1"
      aria-label={text}
    >
      <div className="flex h-full flex-col transition-all hover:scale-110 scale-100 bg-opacity-20 bg-black rounded-lg max-h-max max-w-96 m-3 text-white">
        <img
          className="w-full h-auto rounded-t-lg max-h-64"
          alt={text}
          src={image}
        />
        <div className="flex pt-4 pr-4 pb-0 pl-4">
          <a href={link1}>
            <img src="/icons/github.svg" className="h-10 p-1" />
          </a>
          <a href={link2}>
            <img src="/icons/video.svg" className="h-10 p-1" />
          </a>
        </div>
        <div className="p-4">
          <div className="text-xl font-medium mb-4">{headline}</div>
          <p>{text}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {tags.map((item, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <Tag title={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
