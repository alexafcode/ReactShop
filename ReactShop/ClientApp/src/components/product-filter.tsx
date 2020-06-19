import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { ExpansionFilter } from ".";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);

type FilterListType = {
  type: string;
  name: string;
  value: (string | number)[];
};
const radioFilterList: FilterListType[] = [
  {
    type: "radio",
    name: "Price",
    value: ["All", 5000, 10000, 15000],
  },
  {
    type: "radio",
    name: "Wide Screen",
    value: ["All", 4.0, 5.0, 6.0],
  },
  {
    type: "checkbox",
    name: "Wide Screen",
    value: ["All", 4.0, 5.0, 6.0],
  },
];

const ProductFilter: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {radioFilterList.map((f) => (
        <ExpansionFilter filter={f} />
      ))}
    </div>
  );
};

export default ProductFilter;
