import "../styles/main.css";
import { Dispatch, SetStateAction } from "react";

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
