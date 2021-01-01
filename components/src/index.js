import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail.js';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () =>{
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this ?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 12:00PM" content="Nice blog post!" avatar={faker.image.image()} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 02:00PM" content="I like the subject!" avatar={faker.image.image()}/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Today at 03:00PM" content="Very nice!" avatar={faker.image.image()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));