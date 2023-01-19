import React from "react";
import "./Comments.scss";
import mohAvatar from "../../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../../assets/images/add_comment.svg";

function Comments({ videoData }) {
  const dataComments = videoData.comments;
  // console.log(dataComments);
  if (dataComments) {
    const commentsGen = dataComments.map((element) => {
      let { comment, id, name, timestamp } = element;
      timestamp = new Date(timestamp).toLocaleDateString("en", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      // console.log(name, comment, timestamp);
      return (
        <div className="comment-container-items" key={id}>
          <div className="comment-container">
            <img src="" alt="" className="comment__image" />
            <div className="comment-inputs">
              <div className="comment-profile">
                <h3 className="comment-profile__name">{name}</h3>
                <p className="comment-profile__date">{timestamp}</p>
              </div>
              <p className="comment__comment">{comment}</p>
            </div>
          </div>

          <hr className="section-form__line"></hr>
        </div>
      );
    });

    return (
      <>
        <section className="comments">
          <h2 className="comments__title">3 Comments</h2>
          <form action="" className="comments-form-main">
            <img src={mohAvatar} alt="" className="comments-form__image" />
            <div className="comments-form-inputs">
              <h3 className="comments-form-subtitle__comment comments-form-subtitle">
                JOIN THE CONVERSATION
              </h3>
              <textarea
                name=""
                id=""
                cols="33"
                rows="4"
                placeholder="Add a comment"
                className="comments-form-inputs__comment"
              ></textarea>
              <button
                type="submit"
                value="COMMENT"
                className="comments-form-inputs__button button"
              >
                <img src={commentIcon} alt="" className="button__icon" />
                <h3 className="button__text">COMMENT</h3>
              </button>
            </div>
            <button
              type="submit"
              value="COMMENT"
              className="comments-form-inputs__button comments-form-inputs__Tabletbutton button"
            >
              <img src={commentIcon} alt="" className="button__icon" />
              <h3 className="button__text">COMMENT</h3>
            </button>
          </form>
          <hr className="comments-form__line"></hr>
          <section className="comments-container">
            <div className="comment-container-gen">{commentsGen}</div>
          </section>
        </section>
      </>
    );
  }
}
export default Comments;
