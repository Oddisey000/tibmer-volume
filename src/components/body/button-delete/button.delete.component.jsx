import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  }
}));

export default function FloatingActionButtonsDelete() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="secondary" className={classes.fab} aria-label="edit">
        <DeleteForeverIcon />
      </Fab>
    </div>
  );
}
