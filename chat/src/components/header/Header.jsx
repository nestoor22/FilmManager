import React from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const [buttonWidth, setButtonWidth] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(0);
  const componentRef = React.useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);

  React.useEffect(() => {
    setButtonWidth(componentRef?.current?.offsetWidth);
  }, [windowWidth]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <div className={classes.menuWrapper}>
        <Button
          ref={componentRef}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.menuBtn}
        >
          ShareWithMe
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          PaperProps={{
            style: {
              width: buttonWidth,
            },
          }}
        >
          <MenuItem onClick={handleClose}>Test</MenuItem>
          <MenuItem onClick={handleClose}>Test</MenuItem>
          <MenuItem onClick={handleClose}>TEst</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
