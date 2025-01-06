import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">What is React?</h2>
      <label htmlFor="name">Name:</label>
      <input id="name" />
      <a
        href="https://en.wikipedia.org/wiki/React_(software)"
        target="_blank"
        rel="noopener noreferrer"
        className="article__link"
      >
        The Answer
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
