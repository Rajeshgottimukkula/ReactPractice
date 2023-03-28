class Login extends Component {

    state = {
        isLoggedIn: true
    }

    renderAuthButton = () => {
        const { isLoggedIn } = this.state

        if (isLoggedIn === true) {

            return <button>Logout</button>

        }
        else {
            return <button>Login</button>
        }
    }




    render() {

        return (



            <div>

                <h1>Hello User</h1>


            </div>
        )

    }





}
export default Login