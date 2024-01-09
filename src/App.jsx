import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={ <Feed/> } />
        <Route path='/video/:id' element={ <VideoDetail/> } />
        <Route path='/channel/:id' element={ <ChannelDetail/> } />
        <Route path='/search/:searchText' element={ <SearchFeed/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
