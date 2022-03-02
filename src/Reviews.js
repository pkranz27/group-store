import React, { useState } from "react";

import ReactDOM from 'react-dom';
import './css/Reviews.css'
import { Component } from 'react'
import PropTypes from 'prop-types';

const GENERIC_NOTE_TITLE = "Leave a review";
const GENERIC_NOTE_Body = "Rip it to  shreds";




function IsDisplayed({ savedReview }) {
  const [showReview, setShowReview] = useState(false);
  return (
    <div>
      {showReview && <div>
        <span>{savedReview.avatar}</span>
        <h1 className="review">{savedReview.body}</h1>
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
    this.state = {
      title: GENERIC_NOTE_TITLE,
      body: GENERIC_NOTE_Body,
      reviewMode: false,
      savedReview: [{
        key: 0,
        isDisplayed: true,
        avatar: <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2018_30/2512366/180727-exasperated-woman-ac-513p.jpg" height="100px" width="100px"></img>,
        title: "Christine von Count",

        body: "\"This product runied my husbands life, he went into our room with a bag of rice and the counting machine, I can here laughs and cries coming from the room. Its been two weeks. \"",

      },
      {
        key: 1,
        isDisplayed: false,
        title: "Count von Count",
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
        avatar: <img src={this.avatarContent.current.value} height="100px" width="100px" /> ,
        title: this.titleContent.current.value,
        body: this.bodyContent.current.value,
        reviewMode: false

      })
      reviews.push({
        isDisplayed: true,
        avatar: <img src={this.avatarContent.current.value} height="100px" width="100px" /> ,
        title: this.titleContent.current.value,
        body: this.bodyContent.current.value,
      })
      console.log(this.state.savedReview)
    }
  }



  render() {
    let titleArea, bodyArea, buttonArea, avatarArea, avatarImage;
    if (this.state.reviewMode) {
      titleArea = <input ref={this.titleContent} className='title-input' defaultValue='Author'></input>;
      bodyArea = <textarea ref={this.bodyContent} className='body-area' defaultValue="Your review"></textarea>
      avatarArea = <input ref={this.avatarContent} type="text" className="filetype" ></input>
      avatarImage= <img src={avatarArea.value} />
      buttonArea = (<div>
        <button className="btn btn-primary" onClick={this.handleSave.bind(this)} >Save</button>
      </div>);
    } else {
      titleArea = <h5 className="card-title">{this.state.savedReview.title}</h5>;
      bodyArea = <p>{this.state.savedReview.body}</p>;

    }

    return (
      <div>
        <div >
          <h4>Some Reviews</h4>
          <h6>-click below to see what people have to say</h6>
          <div className="row">
            <div className="review-container">
              <ul> some
              {avatarImage}
                {this.state.savedReview.map((savedReview, index) => (

                  <li> <IsDisplayed savedReview={savedReview} key={index} /></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="card-body">

            <div className="review-title">{titleArea}</div>
            {bodyArea}
            {avatarArea}
            {buttonArea}
            <div className="btn btn-info">

              <button type="submit" className="review-btn" onClick={this.handleReview.bind(this)}>Leave a review</button>
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