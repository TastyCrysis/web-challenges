import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🍇 Grapes",
      color: "purple",
    },
    {
      id: 1340,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 1341,
      name: "🍊 Orange",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
