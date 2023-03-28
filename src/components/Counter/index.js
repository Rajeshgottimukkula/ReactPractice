// import { Component } from 'react'

// class Counter extends Component {


//     state = {
//         count: 0
//     }



//     onIncrement = () => {

//         this.setState(prevState => {
//             console.log(`prev state count val is ${prevState.count}`)
//             return { count: prevState.count + 1 }
//         })
//         // console.log("Increment clicked")
//     }
//     onDecrement = () => {

//         this.setState(prevState => {
//             console.log(`previous state value is ${prevState.count}`)
//             return {
//                 count: prevState.count - 1
//             }
//         })
//         console.log("Decrement clicked")
//     }


//     render() {
//         const { count } = this.state
//         return (
//             <div className="container">

//                 <h1>Counter</h1>
//                 <p>{count}</p>
//                 <div className="d-flex flex-row">
//                     <button className="buttons" onClick={this.onIncrement}>Increase</button>
//                     <button className="buttons" onClick={this.onDecrement}>Decrease</button>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Counter





//Counter practice using class component

// import { Component } from 'react'
// class Counter extends Component {


//     state = {


//         count: 0
//     }


//     onIncrease = () => {


//         console.log("Increase clicked")

//         this.setState(prevState => {
//             console.log(`State's prev value is ${prevState.count}`)

//             return {
//                 count: prevState.count + 1
//             }
//         })



//     }



//     onDecrease = () => {


//         console.log("Decrease clicked")

//         this.setState(prevState => {

//             return {
//                 count: prevState.count - 1
//             }

//         })

//     }



//     render() {

//         const { count } = this.state

//         return (



//             <div>



//                 <h1>Counter</h1>
//                 <p>{count}</p>
//                 <button onClick={this.onIncrease}>Increase</button>
//                 <button onClick={this.onDecrease}>Decrease</button>
//             </div>
//         )
//     }


// }
// export default Counter