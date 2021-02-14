import logo from './logo.svg';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="jumbotron centered">
        <div class="container">
          <i class="fas fa-key fa-6x"></i>
          <h1 class="display-3">Voting App</h1>
          <p class="lead">Register or Login to Vote!!</p>
          <hr />
          <Link class="btn btn-light btn-lg" to="/register" role="button">Register</Link>
          <Link class="btn btn-dark btn-lg" to="/login" role="button">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
