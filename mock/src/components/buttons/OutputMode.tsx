import { Dispatch, SetStateAction } from 'react';

//This function is not used in the final code

/**
 * Properties of OutputMode: includes a boolean describing 
 * whether or not the current output mode is verbose
 */
interface modeProps {
  isVerbose: boolean
  setIsVerbose: Dispatch<SetStateAction<boolean>>
}


/**
 * function that creates a button informing the user what mode they are in
 * @param props modeProps
 * @returns a button
 */
export function OutputMode(props: modeProps) {
  const authenticate = () => {
    const newValue = !props.isVerbose
    props.setIsVerbose(newValue)
    return newValue
  }

  if (props.isVerbose) {
    return (
      <button aria-label='Verbose' onClick={authenticate}>Verbose</button>
    )
  } else {
    return (
      <button aria-label='Brief' onClick={authenticate}>Brief</button>
    )
  }
}