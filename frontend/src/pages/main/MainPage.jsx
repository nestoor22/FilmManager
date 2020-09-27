import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import Slider from 'react-slick';

import Typography from '@material-ui/core/Typography';

import { AppHeader, ItemCard } from 'components';
import { SHOWS } from 'graphql/queries/shows';

import useStyles from './styles';

function MainPage() {
  const classes = useStyles();
  const history = useHistory();

  const { data: recommendedData } = useQuery(SHOWS, {
    variables: {
      isRandom: true,
    },
  });
  const { data: moviesData } = useQuery(SHOWS, {
    variables: {
      showType: 'movie',
      isRandom: true,
    },
  });

  const { data: cartoonsData } = useQuery(SHOWS, {
    variables: {
      showType: 'cartoon',
      isRandom: true,
    },
  });

  const { data: seriesData } = useQuery(SHOWS, {
    variables: {
      showType: 'serie',
      isRandom: true,
    },
  });

  document.body.style.backgroundImage = 'none';
  document.body.style.background = 'rgb(7,57,71)'
  document.body.style.background = 'linear-gradient(45deg, rgba(7,57,71,1) 0%, rgba(41,94,109,1) 9%, rgba(186,199,203,1) 100%)';

  const settings = {
    infinite: true,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 6,
    speed: 400,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={classes.root}>
      <AppHeader />
      {recommendedData && seriesData && moviesData && cartoonsData && (
        <div className={classes.contentRoot}>
          <div className={classes.sliderWrapper}>
            <Typography className={classes.sliderTitle}>Recommended</Typography>
            <Slider {...settings}>
              {recommendedData.shows.map((showInfo, index) => {
                return <ItemCard key={index} showInfo={showInfo} />;
              })}
            </Slider>
          </div>
          <div className={classes.sliderWrapper}>
            <Typography
              onClick={() => {
                history.push('/data/movies');
              }}
              className={classes.redirectSliderTitle}
            >
              Movies
            </Typography>
            <Slider {...settings}>
              {moviesData.shows.map((showInfo, index) => {
                return <ItemCard key={index} showInfo={showInfo} />;
              })}
            </Slider>
          </div>
          <div className={classes.sliderWrapper}>
            <Typography
              onClick={() => {
                history.push('/data/series');
              }}
              className={classes.redirectSliderTitle}
            >
              Series
            </Typography>
            <Slider {...settings}>
              {seriesData.shows.map((showInfo, index) => {
                return <ItemCard key={index} showInfo={showInfo} />;
              })}
            </Slider>
          </div>
          <div className={classes.sliderWrapper}>
            <Typography
              onClick={() => {
                history.push('/data/cartoons');
              }}
              className={classes.redirectSliderTitle}
            >
              Cartoons
            </Typography>
            <Slider {...settings}>
              {cartoonsData.shows.map((showInfo, index) => {
                return <ItemCard key={index} showInfo={showInfo} />;
              })}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
