import React from "react";
import Badge from "@material-ui/core/Badge";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -8,
    top: 30,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

export default function AddButtonComponent() {
  const classes = useStyles();

  // Conditionaly apply budge icon
  const insertedData = 13; // You need to use data from state
  const displayBudge = insertedData ? (
    <StyledBadge badgeContent={insertedData} max={999} color="secondary">
      <AddIcon />
    </StyledBadge>
  ) : (
    <StyledBadge max={999} color="secondary">
      <AddIcon />
    </StyledBadge>
  );

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
        {displayBudge}
      </Fab>
    </div>
  );
}
