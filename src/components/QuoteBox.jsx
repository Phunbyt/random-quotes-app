import React, { useContext } from "react";
import { GlobalState } from '../contexts/GlobalState';
import NextQuoteBtn from "./NextQuoteBtn";
import './QuoteBox.css'


// 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
//       encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
//   );
const QuoteBox = () => {
    const { quote } = useContext(GlobalState);

    const link = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + quote.text + '" ' + quote.author)
    return (
      <div id="quote-box" className="quote-box">
        <div id="text">
          <h1>{quote.text}</h1> 
        </div>
        <div id="author">
          <p>{quote.author}</p> 
        </div>
        <a href={link} id="tweet-quote" target="_top">
          tweet-quote
        </a>
        <NextQuoteBtn />
      </div>
    );
}

export default QuoteBox
