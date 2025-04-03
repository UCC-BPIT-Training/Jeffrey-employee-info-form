export function Input({label, type, onChange, minLength, pattern}){
    return(
        <>
        <div>
            <label>{label}:</label>
        </div>
        <div>
            <input type={type} onChange={onChange} minLength={minLength} required></input>
        </div>
        </>
    )
}