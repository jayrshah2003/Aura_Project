import { Link } from "react-router-dom"

export default function NotAuthorized(){
    return (
    <div><p>Not authorized
    </p>
    <p>Please log in !!</p>
    <Link to = "/login">
    <button>Login</button>
    </Link>
    
    </div>
    )
    
}