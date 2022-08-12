import React from "react";
import logo from "./logo.svg";
import "./App.css";

// type AppProps = {
//   message: string;
// }
// const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;
// const App: React.FunctionComponent<{ message: string }> = ({ message }) => (
//   <div>{message}</div>
// );
// const [user, setUser] = useState<User | null>(null);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
