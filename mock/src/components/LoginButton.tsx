import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";

interface loginProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  loginString: string;
  setLoginString: Dispatch<SetStateAction<string>>;
}

export function LoginButton(props: loginProps) {
  const authenticate = () => {
    const newValue = !props.isLoggedIn;
    props.setIsLoggedIn(newValue);
    return newValue;
  };

  function handleSubmit(loginString: string, props: loginProps) {
    const newValue = !props.isLoggedIn;
    if (loginString != "") {
      props.setIsLoggedIn(newValue);
    }
    props.setLoginString("");
    return (
      <button aria-label="Sign Out" onClick={authenticate}>
        Sign out
      </button>
    );
  }

  return (
    <div className="login-input">
      <fieldset>
        <legend>Login:</legend>
        <ControlledInput
          value={props.loginString}
          setValue={props.setLoginString}
          ariaLabel={"Login input"}
          placeholderText={"Enter Password"}
        />
      </fieldset>
      <button
        aria-label="Login"
        onClick={() => handleSubmit(props.loginString, props)}
      >
        Login
      </button>
      {/* {isLoggedIn(props)} */}
    </div>
  );
}

// function isLoggedIn(props: loginProps) {
//   if (props.isLoggedIn) {
//     return (
//       <button
//         aria-label="Sign Out"
//         onClick={authenticate}
//       >
//         Sign out
//       </button>
//     );
//   } else {
//     return (
//       <button
//         aria-label="Login"
//         onClick={() => handleSubmit(props.loginString, props)}
//       >
//         Login
//       </button>
//     );
//   }
// }

// export function loginTextBox(props: loginProps) {
//   return (
//     <div className="login-input">
//       <fieldset>
//         <legend>Login:</legend>
//         <ControlledInput
//           value={props.loginString}
//           setValue={props.setLoginString}
//           ariaLabel={"Login input"}
//           placeholderText={"Enter Username"}
//         />
//       </fieldset>
//     </div>
//   );
// }
