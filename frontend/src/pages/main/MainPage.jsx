import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';

import Slider from 'react-slick';
import Typography from '@material-ui/core/Typography';

import { AppHeader, ItemCard } from 'components';
import { SHOWS } from 'graphql/queries/shows';

import useStyles from './styles';
import { useQuery } from '@apollo/react-hooks';

function MainPage() {
  const classes = useStyles();

  const { data: recommendedData } = useQuery(SHOWS, {
    variables: {
      isRandom: true,
    },
  });
  const { data: moviesData } = useQuery(SHOWS, {
    variables: {
      showType: 'film',
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
  document.body.style.backgroundColor = '#BAC7CB';

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
      {recommendedData && seriesData && moviesData && (
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
            <Typography className={classes.sliderTitle}>Movies</Typography>
            <Slider {...settings}>
              {moviesData.shows.map((showInfo, index) => {
                return <ItemCard key={index} showInfo={showInfo} />;
              })}
            </Slider>
          </div>
          <div className={classes.sliderWrapper}>
            <Typography className={classes.sliderTitle}>Series</Typography>
            <Slider {...settings}>
              {seriesData.shows.map((showInfo, index) => {
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
