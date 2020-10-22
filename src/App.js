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
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import './appStyle.css';
import styles from './appStyles.module.css';
import Form from "./components/Form";
import LifeCycleA from "./components/lifeCycles/LifeCycleA";
import FragmentDemo from "./components/fragment/FragmentDemo";
import Table from "./components/fragment/Table";
import ParentComp from "./components/pureComponent/ParentComp";
import RefsDemo from "./components/refs/RefsDemo";
import FocusInput from "./components/refs/FocusInput";
import FRParent from "./components/refs/FRParent";
import PortalDemo from "./components/PortalDemo";
import ErrorBoundary from "./components/lifeCycles/ErrorBoundary";
import Hero from "./components/lifeCycles/Hero";
import ClickCounter from "./components/higherOrderComponents/ClickCounter";
import MouseOver from "./components/higherOrderComponents/MouseOver";
import ClickCount from "./components/renderProps/ClickCount";
import MouseCount from "./components/renderProps/MouseCount";
import User from "./components/renderProps/User";
import RenderPropCounter from "./components/renderProps/RenderPropCounter";
import ComponentE from "./components/context/ComponentE";
import ComponentC from "./components/context/ComponentC";
import {UserProvider} from "./components/context/userContext";
import PostList from "./components/http/PostList";
import PostForm from "./components/http/PostForm";
import ClassCounter from "./components/hooks/useState/ClassCounter";
import HookCounter from "./components/hooks/useState/HookCounter";
import HookCounterTwo from "./components/hooks/useState/HookCounterTwo";
import HookCounterThree from "./components/hooks/useState/HookCounterThree";
import HookCounterFour from "./components/hooks/useState/HookCounterFour";
import ClassCounterOne from "./components/hooks/useEffect/ClassCounterOne";
import UseEffectHook from "./components/hooks/useEffect/UseEffectHook";
import ClassMouse from "./components/hooks/useEffect/ClassMouse";
import HookMouse from "./components/hooks/useEffect/HookMouse";
import MouseContainer from "./components/hooks/useEffect/MouseContainer";
import IntervalClassCounter from "./components/hooks/useEffect/IntervalClassCounter";
import IntervalHookCounter from "./components/hooks/useEffect/IntervalHookCounter";
import DataFetching from "./components/hooks/http/DataFetching";

function App() {
  return (
    <div className="App">
      <h1>hello from app</h1>
      {/*<h1 className='error'>error</h1>*/}
      {/*<h1 className={styles.success}>success</h1>*/}
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
      {/*<EventBind/>*/}
      {/*<ParentComponent/>*/}
      {/*<UserGreeting />*/}
      {/*<NameList />*/}
      {/*<Stylesheet primary={true}/>*/}
      {/*<Inline primary={true}/>*/}
      {/*<Form/>*/}
      {/*<LifeCycleA />*/}
      {/*<FragmentDemo />*/}
      {/*<Table />*/}
      {/*<ParentComp />*/}
      {/*<RefsDemo />*/}
      {/*<FocusInput/>*/}
      {/*<FRParent/>*/}
      {/*<PortalDemo/>*/}
      {/*<ErrorBoundary><Hero name='sri'/></ErrorBoundary>*/}
      {/*<ErrorBoundary><Hero name='srini'/></ErrorBoundary>*/}
      {/*<ErrorBoundary><Hero name='joker'/></ErrorBoundary>*/}
      {/*<ClickCounter/>*/}
      {/*<MouseOver/>*/}
      {/*<ClickCount/>*/}
      {/*<MouseCount/>*/}
      {/*<User render={(isLoggedIn) => isLoggedIn ? 'srini' : 'guest'}/>*/}
      {/*<RenderPropCounter render={(count, countHandler) => (<ClickCount count={count} countHandler={countHandler}/>)}/>*/}
      {/*<RenderPropCounter render={(count, countHandler) => (<MouseCount count={count} countHandler={countHandler}/>)}/>*/}
      {/*passing as children*/}
      {/*<RenderPropCounter>{(count, countHandler) => (<ClickCount count={count} countHandler={countHandler}/>)}</RenderPropCounter>*/}
      {/*<RenderPropCounter>{(count, countHandler) => (<MouseCount count={count} countHandler={countHandler}/>)}</RenderPropCounter>*/}
      {/*<UserProvider value='srini'><ComponentC/></UserProvider>*/}
      {/*<PostList/>*/}
      {/*<PostForm/>*/}
      {/***************Hooks*************/}
      {/*<ClassCounter/>*/}
      {/*<HookCounter />*/}
      {/*<HookCounterTwo/>*/}
      {/*<HookCounterThree/>*/}
      {/*<HookCounterFour/>*/}
      {/*<ClassCounterOne />*/}
      {/*<UseEffectHook />*/}
      {/*<ClassMouse />*/}
      {/*<HookMouse />*/}
      {/*<MouseContainer />*/}
      {/*<IntervalClassCounter/>*/}
      {/*<IntervalHookCounter/>*/}
      {/*<DataFetching/>*/}
    </div>
  );
}

export default App;
