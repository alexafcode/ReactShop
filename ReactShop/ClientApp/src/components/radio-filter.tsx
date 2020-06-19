import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { FilterTypeProps } from "./types";

const RadioFilter: React.FC<FilterTypeProps> = ({ value }) => {
  const [state, setState] = useState<number>(value[0].val);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const e = (event.target as HTMLInputElement).value;
    setState(+e);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="filter"
        name="filter"
        value={state}
        onChange={handleChange}
      >
        {value.map((v) => (
          <FormControlLabel
            key={v.label}
            value={v.val}
            control={<Radio size={"small"} />}
            label={v.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioFilter;
