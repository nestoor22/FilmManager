import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Button } from '@material-ui/core';

import { Loader, AccountPreviewBlock, ErrorBox } from 'components';
import { FOLLOWERS } from 'graphql/queries/user';

import useStyles from './styles';

const FollowersTab = ({ userId, isLoggedIn }) => {
  const classes = useStyles();
  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(20);
  const [users, setUsers] = React.useState([]);

  const { data, loading, refetch } = useQuery(FOLLOWERS, {
    variables: {
      userId: userId,
      limit: 20,
      offset: 0,
    },
  });

  React.useEffect(() => {
    if (!loading && data?.followers) {
      setUsers(users.concat(data.followers));
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
              ? 'You have not any follower yet'
              : "User hasn't any follower yet"
          }
        />
      ) : (
        <div className={classes.itemsWrapper}>
          <InfiniteScroll
            dataLength={users?.length || 0}
            next={handleScroll}
            hasMore={!!data?.followers?.length}
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

export default FollowersTab;
