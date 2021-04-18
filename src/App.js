 import React from 'react';
 import PropTypes from 'prop-types';

// function App() {
// 関数（ファンクショナル）コンポーネント
const App = () => {

  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "NoName", age: 3}
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

// デフォルト値の設定
// User.defaultProps = {
//   age: 1
// }

// 型チェック
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
