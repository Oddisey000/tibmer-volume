import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

export default function FloatingActionButtonsAdd() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" className={classes.fab} aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}
