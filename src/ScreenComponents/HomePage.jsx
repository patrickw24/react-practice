import { useEffect, useState } from "react"
import { Input } from "../Components/Input"
import { Over } from "../Components/Over"
import { Under } from "../Components/Under"


export const HomePage = ()=>{

    const [age, setAge] = useState(0)

    let messagePost = age >=18 ? "You are Over the Age limit!" : "You are Under the Age Limit!"

  

        useEffect(()=> {
            

        },[])


    return(
        <>
        <h1> Home Page</h1>
        <Input type="number" label="Enter Your Age" setVal={setAge} />
        
        <button >Submit</button>

       {age >=18 ? <Over message= {messagePost}/> : <Under message= {messagePost}/>}
        </>
    )

}