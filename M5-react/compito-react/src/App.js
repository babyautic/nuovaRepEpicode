
import './App.css';
import MyNavComponent from './Components/MyNavComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeComponent from './Components/WelcomeComponent';
import MyFooterComponent from './Components/MyFooterComponent';


function App() {
  return (
    <div className="App">
      <MyNavComponent />
      <WelcomeComponent />
      <MyFooterComponent />
    </div>
  );
}

export default App;
