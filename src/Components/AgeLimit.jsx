import { useEffect, useState } from "react"
import { Input } from "./Input"
import { Over } from "./Over"
import { Under } from "./Under"


export const AgeLimit = ()=>{


    const [age, setAge] = useState(0)

    age >=18 ? "You are above the age limit" : "You are not above the age limit"

    const onChangeHandler = (event)=>{

        setVal(event.target.value)
    }

        useEffect(()=> {
            

        },[])


    return(
        <>
        <Input onChange={onChangeHandler} type={number} label={"Enter Your Age"} setVal={setAge} />
        <input></input>
        <button >Submit</button>

       {age >=18 ? <Over/> : <Under/>}
        </>
    )


}