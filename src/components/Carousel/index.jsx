import { arrayOfPosts } from "../../lib/posts";
import { CarouselItem } from "./CarouselItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export const Carousel = () => {
  const posts = arrayOfPosts.slice(0, 2);

  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "sliderContainer",
  };
  return (
    <div>
      <Slider {...settings}>
        {posts.map((post, i) => (
          <CarouselItem
            key={i}
            title={post.title}
            autor={post.autor}
            description={post.description}
            postId={post.id}
          />
        ))}
      </Slider>
    </div>
  );
};
