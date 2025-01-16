import Link from "next/link";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link
            href={`/volumes/${
              volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
                .slug
            }`}
          >
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link
            href={`/volumes/${
              volumes.find(({ slug }) => slug === "the-two-towers").slug
            }`}
          >
            The Two Towers
          </Link>
        </li>
        <li>
          <Link
            href={`/volumes/${
              volumes.find(({ slug }) => slug === "the-return-of-the-king").slug
            }`}
          >
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
