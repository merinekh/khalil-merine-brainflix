import "./Comments.scss";
import CommentSection from "./CommentsSection/CommentSection";
import Form from "./Form/Form";

function Comments() {
  return (
    <section className="comments">
      <h2 className="comments__title">3 Comments</h2>
      <Form />
      <CommentSection />
    </section>
  );
}
export default Comments;
