import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      <h1>hello from app</h1>
      {/*functional components*/}
      {/*<Greet name='srini' greet='welcome'> <p>this children</p></Greet>*/}
      {/*<Greet name='srinivas' greet='Welcome'/>*/}
      {/*<Greet name='vobilineni' greet='well'/>*/}
      {/*class component*/}
      {/*<Welcome name='srini' greet='welcome'><p>this children</p></Welcome>*/}
      {/*<Welcome name='srinivas' greet='Welcome'/>*/}
      {/*<Welcome name='vobilineni' greet='well'/>*/}
      {/*<Hello/>*/}
      {/*<Message/>*/}
      {/*<Counter/>*/}
      {/*<FunctionClick />*/}
      {/*<ClassClick/>*/}
      <EventBind/>
    </div>
  );
}

export default App;
