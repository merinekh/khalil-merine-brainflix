import React from "react";
import mohAvatar from "../../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../../assets/images/add_comment.svg";

function Form() {
  return (
    <>
      <form action="" class="comments-form-main">
        <img src={mohAvatar} alt="" class="comments-form__image" />
        <div class="comments-form-inputs">
          <h3 class="comments-form-subtitle__comment comments-form-subtitle">
            JOIN THE CONVERSATION
          </h3>
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
    </>
  );
}

export default Form;
