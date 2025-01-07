import "./styles.css";

function Greeting({ name }) {
  return (
    <h1>Hello, {name === "Andrea" || name === "Jessica" ? "Coach" : name}!</h1>
  );
}

export default function App() {
  return <Greeting name="Andrea" />;
}
