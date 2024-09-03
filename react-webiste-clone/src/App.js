
import './App.css';
import AnimatedCard from './Components/AnimatedCard';
import Card from './Components/Card';
import FooterPage from './Components/FooterPage';
import FourCards from './Components/FourCards';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';


function App() {
  return (
   <div>
 <Navbar/>
 <Hero/>
 <Card  title={"Write components with code and markup"} firstpara={"React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming"} lastpara={"This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete."}/>
 <Card backgroundColor='bg-[#23272f]' title={"Add interactivity wherever you need it"} firstpara={"React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data."} lastpara={"You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."}>
 <a href='#'>
<div className='text-white font-semibold rounded-full bg-transparent mt-12 border-white border-2 p-2'> 
Add React to your page -&gt;
</div>
</a>
</Card>

 <Card title={"Go full-stack with a framework"} firstpara={"React is a library. It lets you put components together, but it doesn’t prescribe how to do routing and data fetching. To build an entire app with React, we recommend a full-stack React framework like Next.js or Remix."} lastpara={"React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components."}>
 <a href='#'>
<div className='text-white font-semibold rounded-full bg-transparent mt-12 border-white border-2 p-2'> 
Get started with a framework -&gt;
</div>
</a>
</Card>

 <Card backgroundColor='bg-[#23272f]' title={"Use the best from every platform"} firstpara={"People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform."} lastpara={"With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experience. Your organization can bridge the platform silos, and form teams that own entire features end-to-end."}>
<a href='#'>
<div className='text-white font-semibold rounded-full bg-transparent mt-12 border-white border-2 p-2'> 
Build for native platforms -&gt;
</div>
</a>
</Card>

<FourCards/>
<AnimatedCard/>
<FooterPage/>


   
   </div>
  );
}

export default App;
