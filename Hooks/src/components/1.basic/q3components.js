import { useEffect, useRef } from "react"

function Q3components({count,setCount}) {
  const timeRef = useRef();
  useEffect(()=>{
    timeRef.current = setInterval(()=>{
      setCount((prev)=>prev + 1);
    },2000)
    return () =>{
      clearInterval(timeRef.current);
      setCount(0);
    }
  },[])

  return <div> 🏃‍♂️ 줄넘기 ... ing </div>;
}
export default Q3components;
