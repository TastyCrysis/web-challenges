import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  const router = useRouter();

  const randomVolume = getRandomElement(volumes);

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button
          type="button"
          onClick={() => {
            router.push(`/volumes/${randomVolume.slug}`);
          }}
        >
          Random Volume
        </button>
      </div>
    </>
  );
}
