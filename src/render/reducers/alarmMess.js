const initialState = [
];

export default function message(state = initialState, action) {
  if (action.type === 'ADD_MESS') {
    return [action.payload, ...state];

    //   alarm001: true,
  } else if (action.type === 'ACT_MESS') {
    // const akt = action.payload.actMess;
    const id = action.payload.id;
    let index;
    const val = state.find((exp, i) => {
      if (exp.id === id) {
        index = i;
      }
      return exp.id === id;
    });
    if (val) {
      // val[0].actMess = akt;
      // state[index].actMess = false;
      // console.log('act', index, val, state);
      return [...state, state[index].actMess = false];
    }
  }
  return state;
}
