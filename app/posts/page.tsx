"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { fetchPosts, selectPosts } from "@/features/posts/posts-slice";
import { useEffect } from "react";

import PostsList from "@/components/posts-list";

export default function Page() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <PostsList posts={posts} />
        </div>
      </div>
    </>
  );
}
