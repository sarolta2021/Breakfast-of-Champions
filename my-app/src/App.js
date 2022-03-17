import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        {data.map((item, index) => (
          <Card
            key={index}
            sub={item.sub}
            title={item.title}
            text={item.text}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
