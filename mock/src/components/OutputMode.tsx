import { Dispatch, SetStateAction } from 'react';


interface modeProps {
  isVerbose: boolean
  setIsVerbose: Dispatch<SetStateAction<boolean>>
}

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