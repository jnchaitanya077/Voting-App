import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="jumbotron centered">
        <div className="container">
          <i className="fas fa-key fa-6x"></i>
          <h1 className="display-3">Voting App</h1>
          <p className="lead">Register or Login to Vote!!</p>
          <hr />
          <Link className="btn btn-light btn-lg" to="/register" role="button">Register</Link>
          <Link className="btn btn-dark btn-lg" to="/login" role="button">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
