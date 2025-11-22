declare module "commentbox.io" {
  interface CommentBoxOptions {
    className?: string;
    defaultBoxId?: string;
    tlcParam?: string;
    backgroundColor?: string;
    textColor?: string;
    subtextColor?: string;
    buttonText?: string;
    buttonColor?: string;
    autoSignOn?: boolean;
  }

  function commentBox(
    projectId: string,
    options?: CommentBoxOptions
  ): () => void;

  export default commentBox;
}
