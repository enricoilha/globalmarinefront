import CarouselComponent, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { arrayOfPosts } from '../../lib/posts';
import { CarouselItem } from './CarouselItem';



export const Carousel = () => {
  const posts = arrayOfPosts.slice(0,2)
  return (
 
     <CarouselComponent
      plugins={[
      'infinite',
      {
      resolve: autoplayPlugin,
      options: {
        interval: 3000,
      }
    },
  ]}   
  animationSpeed={1000}
>
  
  {posts.map((post,i) => (
    <CarouselItem 
    key={i} 
    title={post.title} 
    autor={post.autor} 
    description={post.description} 
    postId={post.id}
    />
  ))}

</CarouselComponent>

  );
}

