import './App.css';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Demo from './components/Demo';

function App() {
  function sayHello() {
    alert('Hello');
  }

  return (
    <div className="text-center mt-5">
      <button onClick={sayHello} className="btn btn-primary">
        Say Hello
      </button>

      <Demo name="Cameron" title="Head Teacher" count={0}></Demo>
      <Demo name="Michelle" title="Teaching Assistant" count={0}></Demo>
      <Demo name="Mitchell" title="Teaching Assistant" count={0}></Demo>
    </div>
  );
}

export default App;
