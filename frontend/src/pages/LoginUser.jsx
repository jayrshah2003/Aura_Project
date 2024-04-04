import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"



export default function LoginUser(){

    const [formData, setFormData] = useState({
        username: "",
        password: "",

    })

    const [postResponse, setPostResponse] = useState("")
    const [jwtCookie, setJwtCookie] = useState("")
    const navigate = useNavigate();

    const makeCookie = (cookie) => {
        Cookies.set("jwt-cookie", cookie)
    }


    const handleOnChange = (evt) => {
        const {name,value} = evt.target
        setFormData((prevData) => {
            return{
                ...prevData,
                [name]: value,
            }
        })
    }

    const postToDb = (user) => {
        const postUser = { ...user };
        axios.post("http://localhost:3000/login", postUser)
            .then((response) => {
                setPostResponse(<p>{response.data.message}</p>);
                if (response.data.message === "You are loged in!!!") {
                    const jwtCookie = makeCookie(response.data.token)
                    setJwtCookie(jwtCookie)

                    navigate("/main");

                }
            })
            .catch((error) => {
                console.error("Error occurred while logging in:", error);
                setPostResponse("Error occurred while logging in.");
            });
            
            
    }; 

    const postUser = async (evt) => {
        evt.preventDefault()
        console.log("heeeeeeee")
        postToDb(formData)
        setFormData({
            username: "",
            password: "",
        })
    }
 
    

    return(
        <div>
            < img src = "/image/AuraLogo.png" alt="logo" width ="200" />

            <form action="" onSubmit={postUser}>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                name="username" 
                id="username" 
                onChange={handleOnChange} 
                value={formData.username} 
                required/>
                <br />
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password" 
                id="password"
                onChange={handleOnChange}
                value={formData.password}
                required/>
                <br />
                <button>Login</button>

                <p>not a member yet? click <a href="/register"> here</a> to join</p>

            </form>
            {postResponse}
        </div>
    )
}