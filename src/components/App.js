 import React, { Component } from 'react';
//  import PropTypes from 'prop-types';

// function App() {
// 関数（ファンクショナル）コンポーネント
// const App = () => {
//   const profiles = [
//     {name: "Taro", age: 10},
//     {name: "Hanako", age: 5},
//     {name: "NoName", age: 3}
//   ]
//   return (
//     <div>
//       {
//         profiles.map((profiles, index) => {
//           return <User name={profiles.name} age={profiles.age} key={index} />
//         })
//       }
//     </div>
//   )
// }

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    // Stateの状態を変更する際のメソッド
    // setStateでrenderがcallbackされる
    // 状態を変えても、その状態を表示するDOMを意識する必要がない
    this.setState({ count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1})
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

// const User = (props) => {
//   return <div>Hi, I am {props.name}, {props.age} years old!</div>
// }

// デフォルト値の設定
// User.defaultProps = {
//   age: 1
// }

// 型チェック
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

export default App;
