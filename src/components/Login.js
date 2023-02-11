import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";


const LOGIN_URL='/auth';
const Login = () => {
  const {setAuth}= useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      const respone= await axios.post("result.json").then()
      setUser('');
    setPwd('');
    setSuccess(true);
    } catch (err) {
      
    }



    

  }
  return (
    <div>
        {success? (
            <section>
                <h1>You are logged in</h1>
                <br />
                <p>
                    <a href="#">Go to Home</a>
                </p>
            </section>
        ):

        
     ( <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" 
          id="username" 
          ref={userRef}
          autoComplete="off"
          onChange={(e)=>setUser(e.target.value)}
          value={user}
          required
          />
          <label htmlFor="password">Password:</label>
          <input type="password" 
          id="password" 
          onChange={(e)=>setPwd(e.target.value)}
          value={pwd}
          required
          />
          <button>Sign In</button>
        </form>
        Need an Account?<br/>
        <span className="line">

            <a href="#" >Sign up</a>
        </span>
      </section>)
      }
    </div>
  );
};

export default Login;
