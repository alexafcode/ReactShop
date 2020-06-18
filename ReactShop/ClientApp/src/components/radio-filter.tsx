import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const RadioFilter: React.FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="price"
        name="price"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value=""
          control={<Radio size={"small"} />}
          label="All"
        />
        <FormControlLabel
          value="5000"
          control={<Radio size={"small"} />}
          label="UP 5000"
        />
        <FormControlLabel
          value="10000"
          control={<Radio size={"small"} />}
          label="UP 10000"
        />
        <FormControlLabel
          value="15000"
          control={<Radio size={"small"} />}
          label="UP 15000"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioFilter;
