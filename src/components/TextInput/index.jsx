import "./style.css"

export const TextInput = ({title, error, register}) => {

    return (
        <div className="textInputContainer" >
            <p className="textInputTitle" >{title}</p>
            <input {...register} type="text"  className="textInputComponent" />
            {error?.message && <p className="errorMessage" >{error.message}</p>}
            
        </div>
    )
}