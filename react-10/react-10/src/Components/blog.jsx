import { useContext } from 'react';
import Card from './card';
import AppContext from '../Context/appcontext';

function Blog() {
  const { posts, loading } = useContext(AppContext);

  if(loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="spinner"></div>
    </div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
