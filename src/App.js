import './App.css';
// import Toogle from './Toogle';
import Navbar from './Navbar';
import Bod from './Bod';
// import Meth from './Meth';
import { Routes, Route } from 'react-router-dom';

import About from './component/about';
import Contact from './component/contact';
import Create from './component/create';
import NotFound from './component/not-found';
import ContentDetails from './component/content-details';

function App() {
  return (
    <div className="App">

      <Navbar />
     
      {/* <Bod /> */}
      
        <Routes>
          <Route path='/' element={<Bod />} />
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<Create />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contents/:number'element={<ContentDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      


      {/* <Toogle /> */}
      {/* <Meth /> */}
      
    </div>
  );
}

export default App;
