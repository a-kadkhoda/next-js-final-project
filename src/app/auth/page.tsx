"use client";

import { createUserAction } from "@/actions/CreateUsers";
import { loginUserAction } from "@/actions/LogInUser";
import { setName } from "@/redux/slicers/authSlice";
import { useRouter } from "next/navigation";

import { useActionState, useEffect, useState } from "react";
import { useDispatch,  } from "react-redux";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [state, formDataSignUp] = useActionState(createUserAction, null);
  const [stateLogIn, formDataLogIn] = useActionState(loginUserAction, null);
  const router = useRouter()

  const dispatch = useDispatch();

  useEffect(() => {
    if (state?.success) {
      dispatch(setName(state.data?.name as string));
      router.push("/")
    }
    if(stateLogIn?.success){
      dispatch(setName(stateLogIn.data?.name as string));
      router.push("/")
    }
  }, [state?.success , stateLogIn?.success]);

  return (
    <>
      <div className="h-[calc(100svh-56px)] flex justify-center items-center">
        <div className="flex flex-col justify-between shadow-lg rounded-lg shadow-slate-900 border border-slate-900 p-4 w-[512px] h-[512px] ">
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-3xl font-bold">Welcome</span>
            <div className="flex gap-2">
              <span>{`Don't have an account ?`}</span>
              <button
                className="underline underline-offset-4"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Log In" : "Sign Up"}
              </button>
            </div>
          </div>
          <form
            className="flex flex-col justify-between h-full mb-8"
            action={ isSignUp ? formDataSignUp : formDataLogIn}
          >
            <div className="flex flex-col mt-16 gap-4">
              <input
                type="text"
                placeholder="Name"
                className={`input border border-slate-900 ${
                  isSignUp ? "" : "hidden"
                }`}
                name="name"
              />
              <input
                type="text"
                placeholder="Email"
                className="input border border-slate-900"
                name="email"
              />
              <input
                type="text"
                placeholder="Password"
                className="input border border-slate-900"
                name="password"
              />
              <input
                type="text"
                placeholder="Confirm Password"
                className={`input border border-slate-900 ${
                  isSignUp ? "" : "hidden"
                }`}
              />
            </div>
            <button type="submit" className="btn">
              {isSignUp ? "Sign Up" : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
