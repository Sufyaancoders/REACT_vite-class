import logo from './logo.svg';
import './App.css';
import  Item from './Component/index.js'; // Import the 'Component'
import Head from './Component/head.js';
import Body from './Component/body.js';
function App() {
  return (
    <Body>
    <div>
     <Item></Item>
     <Head day="01" month="jan" year="2021"></Head>
    <div className="App">
      helllo  
    </div>
    </div>
    </Body>
  );
}

export default App;
