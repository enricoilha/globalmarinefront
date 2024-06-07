
import { Link } from "react-router-dom"
import "./style.css"

export const CarouselItem = ({title, description, autor, postId}) => {

    return (
        <Link to={"/post/" + postId} style={{ textDecoration: "none"}} className="carouselItemLink">
        <div className="carouselItemContainer" >
            <p className="postTitleCarousel" >{title}</p>
            <p className="postDescriptionCarousel" >{description}</p>
            <p className="postAutorCarousel" >{autor}</p>
            <p className="cliqueAcessarCarousel" >Clique para acessar!</p>
        </div>
        </Link>
    )
}