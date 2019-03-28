export const defaultState = {
  bountyLog: [],
  currentBounty: {
    id: "",
    name: "",
    description: "",
    funded: false,
    tags: [],
    timeStamp: 0
  }
};

const ADD_BOUNTY = "THISBOUNTY:ADD_BOUNTY";

export const tableReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOUNTY:
      return Object.assign({}, state, {
        bountyLog: state.bountyLog.concat(payload)
      });
    default:
      return state;
  }
};

export const addBounty = ({
  id = "",
  name = "",
  description = "",
  funded = false,
  tags = [],
  timeStamp = 0
} = {}) => ({
  type: ADD_BOUNTY,
  payload: { id, name, description, funded, tags, timeStamp }
});

export const getViewState = state =>
  Object.assign({}, state, {
    // place extra formatting of state for component here
    bountyLog: state.bountyLog
  });
