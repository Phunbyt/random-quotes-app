import React, { useState, createContext, useEffect } from "react";
import axios from 'axios'
export const GlobalState = createContext() 

export const GlobalStateProvider = ({children}) => {
  const [quotes, setQuotes] = useState([ ]);
  const [text, setText] = useState("Buhari na bastard");
  const [author, setAuthor] = useState("Naija youths");
  

  useEffect(() => {
    const fetchQuotes = async () => {
      await axios
        .get("https://type.fit/api/quotes")
        .then((res) => res.data)
        .then((data) => {
          setQuotes([...quotes, ...data.slice(0, 100)]);
        });
    };
    fetchQuotes();
  }, [quotes]);
  
  
  const randNum = () => {
    const num = Math.floor(Math.random() * 90);

    setText([quotes[num].text]);
    setAuthor([quotes[num].author]);
  };

  const quote = {
    text, author
  }
  
    return (
      <GlobalState.Provider
        value={{ quote, randNum }}
      >
        {children}
      </GlobalState.Provider>
    );
}


