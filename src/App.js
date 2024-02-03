import './App.css';
import Toogle from './Toogle';
import Navbar from './Navbar';
import Bod from './Bod';
import Meth from './Meth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './component/about';
import Contact from './component/contact';
import Create from './component/create';

function App() {

  // const heading = 'The blog heading'
  // const heading2 = 'The second heading'

  return (
    <div className="App">

      <Navbar />
      <Bod />
      
      <Router>
        <Routes>
          <Route path='/' element={<Bod />} />
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<Create />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>


      <Toogle />
      <Meth />
    </div>
  );
}


export default App;
