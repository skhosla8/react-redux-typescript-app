import './App.css';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <div className="gridContainer">
        <div className="gridPosts">
          <Posts />
        </div>
        <div className="gridForm">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;

