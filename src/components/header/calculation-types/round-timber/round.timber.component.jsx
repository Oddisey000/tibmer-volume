import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    position: "relative",
    right: "10%"
  },
  typography: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    color: "darkgreen"
  }
}));

export default function RoundTimberComponent({ ...appData }) {
  const selectedLanguage = appData.appReducer.languages.appLanguage
  const classes = useStyles();
  const [value, setValue] = React.useState("standard");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" className={classes.root}>
      <div className={classes.typography}>{appData.appReducer.languages[selectedLanguage].leftSide.timberVolume}</div>
      <RadioGroup
        aria-label="round-timber"
        name="round"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="standard"
          control={<Radio color="primary" />}
          label="ГОСТ 2708-75"
        />
        <FormControlLabel
          value="iso"
          control={<Radio color="primary" />}
          label="ISO 4480-83"
        />
      </RadioGroup>
    </FormControl>
  );
}
