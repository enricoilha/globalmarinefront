import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as y from "yup";
import "./style.css";
import { TextInput } from "../TextInput";
import { TextArea } from "../TextArea";
/**
 *      id: 1,
        title: "Lixo na praia do Bonete",
        description: "Na Praia do Bonete, em Ilhabela, lixo espalhado está prejudicando o ambiente. Resíduos plásticos, latas e outros detritos estão afetando a fauna marinha e a beleza natural do local. Solicitamos medidas urgentes de limpeza e conscientização para preservar esse paraíso.",
        autor: "João Silva",
        criado_em: new Date(2024, 5, 5)
 */

const formSchema = y.object({
  title: y.string().required("Campo obrigatório"),
  description: y.string().required("Campo obrigatório"),
  autor: y.string().required("Campo obrigatório"),
});

export const NewPostForm = ({ cancelFunction, newPostFunction, posts }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  console.log(errors);

  const onSubmit = (fields) => {
    newPostFunction({
      description: fields.description,
      autor: fields.autor,
      title: fields.title,
      id: posts.length + 1,
      criado_em: new Date(),
    });

    return cancelFunction();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="newCommentFormContainer">
      <p className="newCommentFormHeader">Escreva uma denúncia</p>
      <p className="newCommentFormDescription">Denuncie !</p>
      <TextInput
        title={"Seu Nome: "}
        error={errors.autor}
        register={{ ...register("autor") }}
      />
      <TextInput
        title={"Título: "}
        error={errors.title}
        register={{ ...register("title") }}
      />
      <TextArea
        title={"Sua denúncia: "}
        error={errors.description}
        register={{ ...register("description") }}
      />

      <div className="formButtonsContainer">
        <button
          className="formCancelButton"
          type="button"
          onClick={cancelFunction}
        >
          Cancelar
        </button>
        <button className="newFormSubmitButton" type="submit">
          Denunciar
        </button>
      </div>
    </form>
  );
};
