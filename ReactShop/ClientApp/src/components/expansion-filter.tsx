import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { RadioFilter, CheckboxFilter } from ".";
import { ExpansionsProps } from "./types";

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

const ExpansionFilter: React.FC<ExpansionsProps> = ({ filter }) => {
  const classes = useStyles();

  if (filter.type === "checkbox") {
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography component={"span"} className={classes.heading}>
              {filter.name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CheckboxFilter value={filter.value} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography component={"span"} className={classes.heading}>
            {filter.name}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RadioFilter value={filter.value} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default ExpansionFilter;
