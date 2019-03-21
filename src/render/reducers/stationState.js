const initialState = {};

export default function message(state = initialState, action) {
  if (action.type === 'STATION_STATE') {
    console.log('act11111111111111111111111', state);
    return action.payload;

    //   alarm001: true,
  }
//   else if (action.type === 'FT_FREQ') {
    // const akt = action.payload.actMess;
    // const id = action.payload.id;
    // let index;
    // const val = state.find((exp, i) => {
    //   if (exp.id === id) {
    //     index = i;
    //   }
    //   return exp.id === id;
    // });
    // if (val) {
    //   // val[0].actMess = akt;
    //   // state[index].actMess = false;
//      console.log('act', state);
//     return [action.payload];
//     // }
//   }
  return state;
}
