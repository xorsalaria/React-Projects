// Sajjad Salaria @xorsalaria

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Tweet() {

  return (
      <div className="tweet">
        <Avatar/>
        <div className="content">
          <NameWithHandle/><Time/>
          <Messsage/>
          <div className="buttons">
              <ReplyButton/>
              <RetweetButton/>
              <LikeButton/>
              <MoreOptionsButton/>
          </div>
        </div>
      </div>
);
}

function Avatar() {
  return (

    <img src="https://www.gravatar.com/avatar/nothing"
    className="avatar"
    alt="avatar"/>
  );
}

function Messsage() {
  return (
    <div className="message">
    Just 140 characters long.
    </div>
  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}
// arrow function
const Time =()=> (
<span className="time">2h ago</span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet />, document.getElementById('root'));
