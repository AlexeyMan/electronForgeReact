const initialState = [
  'Alarm 1',
  'Alarm 2',
];

export default function plists(state = initialState, action) {
  if (action.type === 'ADD_PLAYLIST') {
    return state;
  } else if (action.type === 'DELETE_PLAYLIST') {
    return state;
  }
  return state;
}
