import React, { useEffect, useRef, useState } from "react";



const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userForcus, setUserForcus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdForcus, setUserpwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchForcus, setMatchForcus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);

    console.log(result);
    console.log(pwd);
    setValidPwd(result);

    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      ></p>
      <h1>Register</h1>
      <form action="">
        <label htmlFor="username">Username:
        <span className={validName?"valid":"d-none"}>
        <i className="fas fa-check"></i>
        </span>
        <span className={validName || !user ?"d-none":"invalid"}>
        <i className="fas fa-times"></i>
        </span>
        </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserForcus(true)}
          onBlur={() => setUserForcus(false)}
        />
        <p id="uidnote" className={userForcus && user &&!validName ? "instruction":"offscreen"}>
           <i className="far fa-info-circle"></i>
           4 to 24 character. <br/>
           Must begin with a letter. <br/>
           Letter,number, underscores,hyphens allowed.
        </p>
      </form>
    </section>
  );
};

export default Register;
