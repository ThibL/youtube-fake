import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      margin: "1rem 0 0 .5rem",
    },
    iframe: {
      maxWidth: "350px",
      minWidth: "350px",
      maxHeight: "195px",
      minHeight: "195px",
    },
    trending: {
      margin: ".2rem",
    },
  })
);
