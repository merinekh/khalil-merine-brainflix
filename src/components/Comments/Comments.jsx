import "./Comments.scss";
import mohAvatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/add_comment.svg";
import data from "../../data/video-details.json";

function Comments() {
  const dataComments = data[0].comments;
  console.log(dataComments);
  const commentsGen = dataComments.map((element) => {
    let { comment, name, timestamp } = element;
    timestamp = new Date(timestamp).toLocaleDateString();

    console.log(name, comment, timestamp);
    return (
      <div className="comment-container-items">
        <div className="comment-container">
          <img src="" alt="" className="comment__image" />
          <div className="comment-inputs">
            <div className="comment-profile">
              <p className="comment-profil__name">{name}</p>
              <p className="comment-profil__date">{timestamp}</p>
            </div>
            <p className="comment__comment">{comment}</p>
          </div>
        </div>

        <hr class="section-form__line"></hr>
      </div>
    );
  });
  return (
    <section className="comments">
      <h3 className="comments__title">3 Comments</h3>
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
      <section className="comments-container">
        <hr class="section-form__line"></hr>
        <div className="comment-container-gen">{commentsGen}</div>
      </section>
    </section>
  );
}
export default Comments;
