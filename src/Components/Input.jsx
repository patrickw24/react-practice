export const Input = ({type, label, setVal})=>{


   
const onchangeHandler = ()=>{

    setVal(event.target.value)
}

    return(
        <>
        <div className="mb-3">
                <label className="form-label">{label}</label>
                <input onChange={onchangeHandler} type={type} className="form-control"  />
            </div>
        </>
    )

}