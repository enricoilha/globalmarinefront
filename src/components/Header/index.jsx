import { useState } from "react";
import "./style.css";
import { ModalContainer } from "../ModalContainer";
import { NewPostForm } from "../NewPostForm";

export const Header = ({ newPostFunction, posts }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <header>
        <div />
        <p>Praia Limpa</p>
        <div className="divButton">
          <button onClick={() => setModalOpen(true)}>
            Adicionar Nova Denúncia
          </button>
        </div>
      </header>

      {modalOpen && (
        <ModalContainer>
          <NewPostForm
            cancelFunction={() => setModalOpen(false)}
            newPostFunction={newPostFunction}
            posts={posts}
          />
        </ModalContainer>
      )}
    </>
  );
};
