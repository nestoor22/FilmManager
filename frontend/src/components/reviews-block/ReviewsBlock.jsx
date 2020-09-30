import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Editor } from '@tinymce/tinymce-react';

import { Button, Typography } from '@material-ui/core';

import NothingFound from 'assets/icons8-nothing-found-80.png';
import { ADD_REVIEW } from 'graphql/mutations/shows';
import { SHORT_SHOW_REVIEWS } from 'graphql/queries/shows';
import { Loader } from 'components';
import LikesIcon from 'assets/icons/like-icon.svg';

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
          data?.showReviews.map((review, index) => {
            return (
              <div>
                <div key={index} className={classes.reviewItem}>
                  <div className={classes.reviewHeader}>
                    <Typography className={classes.author}>
                      {review.author}
                    </Typography>
                    <div className={classes.likesBlock}>
                      <Typography
                        style={{
                          marginRight: '5px',
                          fontSize: '15px',
                          color: '#073947',
                        }}
                      >
                        {review.likes}
                      </Typography>
                      <img
                        height="15px"
                        width="15px"
                        style={{ fill: '#073947' }}
                        src={LikesIcon}
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className={classes.reviewContent}
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
                <Typography className={classes.fullVersionBtn}>
                  Full version
                </Typography>
              </div>
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
