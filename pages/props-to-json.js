import "./styles.css";

export default function App() {
  const obj = {
    "5bd4a1a4-f806-4355-bf34-1b4054c2881e": {
      "type": "tosca.resourceTypes.TPE",
      "label": "BVI 610",
      "value": "801070217_BVI610"
    }
  };

  const result = Object.keys(obj).map(key => ({
    ...obj[key],
    id: key
  }));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{JSON.stringify(result[0])}</h2>
    </div>
  );
}
