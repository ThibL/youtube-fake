import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "../../VideosList/VideosList.styles";
import { GoogleLogin } from "../../Login/GoogleLogin";

export const SearchAppBar = ({ handleSubmit, handleChange, term }) => {
  const classes = useStyles();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleSubmit(term);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Youtube Clone
          </Typography>

          <form onSubmit={handleFormSubmit}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
                value={term}
                type="text"
              />
            </div>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
};
