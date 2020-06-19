import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

type RadioFilterType = {
  value: (string | number)[];
};
const RadioFilter: React.FC<RadioFilterType> = ({ value }) => {
  const [state, setState] = useState(value[0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="price"
        name="price"
        value={state}
        onChange={handleChange}
      >
        {value.map((v) => {
          return (
            <FormControlLabel
              value={v.toString()}
              control={<Radio size={"small"} />}
              label={v}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioFilter;
