import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    trendingContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",

      "&::last-child": {
        justifySelf: "start",
      },
    },
  })
);
