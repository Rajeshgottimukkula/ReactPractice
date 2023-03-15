import { Component } from 'react'

class Counter extends Component {


    state = {
        count: 0
    }



    onIncrement = () => {

        this.setState(prevState => {
            console.log(`prev state count val is ${prevState.count}`)
            return { count: prevState.count + 1 }
        })
        // console.log("Increment clicked")
    }
    onDecrement = () => {

        this.setState(prevState => {
            console.log(`previous state value is ${prevState.count}`)
            return {
                count: prevState.count - 1
            }
        })
        console.log("Decrement clicked")
    }


    render() {
        const { count } = this.state
        return (
            <div className="container">

                <h1>Counter</h1>
                <p>{count}</p>
                <div className="d-flex flex-row">
                    <button className="buttons" onClick={this.onIncrement}>Increase</button>
                    <button className="buttons" onClick={this.onDecrement}>Decrease</button>
                </div>
            </div>
        )
    }
}
export default Counter