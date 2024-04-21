import {useState} from 'react'

function Loginpage(){

let [logindata,updatelogindata] = useState({username:"", password:""});

    return(
        
        <div className="border border-dark text-center" style={{position:"relative", top:"20vh",left:"30vw", width:"40vw"}}>
        <h1 className='bg-primary text-light'>Login Page</h1>

        <form className='mt-2'>
            <label className='bg-dark text-light'>User Name: </label>
            <input style={{width:"30vw"}} type="text" value={logindata.username}  onChange={
                (e)=>{
                    let name = e.target.value
                    let password = logindata.password
                    updatelogindata({username:name,password:password})
                }
            } />

            <br></br>

<label className='mt-2 bg-dark text-light'>Password: </label>
            <input style={{width:"30vw"}} type="password" value={logindata.password}  onChange={
                (e)=>{
                    let password = e.target.value
                    let name = logindata.username
                    updatelogindata({username:name,password:password})
                }
            } />

        </form>

        <button className='mt-2 mb-2 btn btn-primary' onClick={ ()=>
                alert(logindata.username +" : "+ logindata.password)
            }>Login</button>

        </div>
    )


   

}



export default Loginpage