import { useContext } from 'react'
 
 import { UserContext } from '../App.js'





export default function Nav() {
    const { userState, setUserState } = useContext(UserContext)

    return (
    
        <header>
    <ul>
            
            <li><a href="/" target='blank' rel='noopener nonreferrer'>Home</a></li>
            <li><a href="new-post" target='blank' rel='noopener nonreferrer'>Add Post</a></li>
            <li><a href="/login" target='blank' rel='noopener nonreferrer'>Login</a></li>
            <li><a href="/signup" target="_blank" rel="noopener noreferrer">Sign up</a></li>
             <li style={{color: 'white'}}>{userState.email}</li>

       </ul>
        </header>

        



    )


}