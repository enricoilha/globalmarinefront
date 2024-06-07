import { useParams } from "react-router-dom"
import { arrayOfPosts } from "../../lib/posts";
import { Header } from "../../components/Header";
import "./style.css"
import { Footer } from "../../components/Footer";
import CommentSection from "../../components/CommentsSection/index";
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom";


export const PostPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = arrayOfPosts.find((post) => post.id === parseInt(id));
    return (
        <main >
            <Header />

            <div className="postContainer" >
                <button onClick={() => navigate("/")} className="voltarContainer" > 
                    <ArrowLeft />
                    <p className="voltarText" >Voltar</p>
                </button>
                <h2 className="postTitle" >{post.title}</h2>
                <div className="dateAuthorContainer" >
                <p className="postDate" >{post.criado_em.toLocaleDateString()}</p>
                <div className="dot" />
                <p className="postAuthor" >{post.autor}</p>
                </div>
                <p className="postDescription" >{post.description}</p>
                <CommentSection postId={Number(id)} />
            </div>

            <Footer />
        </main>
    )
}

