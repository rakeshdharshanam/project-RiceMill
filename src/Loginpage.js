import {useState} from 'react'

function Loginpage(){

let [logindata,updatelogindata] = useState({username:"", password:""});

    return(
        <>
        <h1>Login Page</h1>

        <form>
            <label>User Name: </label>
            <input type="text" value={logindata.username}  onChange={
                (e)=>{
                    let name = e.target.value
                    let password = logindata.password
                    updatelogindata({username:name,password:password})
                }
            } />

            <br></br>

<label>Password: </label>
            <input type="password" value={logindata.password}  onChange={
                (e)=>{
                    let password = e.target.value
                    let name = logindata.username
                    updatelogindata({username:name,password:password})
                }
            } />

        </form>

        <button onClick={ ()=>
                alert(logindata.username +" : "+ logindata.password)
            }>Login</button>

        </>
    )


   

}



export default Loginpage