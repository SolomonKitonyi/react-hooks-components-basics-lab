import React from "react";

function NavBar() {
  return (
    <div>
       <nav>
         <a href="#home">I'm a link!</a>
       </nav>
       <Home />
       <About />
    </div>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}
function About() {
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      {/* add your <About> component here */}
    </div>
  );
}

export default App;
