import React from 'react';

import useStyles from './styles';
import { Button, Typography } from '@material-ui/core';
import NothingFound from 'assets/icons8-nothing-found-80.png';
import { Editor } from '@tinymce/tinymce-react';

const ReviewsBlock = () => {
  const classes = useStyles();
  const [showReviewForm, setShowReviewForm] = React.useState(false);
  const [reviewContent, setReviewContent] = React.useState('');

  const handleEditorChange = (content, editor) => {
    setReviewContent(content);
  };

  return (
    <div className={classes.root}>
      {!showReviewForm && (
        <div className={classes.noReviewsBlock}>
          <img alt="" src={NothingFound} height={80} width={80} />
          <Typography className={classes.noReviewsTitle}>
            No reviews yet
          </Typography>
        </div>
      )}
      {showReviewForm && (
        <div>
          <Editor
            init={{
              height: 350,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help',
            }}
            onEditorChange={handleEditorChange}
            apiKey={process.env.TINY_API_KEY}
          />
          <Button className={classes.submitBtn}>Submit</Button>
        </div>
      )}
      {!showReviewForm && (
        <Button
          onClick={() => setShowReviewForm(true)}
          className={classes.addNewReviewBtn}
        >
          Add review
        </Button>
      )}
    </div>
  );
};

export default ReviewsBlock;
