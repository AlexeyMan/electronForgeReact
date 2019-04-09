import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const speedCom = [
  {
    value: 'var96',
    label: '9600',
  },
  {
    value: 'var19',
    label: '19200',
  },
  {
    value: 'var57',
    label: '57600',
  },
  {
    value: 'var11',
    label: '115200',
  },
];
const parityCom = [
  {
    value: 'none',
    label: 'none ',
  },
  {
    value: 'even',
    label: 'even',
  },
  {
    value: 'mark',
    label: 'mark',
  },
  {
    value: 'odd',
    label: 'odd',
  },
  {
    value: 'space',
    label: 'space',
  },
];
export default class SimpleDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      speed: 'var96',
      parity: 'none',
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.parityChange = this.parityChange.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

//   handleChange() {
//     this.setState({ currency: 'JPY' });
//   }
  handleChange(event) {
    this.setState({ speed: event.target.value });
    // console.log('yy', event);
  }
  parityChange(event) {
    this.setState({ parity: event.target.value });
    // console.log('yy', event);
  }
  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          
        >
          <DialogTitle style={{ padding: '20px' }}>{'Настройки порта'}</DialogTitle>
          <TextField
            select
            label="Выберите порт"
            // helperText="Please select your currency"
            value={this.state.speed}
            onChange={this.handleChange}
            margin="dense"
            variant="outlined"
            style={{ margin: '4px 20px 4px 20px' }}
          >
            {speedCom.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Скорость"
            // helperText="Please select your currency"
            value={this.state.speed}
            onChange={this.handleChange}
            margin="dense"
            variant="outlined"
            style={{ margin: '4px 20px 4px 20px' }}
          >
            {speedCom.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Четность"
            value={this.state.parity}
            onChange={this.parityChange}
            margin="dense"
            variant="outlined"
            style={{ margin: '4px 20px 4px 20px' }}
          >
            {parityCom.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Биты данных"
            value={8}
            margin="dense"
            InputProps={{
              readOnly: true,
            }}
            //   variant="filled"
            variant="outlined"
            style={{ margin: '4px 20px 4px 20px' }}
          />
          <TextField
            label="Стоп бит"
            value={1}
            margin="dense"
            InputProps={{
              readOnly: true,
            }}
            //   variant="filled"
            variant="outlined"
            style={{ margin: '4px 20px 4px 20px' }}
          />


          {/* <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to

            </DialogContentText>


          </DialogContent> */}
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Закрыть
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Сохранить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  }
