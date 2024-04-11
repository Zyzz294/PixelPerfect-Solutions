import './App.css';
import ThreeDCardDemo from './components/3d-Comp';
import ThreeDCardDemo2 from './components/3d-Comp2';
import ThreeDCardDemo3 from './components/3d-Comp3';


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
      <h1 data-text="Pixel Perfect Solutions" >Pixel Perfect Solutions</h1>
      <p>We Try Our Best To Serve You Better</p>
      <div>
          <ThreeDCardDemo />
          <ThreeDCardDemo2 />
          <ThreeDCardDemo3 />
      </div>
     </div>
     </body>

     <footer>
      <p>Pixel Perfect Solutions 2024</p>
     </footer>
    </div>
  );
}

export default App;
