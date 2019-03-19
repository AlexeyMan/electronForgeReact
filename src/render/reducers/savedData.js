const initialState = [
    { name: 'p_oil1555555', data: [], time: [] },
    { name: 'RPM2', data: [], time: [] },
];

const realTime = () => {
  const now = new Date();
  const MyDateString = `${(`0${now.getDate()}`).slice(-2)}:${
  (`0${now.getMonth() + 1}`).slice(-2)}:${
  now.getFullYear()}`;
  const MyTimeString = `${(`0${now.getHours()}`).slice(-2)}:${
(`0${now.getMinutes()}`).slice(-2)}:${
(`0${now.getSeconds()}`).slice(-2)}`;
  return [MyTimeString, MyDateString];
};

const updData = (state, _name, _data) => state.find((item) => {
  // console.log('action', item.name, _name);
  if (item.name === _name) {
    // console.log('data', item);
    item.data = [...item.data, _data];
    const time = item.time;
    time.push(`${realTime()[0]}\n${realTime()[1]}`);
    return item;
  }
});
const addData = (state, _name, _data) => {
  if (_name !== '') {
    const addMes = { name: _name, data: [_data], time: [`${realTime()[0]}\n${realTime()[1]}`] };
    // console.log('add', state, addMes, realTime());
    state = [...state, addMes];
    return state;
  }
};
export default function savedData(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SAVED':
      const uD = updData(state, action.payload.name, action.payload.dataVal);
      // console.log('uf', action.payload);
      console.log('ADD_SAVED', state);
      if (uD === undefined) {
        state = addData(state, action.payload.name, action.payload.dataVal);
        // console.log('undef', state);
      }
      return [
        ...state,
      ];
    case 'ADD_REAL':

      return [...state];
    default:
      return state;
  }
}
