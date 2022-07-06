import { useState } from "react"

const About =() => {
  const [count,setCount] = useState(0)
  return(
    <>
      <h3>Count { count } </h3>
      <button onClick={() => setCount(count + 1)} > Click </button>
    </>
  )
}

export default About