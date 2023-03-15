// import logo from './logo.svg';
// import './App.css';
import UserProfile from "./components/UserProfile";





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> Hello React.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// const userDetails = {

//   imageUrl: "https://res.cloudinary.com/dduswozwu/image/upload/v1641725206/vijay_deverakonda_13416_27-07-2016_11-17-19_hgwwwa.jpg",
//   name: "Rajesh Gottimukkula",
//   role: "Software engineer"
// }

const userDetailsList = [

  {
    uniqueNo: 1,
    imageUrl: "https://res.cloudinary.com/dduswozwu/image/upload/v1641725206/vijay_deverakonda_13416_27-07-2016_11-17-19_hgwwwa.jpg",
    name: "Rajesh Gottimukkula",
    role: "Software engineer"
  },
  {
    uniqueNo: 2,
    imageUrl: "https://res.cloudinary.com/dduswozwu/image/upload/v1641725206/vijay_deverakonda_13416_27-07-2016_11-17-19_hgwwwa.jpg",
    name: "Rajesh Gottimukkula",
    role: "Software engineer"
  },
  {
    uniqueNo: 3,
    imageUrl: "https://res.cloudinary.com/dduswozwu/image/upload/v1641725528/sam_fpbwip.jpg",
    name: "Sirisha Boddupally",
    role: "Project Lead"
  },
  {
    uniqueNo: 4,
    imageUrl: "https://res.cloudinary.com/dduswozwu/image/upload/v1641725206/vijay_deverakonda_13416_27-07-2016_11-17-19_hgwwwa.jpg",
    name: "Kalyan Gottimukkula",
    role: "Software Developer"
  }









]


const App = () => (

  <div>
    <h1>Users List</h1>

    <ul>

      {userDetailsList.map((eachItem) => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo}></UserProfile>
      ))}

      {/* <UserProfile userDetails={userDetailsList[0]}></UserProfile>
      <UserProfile userDetails={userDetailsList[1]}></UserProfile>
      <UserProfile userDetails={userDetailsList[2]}></UserProfile> */}
    </ul>




  </div>

)

export default App;
