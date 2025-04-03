export function Input({label, type, onChange, minLength, pattern, placeholder}){
    return(
        <>
        <div className='input_margin'>
            <div className='med_font'>
                <label>{label}:</label>
            </div>
            <div className='small_font'>
                Ex. {placeholder}
            </div>
            <div>
                <input type={type} onChange={onChange} minLength={minLength} pattern={pattern} placeholder={placeholder} required></input>
            </div>
        </div>
        </>
    )
}