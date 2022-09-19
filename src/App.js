import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Form />
      </Container>
    </div>
  );
}

export default App;
