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

  return <PostsList posts={posts} />;
}
