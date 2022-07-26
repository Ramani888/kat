import { Switch } from '@mui/material';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from '../../components/Sidebar/Sidebar'
import { Aside, Footer, Header, MainContainer, SubTitle } from './Main.styled'

const Main = () => {
  return (
    <MainContainer>
      <Header></Header>
      <Aside>
        {/* <Sidebar /> */}
        <Router>
          <Routes>
            <Route path="/about-us" element={<Sidebar />} />
            <Route path="/about-us/aim" element={<Sidebar />} />
            <Route path="/about-us/vision" element={<Sidebar />} />
            <Route path="/services" element={<Sidebar />} />
            <Route path="/services/services1" element={<Sidebar />} />
            <Route path="/services/services2" element={<Sidebar />} />
            <Route path="/services/services3" element={<Sidebar />} />
            <Route path="/contact" element={<Sidebar />} />
            <Route path="/events" element={<Sidebar />} />
            <Route path="/events/events1" element={<Sidebar />} />
            <Route path="/events/events2" element={<Sidebar />} />
            <Route path="/support" element={<Sidebar />} />
          </Routes>
        </Router>
      </Aside>
      <SubTitle></SubTitle>
      <Footer></Footer>
    </MainContainer>
  )
}

export default Main