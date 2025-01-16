import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheReturnOfTheKing() {
  const index = volumes.findIndex(
    (volume) => volume.slug === "the-return-of-the-king"
  );

  const volume = volumes[index];
  const nextVolume = volumes[index + 1];
  const previousVolume = volumes[index - 1];
  const { books, title, description, cover } = volume;

  return (
    <>
      <Link href="/volumes">Back to all volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: {title}
          </li>
        ))}
      </ul>
      <Image src={cover} alt={title} width={140} height={230} />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
