import React from "react";
import data from "../../../data/video-details.json";

function CommentSection() {
  const dataComments = data[0].comments;
  // console.log(dataComments);
  const commentsGen = dataComments.map((element) => {
    let { comment, name, timestamp } = element;
    timestamp = new Date(timestamp).toLocaleDateString("en", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    // console.log(name, comment, timestamp);
    return (
      <div className="comment-container-items">
        <div className="comment-container">
          <img src="" alt="" className="comment__image" />
          <div className="comment-inputs">
            <div className="comment-profile">
              <h3 className="comment-profil__name">{name}</h3>
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
    <>
      <section className="comments-container">
        <hr class="section-form__line"></hr>
        <div className="comment-container-gen">{commentsGen}</div>
      </section>
    </>
  );
}

export default CommentSection;
