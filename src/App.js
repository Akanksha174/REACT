
// //functional component
// // function App(){
// //   const handleClick=()=>{
// //     alert("Hi react!");
// //   }
// //   return(
// //     <div>
// //       <h1>Hello world</h1>
// //       <button onClick={handleClick}>Click me</button>
// //     </div>
// //   )
// // }
// // export default App;

// //class component
// // import React, { Component } from "react";
// // class ClassComponent extends Component{
// //   handleClick=()=>{
// //     alert("Button has clicked");
// //   }
// //   render(){
// //     return(
// //       <div>
// //         <h1>This is helloo from component class</h1>
// //         <button onClick={this.handleClick}>Click Me!</button>
// //       </div>
// //     )
// //   }
// // }
// // export default ClassComponent;

// //class component example with state
// import React, { Component } from "react";
// class MyClassCom extends Component {
//   constructor(props) {
//     super(props);
//     // Initialize component state
//     this.state = {
//       count: 0,
//     };

//   }

//   handleClick = () => {
//     // Update the state using setState()
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       // Display the current count value
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     );
//   }
// }

// export default MyClassCom;

// **********JSX*******
// function ExampleJsx(){
//   return(
    //RuleNo1 : return single root element
    //we can also use fragments rather than div  ex: <> html code </>
    // <div>  
    //   <h1>hello react</h1>
    //   <img></img>
    // </div>
    
    //Rule2 : close all the tags
  /*<div>
      <img src=""></img>
      <br></br>
      <ul>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
      </ul>
    </div> */
    
  //rule 3 Camelcase
//     <button onClick={()=>alert("abcde")} className="button">Click</button>
//   )
// }
//   export default ExampleJsx;



// JSX
// const Hi=()=>{
//   return (
//     <div>
//       <hi>Hello react!</hi>
//       <p>This is a componenet using JSx</p>
//     </div>
//   );
// }
// export default Hi;
// By using React.createElement
// import  React from "react";
// const testCreateElement=()=>{
//   return React.createElement(
// // type of element 
//   // properties of element
//   // children of element
//   'div',
//   {style:{color:"red"}},
//   null,
//   // <h1>'Hello React',</h1>
//   'Hello React' ,React.createElement('h1',null,'Welcome to React'),
//   React.createElement('p',null,'Welcome to React')
//   );
  
// }
// export default testCreateElement;

// import './App.css';
// const App=()=>{
//   return(
//     <div className="app">

//       <header className="header">
//         <nav className="nav">
//           <ul className="nav-list">
//             <li className="nav-item a"><a className="nav-list" href="#">Home</a></li>
//             <li className="nav-item a"><a className="nav-list" href="#">About Us</a></li>
//             <li className="nav-item a"><a className="nav-list" href="#">Service</a></li>
//             <li className="nav-item a"><a className="nav-list" href="#">Contact Us</a></li>
//           </ul>
//         </nav>
//       </header>
//       <main className="main-content">
//         <h1>Welcome to My Website</h1>
//         <p>This is a simple react app with header and footer</p>
//       </main>

//       <footer className="footer">
//         <p>&copy; 2024 All right reserved</p>
//       </footer>
//     </div>
//   )
// }

// export default App;

// import './App.css';
// const App=()=>{
//   return(
//     <div className="app">

//       <header className="header">
//         <nav className="nav">
//         </nav>
//       </header>
//       <main className="main-content">
//         <h1 className="main-content-h1">LPU</h1>
//         <p className="main-content-p1">Tranforming Education, Transforming India</p>
//       </main>
//     </div>
//   )
// }

// export default App;

// import Profile from "./component/profile";  // Capitalize 'Profile'

// const App = () => {
//   const user = {
//     name: 'Akanksha',
//     age: 20,
//     bio: 'Student'
//   };

//   return (
//     <div>
//       <h1>Main Component</h1>
//       <Profile name={user.name} age={user.age} bio={user.bio} /> 
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import UserList from './component/UserList';
// import UserDetail from './component/UserDetail';

// function App({ users, selectedUser, onUserSelect }) {
//   return (
//     <div className="App">
//       <h1>User List</h1>
//       <UserList users={users} onUserSelect={onUserSelect} />
//       {selectedUser && <UserDetail user={selectedUser} />}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import ParentComponent from "./component/parent";
// const App=()=>{
//   return(
//   <div>
//     <h1>ParentComponent</h1>
//     <ParentComponent/>
//   </div>
//   )
// }

// export default App;

// import React from "react";
// import { AuthProvider } from "./component/AuthContext";
// import Login from "./component/Login";

// function App() {
//   return (
//     <AuthProvider>
//       <Login />
//     </AuthProvider>
//   );
// }

// export default App;


// import React from 'react';
// const App =()=>{
//     return(
//         <nav className="navbar">
//             <div className="logo.png" alt="logo">
//                 <span>CheatenAI</span>
//             </div>
//             <ul className="nav-links">
//                 <li>Welcome</li>
//                 <li>Pages</li>
//                 <li>Dashboard</li>
//                 <li>Pricing</li>
//                 <li>SignIn</li>
//                 <li><button className="btn">Get Started for free</button></li>
//                 <li><button className="btn1">icon</button></li>
//             </ul>
//         </nav>

//         <header className="head">
//           <h1>Unlock the Power of CheatenAI with Smartest AI</h1>
//           <p1>Not Visible</p1>
//           <button className="btn">Start Writing for free</button>
//           <p2><input type="checkbox">No credit card required</input></p2>
//         </header>

//     );
// }
// export default App;


import React from 'react';
import './App.css';
const App = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="logo.png" alt="logo" />
                    <span>CheatenAI</span>
                </div>
                <ul className="nav-links">
                    <li>Welcome</li>
                    <li>Pages</li>
                    <li>Dashboard</li>
                    <li>Pricing</li>
                    <li>Sign In</li>
                    <li><button className="btn1">Get Started for free</button></li>
                    <li><button className="btn1">.</button></li>
                </ul>
            </nav>

            <header className="head">
                <h1>Unlock the Power of <br></br>CheatenAI AI<br></br>with Smartest AI</h1>
                <p>Not Visible</p>
                <button className="btn">Start Writing for free</button>
                <p><input type="checkbox"/> No credit card required</p>
            </header>
        </>
    );
}

export default App;