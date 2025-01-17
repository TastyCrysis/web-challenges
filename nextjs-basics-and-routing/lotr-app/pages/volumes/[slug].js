import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function VolumePage() {
  const router = useRouter();
  const { slug } = router.query;

  const index = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[index];
  const nextVolume = volumes[index + 1];
  const previousVolume = volumes[index - 1];
  console.log(volume);

  if (!volume) {
    return <div>Volume not found</div>;
  }

  const { title, description, books, cover } = volume;

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={ordinal}>
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
