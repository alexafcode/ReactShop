import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { ExpansionFilter } from ".";
import { FilterType } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);

const radioFilterList: FilterType[] = [
  {
    type: "radio",
    name: "Price",
    value: [
      { label: "All", val: 0 },
      { label: "5000", val: 5000 },
      { label: "10000", val: 10000 },
      { label: "15000", val: 15000 },
    ],
  },
  {
    type: "radio",
    name: "Wide Screen",
    value: [
      { label: "All", val: 0 },
      { label: "4.0", val: 4 },
      { label: "5.0", val: 5 },
      { label: "6.0", val: 6 },
    ],
  },
  {
    type: "checkbox",
    name: "Wide Screen checkbox",
    value: [
      { label: "4.0 inch", val: 4 },
      { label: "5.0 inch", val: 5 },
      { label: "6.0 inch", val: 6 },
    ],
  },
  {
    type: "checkbox",
    name: "CPU",
    value: [
      { label: "2 Core", val: 2 },
      { label: "4 Core", val: 4 },
      { label: "8 Core", val: 8 },
    ],
  },
];

const ProductFilter: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {radioFilterList.map((f) => (
        <ExpansionFilter key={f.name} filter={f} />
      ))}
    </div>
  );
};

export default ProductFilter;
