import React from 'react'
import { usePlinksContext } from "../hooks/usePlinksContext";

const Landing = () => {

  const { plinks, dispatch } = usePlinksContext();

  console.log(plinks)

  return (
    <div>
      

    </div>
  )
}

export default Landing