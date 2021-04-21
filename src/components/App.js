 import React, { Component } from 'react';
 import { connect } from 'react-redux';

 import { increment, decrement } from '../actions';
 
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

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
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

const mapStateToProps = state => ({ value: state.count.value });
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const mapDispatchToProps = ({ increment, decrement });

export default connect(mapStateToProps, mapDispatchToProps)(App);

