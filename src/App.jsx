import React, { useState } from 'react'
import QuoteBox from './components/QuoteBox'
import './App.css'
import { GlobalStateProvider } from './contexts/GlobalState'
import NextQuoteBtn from './components/NextQuoteBtn'

function App() {


  return (
    <div className="App">
      <GlobalStateProvider>
        <QuoteBox />
      </GlobalStateProvider>
    </div>
  )
}

export default App
