
import "./style.css"

export const TextArea = ({title, error, register}) => {

    return (
        <div className="textAreaContainer" >
            <p className="textAreaTitle" >{title}</p>
            <textarea {...register} type="text"  className="textAreaComponent" />
            {error?.message && <p className="errorMessage" >{error.message}</p>}
            
        </div>
    )
}