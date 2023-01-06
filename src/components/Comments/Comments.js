import "./Comments.scss";
import mohAvatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/add_comment.svg";
import data from "../../data/video-details.json";

function Comments() {
  console.log(data[0].comments);
  return (
    <section className="comments">
      <h2 className="comments__title">3 Comments</h2>
      <form action="" class="comments-form-main">
        <img src={mohAvatar} alt="" class="comments-form__image" />
        <div class="comments-form-inputs">
          <p class="comments-form-subtitle__comment comments-form-subtitle">
            JOIN THE CONVERSATION
          </p>
          <textarea
            name=""
            id=""
            cols="33"
            rows="4"
            placeholder="Enter your comment"
            class="comments-form-inputs__comment"
          ></textarea>
          <button
            type="submit"
            value="COMMENT"
            class="comments-form-inputs__button button"
          >
            <img src={commentIcon} alt="" className="button__icon" />
            <h3 className="button__text">UPLOAD</h3>
          </button>
        </div>
      </form>
    </section>
  );
}
export default Comments;
