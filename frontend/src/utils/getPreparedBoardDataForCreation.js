export const getPreparedBoardDataForCreation = (data) => {
  return {
    name: data.name,
    invitedMembers: data.invitedFriends,
    isOpen: data.type === 'Public',
    tags: data.tags,
    description: data.description,
  };
};
