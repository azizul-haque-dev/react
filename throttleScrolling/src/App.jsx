import { useState } from "react";
import InfiiniteScroll from "./InfiiniteScroll";

function App() {
  const [items, setitems] = useState(Array.from({ length: 20 }));

  function fetchMore() {
    console.log("🔄 নতুন ডেটা আনা হচ্ছে...");
    return new Promise((resolve) => {
      setTimeout(() => {
        const newItems = Array.from({ length: 10 });
        setitems((prev) => [...prev, ...newItems]);
        resolve();
      }, 1500);
    });
  }
  return (
    <div>
      <InfiiniteScroll fetchMore={fetchMore} />
      {items.map((_, idx) => (
        <div
          key={idx}
          style={{
            height: 120,
            margin: "10px",
            background: "#f0f0f0",
            textAlign: "center",
            lineHeight: "120px",
            fontSize: "20px",
            color: "black"
          }}
        >
          📦 আইটেম {idx + 1}
        </div>
      ))}
    </div>
  );
}

export default App;
