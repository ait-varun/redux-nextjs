interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsList({ posts }: { posts: Post[] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            data-testid="post-item"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">
              User ID: <span className="font-semibold">{post.userId}</span>
            </p>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
