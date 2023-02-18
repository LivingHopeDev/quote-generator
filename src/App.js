import { useEffect, useState } from "react";
function App() {
  const [quote, SetQuote] = useState("");

  const randomNumber = (quotes) => {
    return Math.floor(Math.random() * quotes.length);
  };
  const handleQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const i = randomNumber(data);
        SetQuote(data[i]);
      });
  };
  useEffect(() => {
    // To automatically load a random quote after a refresh
    handleQuote();
  }, []);

  return (
    <div className="content">
      <h1>Quote Generator</h1>
      <div className="quote-container">
        <div className="quote-author-container">
          <p>
            &quot; {quote.text}
            &quot;
          </p>
          <h3> {quote.author}</h3>
        </div>

        <button className="new-quote-btn" onClick={handleQuote}>
          Get a new quote
        </button>
      </div>
    </div>
  );
}

export default App;
