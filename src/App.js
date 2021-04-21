 import React from 'react';

// function App() {

// クラスコンポーネント
// class App extends Component {
//   render () {
//     const greeting = "Hello World.";

//     return (
//       <React.Fragment>
//           <h1 className="foo">
//             {greeting}
//           </h1>
//           <label htmlFor="bar">bar</label>
//           <input type="text" onChange={() => {console.log("Hi!")}} />
//       </React.Fragment>
//     );
//   }
// }

// 関数（ファンクショナル）コンポーネント
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
