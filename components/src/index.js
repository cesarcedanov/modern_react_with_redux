import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Cesar" 
        text="I love ur post."
        avatarSrc={faker.image.avatar()}
        datetime={Date()}
      />
      <CommentDetail 
        author="Abimael" 
        text="Agree."
        avatarSrc={faker.image.avatar()}
        datetime={Date()}
      />
      <CommentDetail 
        author="Arlenys" 
        text="Amazing!"
        avatarSrc={faker.image.avatar()}
        datetime={Date()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));