import logo from './logo.svg';
//imports styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import Nav from './Components/Nav/Nav.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Pages/Home/Home.js';
import ListToDo from './Pages/ListToDo/ListToDo.js';
import AddToDo from './Pages/AddToDo/AddToDo.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ListToDo' element={<ListToDo />} />
          <Route path='/AddToDo' element={<AddToDo />} />
        </Routes>
        <Footer />
      </Router>




    </>
  );
}

export default App;
