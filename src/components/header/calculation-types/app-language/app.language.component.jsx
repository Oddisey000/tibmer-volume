import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    right: "14%"
  },
  typography: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    color: "#f57c00"
  }
}));

export default function LanguageComponent({ ...appData }) {
  const selectedLanguage = appData.appReducer.languages.appLanguage

  const classes = useStyles();
  const [value, setValue] = React.useState(selectedLanguage);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" className={classes.root}>
      <div className={classes.typography}>{appData.appReducer.languages[selectedLanguage].leftSide.language}</div>
      <RadioGroup
        aria-label="app-language"
        name="language"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="english"
          control={<Radio color="secondary" />}
          label="English"
        />
        <FormControlLabel
          value="ukrainian"
          control={<Radio color="secondary" />}
          label="Українська"
        />
      </RadioGroup>
    </FormControl>
  );
}
