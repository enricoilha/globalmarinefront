import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as y from "yup"
import "./style.css"
import { TextInput } from "../TextInput"
import { TextArea } from "../TextArea"
import { arrayOfComments } from "../../lib/comments"

const formSchema = y.object({
    nome: y.string().required("Campo obrigatório"),
    cpf: y.string().required("Campo obrigatório"),
    email: y.string().email("Insira um email válido").required("Campo obrigatório"),
    comentario: y.string().required("Campo obrigatório"),
})

export const NewCommentForm = ({cancelFunction, postId, newCommentFunction}) => {
    const { handleSubmit, register, formState:{ errors }, watch} = useForm({resolver: yupResolver(formSchema)})
    const onSubmit = (fields) => {
        newCommentFunction({
            comentario: fields.comentario,
            postId,
            autor: {
            cpf: fields.cpf,
            nome: fields.nome,
            email: fields.email
        }})

        return cancelFunction()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}  className="newCommentFormContainer" >
            <p className="newCommentFormHeader" >Escreva um comentário</p>
            <p className="newCommentFormDescription" >Compartilhe informações</p>
            <TextInput title={"Seu Nome: "} error={errors.nome} register={{...register("nome")}} />
            <TextInput title={"Seu Email: "} error={errors.email} register={{...register("email")}} />
            <TextInput title={"Seu CPF: "} error={errors.cpf} register={{...register("cpf")}} />
            <TextArea title={"Seu Comentário: "} error={errors.comentario} register={{...register("comentario")}} />

       <div className="formButtonsContainer" >
        <button className="formCancelButton"  type="button" onClick={cancelFunction}>Cancelar</button>
        <button className="formSubmitButton"  type="submit">Criar</button>
       </div>
        </form>
    )
}