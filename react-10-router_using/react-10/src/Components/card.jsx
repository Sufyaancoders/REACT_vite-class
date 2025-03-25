function Card({post}) {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-4">
      <div className="text-sm text-gray-600">ID: {post.id}</div>
      
      <div className="mt-2">
        <h4 className="text-xl font-bold text-gray-900">
          {post.title}
        </h4>
        <p className="text-gray-600">{post.author}</p>
        <p className="mt-2 text-gray-500">
          {post.category}
        </p>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags && post.tags.map((tag) => (
          <span 
            // key={index}
            className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default Card;