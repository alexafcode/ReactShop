import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { RadioFilter } from ".";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);
// ToDo
type FilterType = {
  type: string;
  name: string;
  value: (string | number)[];
};
type Props = {
  filter: FilterType;
};

const ExpansionFilter: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { filter } = props;

  if (filter.type === "checkbox") {
    return null;
  }

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{filter.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          <RadioFilter value={filter.value} />
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ExpansionFilter;
