import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { FilterTypeProps, CheckboxInitialType } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  })
);

const CheckboxFilter: React.FC<FilterTypeProps> = ({ value }) => {
  const classes = useStyles();

  const initial = value.map((v) => {
    return {
      name: v.label,
      checked: false,
      value: v.val,
    };
  });

  const [state, setState] = useState<Array<CheckboxInitialType>>(initial);

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const idx = state.findIndex((item: any) => item.name === name);
    const options: any = state.map((option: any, i: number) => {
      return idx === i ? { ...option, checked: !option.checked } : option;
    });
    setState(options);
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          {state.map((s) => {
            return (
              <FormControlLabel
                key={s.name}
                control={
                  <Checkbox
                    checked={s.checked}
                    onChange={handleChange(s.name)}
                    name={s.name}
                    value={s.value}
                  />
                }
                label={s.name}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default CheckboxFilter;
