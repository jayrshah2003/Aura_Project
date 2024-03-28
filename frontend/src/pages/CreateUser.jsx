import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function CreateUser(){

    const [formData, setFormData] = useState({
        username: "",
        password: "",

    })

    const [postResponse, setPostResponse] = useState()
    const navigate = useNavigate();


    const handleOnChange = (evt) => {
        const {name,value} = evt.target
        setFormData((prevData) => {
            return{
                ...prevData,
                [name]: value,
            }
        })
    }

    const postToDb = async (user) => {
        const postUser = { ...user };
        axios
            .post("http://localhost:3000/register", postUser)
            .then((response) => {
                setPostResponse(<p>{response.data}</p>);
                if (response.data === "User is created") {
                    navigate("/login");
                }
            })
            .catch((error) => {
                console.error("Error occurred while creating user:", error);
                setPostResponse("Error occurred while creating user.");
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
                <button>Create account</button>
            </form>
            {postResponse}
        </div>
    )
}