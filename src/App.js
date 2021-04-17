 import React from 'react';

// function App() {
// 関数（ファンクショナル）コンポーネント
const App = () => {

  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "NoName"}
  ]

  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

export default App;
