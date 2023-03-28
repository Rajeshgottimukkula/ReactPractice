// Welcome component that takes user name and greet's him good morning
//Welcome component created as FUNCTIONAL COMPONENT

// const Welcome = (props) => {

//     const { name } = props


//     return (


//         <div>

//             <h1>Hello, {name}</h1>
//             <p>Good morning</p>
//         </div>
//     )


// }
// export default Welcome



// Welcome component created as a CLASS COMPONENT
import { Component } from 'react'
class Welcome extends Component {


    render() {

        const { name } = this.props

        return (


            <div>

                <h1>Hello, {name}</h1>
                <p>Good morning</p>
            </div>

        )
    }


}

Welcome.defaultProps = {
    name: "User"
}

export default Welcome