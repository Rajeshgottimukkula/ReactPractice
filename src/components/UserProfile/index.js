import './index.css'


const UserProfile = (props) => {

    const { userDetails } = props
    const { imageUrl, role, name } = userDetails

    return (


        <li className="d-flex flex-row">

            <img className="avatar" src={imageUrl} alt="software engineer"></img>

            <div ><h1>{name}</h1>
                <p>{role}</p>
            </div>
        </li>
    )
}




export default UserProfile