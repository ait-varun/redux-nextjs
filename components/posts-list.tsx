interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsList({ posts }: { posts: Post[] }) {
  return (
    <>
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
    </>
  );
}
