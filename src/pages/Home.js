import React,{useState, useEffect} from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
const Home = () => {
    const [user, setUser] = useState('')
    const [profile, setProfile] = useState([])
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log(error)
    })
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    useEffect(()=>{
        if(user){
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
            {
                headers:{
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            }).then(res => {
                console.log(res)
                setProfile(res.data)
            }).catch(err => console.log(err))
                
        }
    },[user])
  return (
    <div>
        <h1>Profile</h1>
        {
            profile ? (
                <div>
                    <p>{profile}</p>
                </div>
            ) : (<button onClick={logOut}>Log out</button>)
        }
    </div>
  )
}

export default Home