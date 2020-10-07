import './slick.css';

import React from 'react';
import Slider from 'react-slick';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { ReviewBlockForAccountTab } from 'components';

import useStyles from './styles';

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <ArrowBackIosIcon
        onClick={onClick}
        style={{
          left: '-25px',
          fontSize: 0,
          lineHeight: 0,
          position: 'absolute',
          top: '45%',
          display: 'block',
          width: '20px',
          height: '20px',
          padding: '0',
          transform: 'translate(0, -50%)',
          cursor: 'pointer',
          border: 'none',
          outline: 'none',
        }}
        fill="#073947"
      />
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <ArrowForwardIosIcon
        onClick={onClick}
        style={{
          right: '-25px',
          fontSize: 0,
          lineHeight: 0,
          position: 'absolute',
          top: '45%',
          display: 'block',
          width: '20px',
          height: '20px',
          padding: '0',
          transform: 'translate(0, -50%)',
          cursor: 'pointer',
          border: 'none',
          outline: 'none',
        }}
        fill="#073947"
      />
    </div>
  );
}

const ReviewsCarousel = ({ reviews }) => {
  const classes = useStyles();

  const settings = {
    infinite: true,
    centerMode: false,
    autoplay: false,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    speed: 400,
    className: 'slick',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const el = document.getElementsByClassName('slick-initialized');
  React.useEffect(() => {
    if (el.length) {
      const foundedElements = Array.from(el);
      foundedElements.forEach((singleEl) => {
        singleEl.style.width = '800px';
      });
    }
  }, [el.length]);
  return (
    <div className={classes.sliderWrapper}>
      <Slider className={classes.listLick} {...settings}>
        {reviews.map((review, index) => {
          return <ReviewBlockForAccountTab key={index} reviewInfo={review} />;
        })}
      </Slider>
    </div>
  );
};

export default ReviewsCarousel;
