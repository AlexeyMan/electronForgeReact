import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TableMess from './TableMess';
import Chart from './Charts';

class page extends Component {
  render() {
    return (
      <div className="mainPage">
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Журнал состояний</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TableMess />
            {/* <Typography>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
            </Typography> */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >Графики</Typography>
          </ExpansionPanelSummary>
          {/* <ExpansionPanelDetails> */}
          <Chart />
          {/* </ExpansionPanelDetails> */}
        </ExpansionPanel>
        {/* <TableMess /> */}
      </div>
    );
  }
}
export default page;
