const initialState = [];

export default function countMess(state = initialState, action) {
  if (action.type === 'COUNT_ALARM') {
    return action.payload;
  } else if (action.type === 'DELETE_PLAYLIST') {
    return state;
  }
  return state;
}
