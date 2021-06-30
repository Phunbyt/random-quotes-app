import React, { useContext } from "react";
import { GlobalState } from '../contexts/GlobalState';
const NextQuoteBtn = () => {
    const {  randNum } = useContext(GlobalState);

    
    return <button id="new-quote" onClick={randNum}>New Quote</button>;
}

export default NextQuoteBtn
