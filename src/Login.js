import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Header from "./Header";

function Login() {
  //eslint-disable-next-line
  const [email, setEmail] = useState("");
  //eslint-disable-next-line
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase login shittt....
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    // some fancy firebase login shittt....
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <Header />
      <div className="login bg-white flex flex-col items-center h-screen">
        <Link to={"/"}>
          <img
            className="w-[100px] object-contain my-[20px] mx-auto"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
          />
        </Link>
        <div className="login--container w-[300px] flex flex-col border border-solid border-[lightgray] p-[20px] rounded-[5px]">
          {/* font-size of h1 is 500 */}
          <h1 className="mb-[20px]">Sign-In</h1>
          <form action="">
            <h1 className="mb-[5px]">Email</h1>
            <input
              className="h-[30px]  mb-[10px] bg-white w-[98%] border border-solid border-black "
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h1 className="mb-[5px]">Password</h1>
            <input
              className="h-[30px]  mb-[10px] bg-white w-[98%] border border-solid border-black "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-[#f0c14b] rounded-[2px] w-full h-[30px] border border-solid border-[#aa8734] mt-[10px]"
              onClick={signIn}
            >
              SIGN IN
            </button>
          </form>
          <p className="mt-[15px] text-[12px]">
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of use
            and sale. Please see our Privacy Notice, our Cookies Notice and our
            interest based ads notice.
          </p>
          <button
            className="rounded-[2px] w-full h-[30x] border border-solid mt-[10px] border-[darkgray]"
            onClick={register}
          >
            Create your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
