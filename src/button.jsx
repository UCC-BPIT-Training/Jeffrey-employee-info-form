export function Button({type, name}){
    return (
        <>
            <div className='horizontal_center_button'>
                <button type={type}>{name}</button>
            </div>
        </>
    )
}