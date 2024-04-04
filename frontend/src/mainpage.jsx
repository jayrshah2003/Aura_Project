
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function MainPage(){
  const navigate = useNavigate()

  const logout = () => {
    Cookies.remove("jwt-cookie")
    navigate("/")
  }


  return(
      
    <div className="homepage">
        < img src = "/image/AuraLogo.png" alt="logo" width ="200" />

      <div className="category-container">
        <div className="category">      
        <Link to="/bride">
        <div className="circle-image">       
          <img src="https://tse1.mm.bing.net/th?id=OIP.6sslM193YDvTpHQDgkHLIQHaJ_&pid=Api&P=0&h=180" alt="Bride" />
          </div>
        </Link>
        <h2>Bride</h2>
        </div>

        <div className="category">
        <Link to="/groom">
          <div className="circle-image">
          <img src="https://tse3.mm.bing.net/th?id=OIP.RoOPP4GCjePCuYfEDsVG9AHaLH&pid=Api&P=0&h=180" alt="Groom" />
          </div>
        </Link>
        <h3>Groom</h3>
        </div>

        <div className="category">
        <Link to="/work">
        <div className="circle-image">
          <img src="https://tse1.mm.bing.net/th?id=OIP.ZXwKvVMFChV8LqfYqYsW9gHaHa&pid=Api&P=0&h=180" alt="Work" />
          </div>
        </Link>
        <h4>Work</h4>
        </div>

        <div className="category">
        <Link to="/cocktail">
        <div className="circle-image">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Fl9VjNETmU_wChuJZcGzygHaKV&pid=Api&P=0&h=180" alt="Cocktail" />
          </div>
        </Link>
        <h5>Cocktail</h5>
        </div>
      </div>

      <div className="brand-container">
        <div className="brand">
        <Link to="/gucci">
        <div className="circle-image">
          <img src="https://tse4.mm.bing.net/th?id=OIP.aVcOVRyn8vuxhBTRHkskcQHaEo&pid=Api&P=0&h=180" alt="Gucci" />
          </div>
        </Link>
        <h6>Gucci</h6>
        </div>

        <div className="brand">
        <Link to="/lacoste">
        <div className="circle-image">
          <img src="https://tse2.mm.bing.net/th?id=OIP.hwMPHvm_TZIiRJ2Hj7IE2AHaEK&pid=Api&P=0&h=180" alt="Lacoste" />
          </div>
        </Link>
        <h7>Lacoste</h7>
        </div>

        <div className="brand">
        <Link to="/d&g">
        <div className="circle-image">
          <img src="https://tse2.mm.bing.net/th?id=OIP.RwASNbXgwVJJUqfJ9Vu2IQHaF7&pid=Api&P=0&h=180" alt="D&G" />
          </div>
        </Link>
        <h8>D&G</h8>
        </div>
      </div>

        <button onClick={logout}>Logout</button>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
      
    
    )
}