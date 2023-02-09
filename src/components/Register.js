import React, { useEffect, useRef, useState } from "react";

const USER_REGEX = /^[a-zA-Z][a-ZA-Z0-9]{3,23}$/;
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
    userRef.current.forcus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.text(user);
    console.log(result);
    console.log(result);
    setValidName(result);
  }, [user]);

  useEffect(()=>{
    const result= PWD_REGEX.test(pwd);

    console.log(result);
    console.log(pwd);
    setValidPwd(result);

    const match = pwd === matchPwd;
    setValidMatch(match)

  },[pwd , matchPwd])

  useEffect(()=>{
    setErrMsg('');
  },[user,pwd,matchPwd])

  return <section>
    <p></p>
  </section>;
};

export default Register;
