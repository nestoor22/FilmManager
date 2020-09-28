import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Editor } from '@tinymce/tinymce-react';

import { Button, Typography } from '@material-ui/core';

import NothingFound from 'assets/icons8-nothing-found-80.png';
import { ADD_REVIEW } from 'graphql/mutations/shows';
import { SHORT_SHOW_REVIEWS } from 'graphql/queries/shows';
import { Loader } from 'components';

import useStyles from './styles';

const ReviewsBlock = ({ showId }) => {
  const classes = useStyles();
  const [addReview] = useMutation(ADD_REVIEW);

  const { data, loading, refetch } = useQuery(SHORT_SHOW_REVIEWS, {
    fetchPolicy: 'no-cache',
    variables: {
      showId: showId,
    },
  });

  const [showReviewForm, setShowReviewForm] = React.useState(false);
  const [reviewContent, setReviewContent] = React.useState('');

  const handleEditorChange = (content, editor) => {
    setReviewContent(content);
  };

  const handleSubmitReview = () => {
    addReview({
      variables: {
        showId: showId,
        content: reviewContent,
      },
    }).then(() => {
      setShowReviewForm(false);
      setReviewContent('');
      refetch();
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={classes.root}>
      {!showReviewForm && data?.showReviews.length === 0 && (
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
          <Button
            onClick={() => handleSubmitReview()}
            className={classes.submitBtn}
          >
            Submit
          </Button>
        </div>
      )}
      <div className={classes.reviewsBlock}>
        {!showReviewForm &&
          data?.showReviews.map((review) => {
            return (
              <div className={classes.reviewItem}>{review.shortVariant}</div>
            );
          })}
      </div>
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
