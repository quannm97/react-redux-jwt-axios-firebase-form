import React, { useEffect, useRef, useState } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{4,24}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

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


  const handleSubmit = async (e)=>{
    e.preventDefault();
    //no hack please
    const v1=USER_REGEX.test(user);
    const v2=PWD_REGEX.text(pwd);
    if(!v1||!v2){
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(user,pwd);
    setSuccess(true);
  }
  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      ></p>
      <h1>Register</h1>
      <form onSubmit={handleSubmit()}>
        <label htmlFor="username">
          Username:
          <span className={validName ? "valid" : "d-none"}>
            <i className="fas fa-check"></i>
          </span>
          <span className={validName || !user ? "d-none" : "invalid"}>
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
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instruction" : "offscreen"
          }
        >
          <i className="far fa-info-circle"></i>
          4 to 24 character. <br />
          Must begin with a letter. <br />
          Letter,number, underscores,hyphens allowed.
        </p>
        <label htmlFor="password">
          Password:
          <span className={validPwd ? "valid" : "d-none"}>
            <i className="fas fa-check"></i>
          </span>
          <span className={validPwd || !pwd ? "d-none" : "invalid"}>
            <i className="fas fa-times"></i>
          </span>
        </label>
        <input
          type="password"
          id="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <p
          id="pwdnote"
          className={pwdFocus || validPwd ? "instruction" : "offscreen"}
        >
          <i className="far fa-info-circle"></i>
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters:
          <span aria-label="exclamation mark">!</span>
          <span aria-label="at symbol">@</span>
          <span aria-label="hashtag">#</span>
          <span aria-label="dollar sign">$</span>
          <span aria-label="percent">%</span>
        </p>
        <label htmlFor="confirm_pwd">
          Confirm Password:
          <span className={validMatch && matchPwd ? "valid" : "d-none"}>
            <i className="fas fa-check"></i>
          </span>
          <span className={validMatch || !matchPwd ? "d-none" : "invalid"}>
            <i className="fas fa-times"></i>
          </span>
        </label>
        <input
          type="password"
          id="confirm_pwd"
          value={matchPwd}
          onChange={(e) => setMatchPwd(e.target.value)}
          required
          aria-invalid={validMatch ? "false" : "true"}
          aria-describedby="confirmnote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        <p
          id="confirmnote"
          className={matchFocus && !validMatch ? "instruction" : "offscreen"}
        >
          <i className="far fa-info-circle"></i>
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters:
          <span aria-label="exclamation mark">!</span>
          <span aria-label="at symbol">@</span>
          <span aria-label="hashtag">#</span>
          <span aria-label="dollar sign">$</span>
          <span aria-label="percent">%</span>
        </p>
        <button disabled={!validName || !validMatch || !validPwd}>Sign up</button>
      </form>
      <p>
        Already registered<br/>
        <span className="line">
          <a href="#">Sign in</a>
        </span>
      </p>
    </section>
  );
};

export default Register;
