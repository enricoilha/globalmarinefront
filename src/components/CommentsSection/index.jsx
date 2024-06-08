import React, { useState } from "react";
import "./style.css";
import { ModalContainer } from "../ModalContainer";
import { NewCommentForm } from "../NewCommentForm";
import { useEffect } from "react";
import { arrayOfComments } from "../../lib/comments";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState(
    JSON.parse(window.localStorage.getItem("comments")).filter(
      (comentario) => comentario.postId === postId
    )
  );
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <>
      <div className="comment-section">
        <h3 className="commentTitle">Comentários</h3>

        <button
          onClick={() => setModalOpen(true)}
          type="button"
          className="novoComentarioBotao"
        >
          Adicionar novo comentário
        </button>

        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="containerUsuario">
                <p className="nomeDoAutor">{comment.autor.nome}</p>
                <p className="emailDoAutor">{comment.autor.email}</p>
              </div>
              <p className="comentarioTexto">{comment.comentario}</p>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <ModalContainer>
          <NewCommentForm
            cancelFunction={() => setModalOpen(false)}
            postId={postId}
            newCommentFunction={(comentario) =>
              setComments((state) => [...state, comentario])
            }
          />
        </ModalContainer>
      )}
    </>
  );
};

export default CommentSection;
