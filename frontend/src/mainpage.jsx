export default function MainPage(){
<<<<<<< Updated upstream
    return(
        <div className="features">
            <p>hhhhhhh</p>
=======
  const navigate = useNavigate()

  const logout = () => {
    Cookies.remove("jwt-cookie")
    navigate("/")
  }

  // const token = Cookies.get("jwt-cookie")
  // const decoded = jwtDecode(token)
  // const u = decoded.id


  return(
      
    <div className="homepage">
       
        <div className='welcome'>
          <p>Welcome to Aura</p>
          <Link to="/login"><button onClick={logout}>Logout</button></Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/contactus">
          <button>Contact us</button>
        </Link>
>>>>>>> Stashed changes
        </div>
    )
}