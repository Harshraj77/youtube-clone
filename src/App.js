import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import { Box } from '@mui/material' 
// box is nothing but a div element
const App = () => (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
         Navbar
         <Routes>
            <Route path='/' element={<Feed/>} />
            <Route path='/video/:id' element={<VideoDetail/>} />
            <Route path='/video/:id' element={<ChannelDetail/>} />
            <Route path='/search/:searchTerm' element={<SearchFeed/>} />

         </Routes>
      </Box>
    </BrowserRouter>
)

export default App
