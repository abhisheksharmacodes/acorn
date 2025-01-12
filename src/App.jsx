import React, { useState } from 'react'
import './App.css'

import MyContext from './context'

// Components
import Header from './components/header'
import ContentArea from './components/contentarea/contentarea'

const App = () => {

  const [search, setSearch] = useState()

  return (
    <MyContext.Provider value={[{ search, setSearch }]}>
      <Header />
      <ContentArea />
    </MyContext.Provider>
  )
}


export default App
