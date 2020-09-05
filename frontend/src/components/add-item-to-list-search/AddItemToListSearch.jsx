import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Input from '@material-ui/core/Input';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { SHOWS } from 'graphql/queries/shows';

import useStyles from './styles';

let timer;

export const AddItemToListSearch = ({ addItemToList }) => {
  const classes = useStyles();

  const [hideShowsDropdown, setHideShowsDropdown] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [focused, setFocused] = React.useState(false);

  const [getShows, { data: showsData, loading }] = useLazyQuery(SHOWS);

  const handleChange = (e) => {
    const searchValue = e?.target.value;
    setSearch(e?.target.value);
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      getShows({
        variables: {
          startWith: searchValue,
        },
      });
    }, 1500);
  };

  return (
    <div className={classes.search}>
      <Input
        disableUnderline={true}
        value={search}
        onBlur={() => setFocused(!focused)}
        onChange={handleChange}
        id="input-with-icon-adornment"
        placeholder="Search..."
        classes={{
          root: classes.inputRoot,
          focused: classes.inputRootFocused,
          input: classes.input,
          disabled: classes.disabledInput,
        }}
      />
      {search &&
        !hideShowsDropdown &&
        showsData &&
        showsData.shows?.length !== 0 && (
          <div className={classes.showsPopup}>
            {showsData?.shows?.map((showInfo) => {
              return (
                <>
                  <div
                    className={classes.showRow}
                    onClick={() => {
                      addItemToList(showInfo);
                      setSearch('');
                    }}
                  >
                    <CardMedia
                      className={classes.poster}
                      component="img"
                      alt="Poster"
                      height="80"
                      width="60"
                      image={showInfo.posterUrl}
                      title="Poster"
                      classes={{
                        root: classes.rootMedia,
                      }}
                    />
                    <div>
                      <Typography className={classes.showTitle}>
                        {showInfo.title}
                      </Typography>
                      <Typography className={classes.showTitle}>
                        {showInfo.releaseDate}
                      </Typography>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
    </div>
  );
};
