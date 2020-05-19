export const getPreparedBoardDataForCreation = (data) => {
  return {
    name: data.name,
    backgroundColor: data.color,
    invitedMembers: data.invitedFriends,
    isOpen: data.type === 'Public',
    isPrivate: data.type === 'Private',
  };
};
