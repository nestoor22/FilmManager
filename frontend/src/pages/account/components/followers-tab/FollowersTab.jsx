import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import InfiniteScroll from 'react-infinite-scroll-component';

import { Loader, AccountPreviewBlock } from 'components';
import { USERS } from 'graphql/queries/user';

import useStyles from './styles';

const FollowersTab = () => {
  const classes = useStyles();
  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(20);
  const [users, setUsers] = React.useState([]);

  const { data, loading, refetch } = useQuery(USERS, {
    variables: {
      limit: 20,
      offset: 0,
    },
  });

  React.useEffect(() => {
    if (!loading && data?.users?.data) {
      setUsers(users.concat(data.users?.data));
    }
  }, [loading]);

  const handleScroll = () => {
    setTimeout(() => {
      refetch({
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
      <div className={classes.itemsWrapper}>
        <InfiniteScroll
          dataLength={users?.length || 0}
          next={handleScroll}
          hasMore={!!data?.users?.data?.length}
          loader={<Loader />}
          scrollThreshold={0.9}
        >
          {users?.map((el) => (
            <AccountPreviewBlock userInfo={el} handleOpenAccount={() => {}} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default FollowersTab;
