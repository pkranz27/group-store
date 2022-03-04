import React, { useState } from "react";

import ReactDOM from 'react-dom';
import './css/Reviews.css'
import { Component } from 'react'
import PropTypes from 'prop-types';

const GENERIC_NOTE_TITLE = "Leave a review";
const GENERIC_NOTE_Body = "Rip it to  shreds";

function StarRating({ savedReview }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [showStars, setStars] = useState(false)
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        star = rating
        console.log(index)
        if (showStars === false) {
          return (

            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? 'on' : 'off'}
              onClick={() =>  setRating(index)}
              onChange={() => setStars(!setStars)}
            >
              <span className="star">&#9733;</span>

            </button>

          )
        }
        else{
          <span>{StarRating.index}</span>
        }
      })}
    </div>
  )
}


function IsDisplayed({ savedReview }) {
  const [showReview, setShowReview] = useState(false);
  return (
    <div>
      {showReview && <div>
        <div className="avatar">{savedReview.avatar}

        </div>
        <h1 className="review">{savedReview.body} Rating: {savedReview.starRating}</h1>


      </div>}
      <button type="button" className="btn btn-info"
        onClick={() => {
          setShowReview(!showReview)
        }}>
        {savedReview.title}
      </button>
    </div>
  )
};

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.titleContent = React.createRef()
    this.bodyContent = React.createRef()
    this.avatarContent = React.createRef()
    this.starRating = <StarRating>{props.index}</StarRating>

    this.state = {
      title: GENERIC_NOTE_TITLE,
      body: GENERIC_NOTE_Body,
      reviewMode: false,
      currentItem: 0,
      savedReview: [{
        key: 0,
        isDisplayed: true,
        avatar: <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2018_30/2512366/180727-exasperated-woman-ac-513p.jpg" height="100px" width="100px"></img>,
        title: "Christine von Count",
        rating: 5,
        body: "\"This product runied my husbands life, he went into our room with a bag of rice and the counting machine, I can here laughs and cries coming from the room. Its been two weeks. \"",

      },
      {
        key: 1,
        isDisplayed: false,
        title: "Count von Count",
        rating: 2,
        avatar: <img src="https://muppetmindset.files.wordpress.com/2009/12/count-bats.png?w=306&h=408" height="100px" width="100px"></img>,
        body: "\"Why...*sobs*...I have no purpose if the Count is no longer the one who keeps count. *sobs* Then what am I.... Love the diffrent colors avalible.\"",
      }
      ],

    }
  }
  handleReview() {
    if (this.state.reviewMode === false) {
      this.setState({
        reviewMode: true
      })
      console.log('click')
    }
  }

  handleSave() {
    let reviews = this.state.savedReview;
    if (this.state.reviewMode === true) {
      this.setState({
        avatar: <img src={this.avatarContent.current.value} height="100px" width="100px" />,
        title: this.titleContent.current.value,
        body: this.bodyContent.current.value,
        reviewMode: false,
        rating: this.starRating
      })
      reviews.push({
        isDisplayed: true,
        avatar: <img src={this.avatarContent.current.value} height="100px" width="100px" />,
        title: this.titleContent.current.value,
        body: this.bodyContent.current.value,
        rating: this.starRating
      })
      console.log(this.state.savedReview)
    }
  }


  render() {

    let titleArea, bodyArea, buttonArea, avatarArea, avatarImage, starRating;
    if (this.state.reviewMode) {
      bodyArea = <div className="mb-3">
        <span className="input-group-text" id="basic-addon3" defaultValue="please link a img URL for profile pic">Your review</span>
        <textarea ref={this.bodyContent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      starRating = <StarRating ref={this.starRating}></StarRating>;

      titleArea = <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3" defaultValue="please link a img URL for profile pic">Author</span>
        <input type="text" ref={this.titleContent} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      avatarArea = <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3" defaultValue="please link a img URL for profile pic">Profile Picture:URL</span>
        <input type="text" className="form-control" id="basic-url" ref={this.avatarContent} aria-describedby="basic-addon3" />
      </div>

      avatarImage = <img src={avatarArea.value} alt="image" />

      buttonArea = (<div>
        <button className="btn btn-primary" onClick={this.handleSave.bind(this)} >Save</button>
      </div>);
    } else {
      titleArea = <h5 className="card-title">{this.state.savedReview.title}</h5>;
      bodyArea = <p>{this.state.savedReview.body}</p>;
      starRating = <span>{this.state.savedReview.rating}</span>

    }

    return (
      <div className="reveiw-container">
        <div >
          <div className="heading">
            <h4 id="head">Some Reviews</h4>
            <h6 id="body">-click below to see what people have to say</h6>
          </div>
          <div className="row">
            <div>

              {avatarImage}
              <div className="reviews">
                {this.state.savedReview.map((savedReview, index) => (

                  <IsDisplayed savedReview={savedReview} key={index} />
                ))}
              </div>
            </div>
          </div>

          <div className="card-body">

            <div className="review-title">{titleArea}</div>
            <div>{avatarArea}</div>
            <div>{bodyArea}</div>
            <div>{starRating}</div>
            <div>{buttonArea}</div>
            <div className>

              <button type="submit" className="btn btn-success" onClick={this.handleReview.bind(this)}>Leave a review</button>
            </div>

          </div>
        </div>

      </div>

    )

  }


}
Reviews.defaultProps = {
  title: "Leave a review",
  body: "\"Rip this to pieces \""
}
Reviews.propTypes = {
  title: PropTypes.string
}
export default Reviews;