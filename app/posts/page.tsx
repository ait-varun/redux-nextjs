"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import {
  fetchPosts,
  selectPosts,
  selectPostsStatus,
} from "@/features/posts/posts-slice";
import { useEffect } from "react";

import PostsList from "@/components/posts-list";

export default function Page() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectPostsStatus);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {status === "loading" && (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {status === "complete" && <PostsList posts={posts} />}
        </div>
        {status === "error" && (
          <p className="text-sm font-medium">No posts found</p>
        )}
      </div>
    </>
  );
}
