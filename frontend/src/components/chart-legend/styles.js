import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  chartLegend: {
    width: "220px",
    padding: "70px 30px 0px 20px",
  },
  legendTitle: {
    fontSize: "37px",
    fontWeight: "bold",
    color: "#fff",
  },
  legendIcon: {
    maxWidth: "30px !important",
  },
  legendItem: {
    fontSize: "13px",
    padding: "5px",
    "&:not(:last-child)": {
      borderBottom: "1px solid #E2EBF6",
    },
    color: "#fff !important",
  },
  itemName: {
    width: "120px",
    color: "#fff !important",
  },
  listIcon: {
    minWidth: "30px",
  },
  descriptionWrapper: {
    display: "flex",
    flexDirection: "row",
  },
});

export default useStyles;
