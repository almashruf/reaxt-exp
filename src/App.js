import ClickExample from "./components/ClickExample";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import LoginForm from "./components/LoginForm";
import Toggle from "./components/Toggle";
import UserCard from "./components/UserCard";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div>
      <h1>Welcome to My React App!</h1>
      <Greeting name="Jhon" age={30}/>
      <Greeting name="Tonoy" age={30} />
      <Greeting name="Rakib" age={30} />


      <UserCard name="Rakib1" email="rakib@gmail.com" phone={'01723045519'} />
      <UserCard name="Rakib2" email="rakib@gmail.com" phone={'01723045519'} />
      <UserCard name="Rakib3" email="rakib@gmail.com" phone={'01723045519'} />

      <Counter/>
      <UserInfo/>
      <LoginForm/>
      <Toggle/>
      <ClickExample/>
    </div>
  );
}

export default App;
