import React, { useState, useEffect } from "react";
import './QuoteBox.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const QuoteBox = ({ onNewQuote, bgColor }) => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const fetchQuotes = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error("Error fetching the quotes", error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleNewQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    onNewQuote();
  };

  const currentQuote = quotes[currentQuoteIndex] || { text: '', author: '' };

  return (
    <div className="wrapper" style={{ color: bgColor }}>
      <div id="quote-box">
        <div id="quote-text" className="quote-text">
          <i className="fa fa-quote-left"></i>
          <span id="text">{currentQuote.text}</span>
        </div>
        <div id="quote-author" className="quote-author">
          - <span id="author">{currentQuote.author || "Unknown"}</span>
        </div>
        <div className="buttons">
          <a className="button" title="Tweet this quote!" id="tweet-quote" target="_blank" href="https://twitter.com/intent/tweet" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>

          </a>
          <a className="button" title="Post this quote on tumblr!" id="tumblr-quote" target="_blank" href="https://www.tumblr.com/widgets/share/tool" rel="noopener noreferrer">
          <i className="fab fa-tumblr"></i>
          </a>
          <button className="button" id="new-quote" onClick={handleNewQuote}>New Quote</button>
        </div>
      </div>
      <div className="footer">
        <span className="footer-text">by</span>
        <a href="https://github.com/Fredrickmureti" target="_blank" className="name">Fredrick Mureti</a>
      </div>
    </div>
  );
};

export default QuoteBox;
