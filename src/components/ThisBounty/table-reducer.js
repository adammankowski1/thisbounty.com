export const defaultState = {
  bountyLog: [],
  currentBounty: {
    id: 0,
    name: "",
    description: "",
    funded: false,
    tags: []
  }
};

export const tableReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
