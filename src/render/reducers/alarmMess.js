const initialState = [
  { id: 1, name: 'Alarm', age: '12', col: 'red', dob: '', rating: 4.5, passed: true },
  { id: 2, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982', rating: 2.5, passed: true },
  { id: 3, name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1982' },
  { id: 4, name: 'Alarm Philips', age: '125', col: 'orange', dob: '01/08/1980' },
  { id: 5, name: 'Alarm Marmajuke', age: '16', col: 'yellow', dob: '31/01/1999' },
  { id: 6, name: 'Oli Bob', age: '12', col: 'red', dob: '' },
  { id: 7, name: 'Alarm May', age: '1', col: 'blue', dob: '14/05/1982' },
  { id: 8, name: 'Alarm Lobowski', age: '42', col: 'green', dob: '22/05/1982' },
  { id: 9, name: 'Brendon Philips', age: '125', col: 'orange', dob: '01/08/1980' },
  { id: 10, name: 'Alarm Marmajuke', age: '16', col: 'yellow', dob: '31/01/1999' },
];

export default function message(state = initialState, action) {
  if (action.type === 'ADD_MESS') {
    const but = document.getElementById('p_oil1');
    if (but) { but.innerHTML = action.payload; }
    return [...state, action.payload];
  } else if (action.type === 'DELETE_PLAYLIST') {
    return state;
  }
  return state;
}
