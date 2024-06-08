import "./style.css";
import { Link } from "react-router-dom";
import { Carousel } from "../Carousel/index";

export const Feed = ({ posts }) => {
  return (
    <main className="container">
      <div className="carouselContainer">
        <p className="destaqueText">Destaques</p>
        <Carousel />
      </div>
      <div className="feed">
        <p className="destaqueText">Todas as denúncias</p>

        {posts.map((item, index) => (
          <Link
            key={index}
            to={"/post/" + item.id}
            style={{ textDecoration: "none" }}
          >
            <article className="post">
              <h2>{item.title}</h2>
              <p className="description">{item.description}</p>
              <p className="author">Autor: {item.autor}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
};
