import './App.css';
import ThreeDCardDemo from './components/3d-Comp';
import ThreeDCardDemo2 from './components/3d-Comp2';
import ThreeDCardDemo3 from './components/3d-Comp3';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
     <head>
      <meta name='pixel perfect solutions' content='pixel perfect solutions'/>
      <title>Pixel Perfect Solutions</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap')
      </style>
     </head>
     <body>
      <div class="container">
      <Nav />
      <h1 data-text="Pixel Perfect Solutions" >Pixel Perfect Solutions</h1>
      <p id='parag'>PixelPerfect Solutions is a digital agency specializing in creating <br/> visually stunning and user-friendly websites for clients across various industries.</p>
      <a href="#port">Portfolio</a>
      <div id='port'>
          <ThreeDCardDemo />
          <ThreeDCardDemo2 />
          <ThreeDCardDemo3 />
      </div>
     </div>
     </body>

     <footer>
      <p id='footer'>Pixel Perfect Solutions 2024</p>
     </footer>
    </div>
  );
}

export default App;
