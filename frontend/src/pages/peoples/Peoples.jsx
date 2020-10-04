import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import { AppHeader, Loader, Pagination } from 'components';
import SearchIcon from 'assets/icons/search.svg';
import { USERS } from 'graphql/queries/user';
import AccountPreviewBlock from './components/account-preview-block/AccountPreviewBlock';

import useStyles from './styles';

const NUMBER_OF_ITEMS_PER_PAGE = 20;

let timer;

const PeoplePage = () => {
  const classes = useStyles();

  const [getUsers, { data, loading }] = useLazyQuery(USERS, {
    variables: {
      search: '',
      limit: NUMBER_OF_ITEMS_PER_PAGE,
      offset: 0,
    },
  });

  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(20);
  const [offset, setOffset] = React.useState(0);

  const [focused, setFocused] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const handleChange = (e) => {
    const searchValue = e?.target.value;
    setSearch(e?.target.value);
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      getUsers({
        variables: {
          search: searchValue,
          limit: limit,
          offset: offset,
        },
      });
    }, 1500);
  };

  const pageHandler = (event, value) => {
    setPage(value);
    setLimit(NUMBER_OF_ITEMS_PER_PAGE * value);
    setOffset(NUMBER_OF_ITEMS_PER_PAGE * (value - 1));

    getUsers({
      variables: {
        search: search,
        limit: NUMBER_OF_ITEMS_PER_PAGE * value,
        offset: NUMBER_OF_ITEMS_PER_PAGE * (value - 1),
      },
    });
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.content}>
        {loading ? (
          <Loader isLoading={true} />
        ) : (
          <div className={classes.peopleBlocksWrapper}>
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
              startAdornment={
                <InputAdornment className={classes.iconWrapper}>
                  <img alt="" src={SearchIcon} />
                </InputAdornment>
              }
            />
            {data?.users?.data.map((user) => {
              return <AccountPreviewBlock userInfo={user} />;
            })}
            <Pagination
              page={page}
              onChange={pageHandler}
              count={data?.users?.pages}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PeoplePage;
