"use client";

import { useEffect, useRef } from "react";

interface CommentBoxProps {
  projectId: string;
  className?: string;
}

export function CommentBox({ projectId, className }: CommentBoxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const removeCommentBox = useRef<(() => void) | null>(null);

  useEffect(() => {
    const loadCommentBox = async () => {
      try {
        const commentBox = (await import("commentbox.io")).default;

        if (containerRef.current) {
          removeCommentBox.current = commentBox(projectId, {
            className: "commentbox",
            defaultBoxId: "commentbox",
            tlcParam: "tlc",
          });
        }
      } catch (error) {
        console.error("Failed to load CommentBox:", error);
      }
    };

    loadCommentBox();

    return () => {
      if (removeCommentBox.current) {
        removeCommentBox.current();
      }
    };
  }, [projectId]);

  return (
    <div ref={containerRef} className={className}>
      <div className="commentbox" />
    </div>
  );
}
