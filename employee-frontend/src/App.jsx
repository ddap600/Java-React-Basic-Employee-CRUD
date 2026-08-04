import './App.css'
import './HelloWorld.jsx'
import HelloWorld from "./HelloWorld.jsx";
import ListEmployee from "./components/ListEmployee.jsx";
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <Header />
      <HelloWorld />
      <ListEmployee />
      <Footer />
    </>
  )
}

export default App
