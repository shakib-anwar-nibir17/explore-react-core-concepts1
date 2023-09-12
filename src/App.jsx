import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const [count, setCount] = useState(0);

  const actors = ["John", "Miller", "Evan", "Jeff"];
  const singers = [
    { id: 1, name: "Mahfuzur Rahaman", age: 58 },
    { id: 2, name: "Eva Rahaman", age: 58 },
    { id: 3, name: "Mina Rahaman", age: 58 },
    { id: 4, name: "Runa Rahaman", age: 58 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
      {/* <Actor name="john"></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))} */}
      {/* <Todo task="learn react" isDone={true}></Todo>
      <Todo task="learn core concepts" isDone={false}></Todo>
      <Todo task="learn jsx" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="5500"></Device>
      <Device name="mobile" price="17000"></Device>
      <Device name="watch" price="3000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <h3>
      This device: {props.name} price:{props.price}
    </h3>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "shaka", age: 12 };
  return (
    <h3>
      I am {person.name} with age: {age + money}
    </h3>
  );
}

const { grade, score } = { grade: "7", score: "99" };
function Student({ grade = 1, score = 0 }) {
  // console.log(props);
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Name:{grade}</p>
      <p>age:{score}</p>
    </div>
  );
}
function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid green",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Developer Info</h5>
      <p>Name:</p>
      <p>age</p>
    </div>
  );
}
export default App;
