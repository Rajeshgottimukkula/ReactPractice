import { Component } from 'react'
class Login extends Component {

    state = {


        isLoggedIn: false

    }


    renderAuthButton = () => {



        const { isLoggedIn } = this.state

        if (isLoggedIn) {

            return (
                <button>Logout</button>
            )
        }
        return (
            <button>Login</button>
        )
    }


    render() {
        const { isLoggedIn } = this.state
        let authButton
        if (isLoggedIn) {
            authButton = <button>Logout</button>
        }
        else {
            authButton = <button>Login</button>
        }
        return (


            <div>

                <h1>Hello, user</h1>
                {//this.renderAuthButton()
                }
                {//authButton
                }
                {//isLoggedIn ? <button>Logout</button> : <button>Login</button>
                }
                {isLoggedIn && <button>Logout</button>}
                {!isLoggedIn && <button>LogIn</button>}
            </div>
        )


    }

}


export default Login