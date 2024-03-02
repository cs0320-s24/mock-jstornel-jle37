import "../styles/main.css";
import { Dispatch, SetStateAction } from "react";

/**
 * Properties of a login: includes a boolean describing whether 
 * or not the user is logged in
 */
interface loginProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  //This is from an attempted login portal (ignore)
  // loginString: string;
  // setLoginString: Dispatch<SetStateAction<string>>;
}

/**
 * function that assigns the value of isLoggedIn and creates a matching button state
 * @param props takes in login props
 * @returns a button in the appropriate state
 */
export function LoginButton(props: loginProps) {
  const authenticate = () => {
    const newValue = !props.isLoggedIn;
    props.setIsLoggedIn(newValue);
    return newValue;
  };

  if (props.isLoggedIn) {
    return (
      <button aria-label="Sign Out" onClick={authenticate}>
        Sign out
      </button>
    );
  } else {
    return (
      <button aria-label="Login" onClick={authenticate}>
        Login
      </button>
    );
  }
}
