import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import InfiniteScroll from 'react-infinite-scroll-component';

import { Loader, AccountPreviewBlock, ErrorBox } from 'components';
import { FOLLOWED } from 'graphql/queries/user';

import useStyles from './styles';
import { Button } from '@material-ui/core';

const FollowedTab = ({ userId, isLoggedIn }) => {
  const classes = useStyles();
  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(20);
  const [users, setUsers] = React.useState([]);

  const { data, loading, refetch } = useQuery(FOLLOWED, {
    variables: {
      userId: userId,
      limit: 20,
      offset: 0,
    },
  });

  React.useEffect(() => {
    if (!loading && data?.followed) {
      setUsers(users.concat(data.followed));
    }
  }, [loading]);

  const handleScroll = () => {
    setTimeout(() => {
      refetch({
        userId: userId,
        limit: limit + 20,
        offset: offset + 20,
      }).then(() => {});
      setLimit(limit + 20);
      setOffset(offset + 20);
    }, 2000);
  };

  if (loading) {
    return <Loader isLoading={true} />;
  }

  return (
    <div className={classes.root}>
      {!loading && users.length === 0 ? (
        <ErrorBox
          text={
            isLoggedIn
              ? 'You are not following any user yet'
              : "User isn't following any user yet"
          }
        />
      ) : (
        <div className={classes.itemsWrapper}>
          <InfiniteScroll
            dataLength={users?.length || 0}
            next={handleScroll}
            hasMore={!!data?.followed?.length}
            loader={<Loader />}
            scrollThreshold={0.9}
          >
            {users?.map((el) => (
              <AccountPreviewBlock userInfo={el} handleOpenAccount={() => {}} />
            ))}
          </InfiniteScroll>
        </div>
      )}
      <Button
        className={classes.toTheTopBtn}
        onClick={() => window.scrollTo(0, 0)}
      >
        To the Top
      </Button>
    </div>
  );
};

export default FollowedTab;
