const initialState = [
  // { id: 1, akt: false, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 4, akt: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 2, akt: false, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 3, akt: false, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 4, akt: false, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
  // { id: 7, akt: true, date: '23.02.2019', time: '10.23.45', name: 'Авария 1', kvit: false, active: false },
];

export default function message(state = initialState, action) {
  if (action.type === 'ADD_MESS') {
    return [action.payload, ...state];

    //   alarm001: true,
  } else if (action.type === 'ACT_MESS') {
    const akt = action.payload.actMess;
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
      state[index].actMess = akt;
      console.log('act', index, val, state);
      return state;
    }
    // const val = state;
    // const aaa = () => { return state.find(exp => exp.id === id); };
    // console.log('act', aaa, state);
    // const bbb = aaa();
    // console.log('act', bbb, aaa, state);
    // val.forEach((element) => {
    //   if (element.id === id) {
    //     element.akt = akt;
    //   }
    // });
    // val[0].akt = akt;
    // const red = state[id - 1].akt = akt;
    // console.log('act_mess', akt, state, aaa, id);
    // console.log("dddddddd", state);
    // const ddd = state;
    // ddd[2].id = 45;
    // ddd[2].name = 'dddddddffggg';
    // return state;
  }
  return state;
}
