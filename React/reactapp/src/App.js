import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './BasicExample';
import AppFunctionalComponent from './AppFunctionalComponent';
import AppClassComponent from './AppClassComponent';
import Form from './Form';




function App() {
  return (
    
    <div className="App">
    <AppFunctionalComponent/>
    <Form/>
    {/* <BasicExample/> */}
    {/* <AppClassComponent /> */}

    </div>
  );
}

export default App;
