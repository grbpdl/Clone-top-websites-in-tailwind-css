
import './App.css';
import Button from './Components/Button';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';


function App() {
  return (
   <div>
 <Navbar/>
 <Hero>
  <p className='bg-white'>this is hero</p>
  </Hero>
 <Button name={"hi"} location={"thsi"}/>


   
   </div>
  );
}

export default App;
