import React, { useState, useEffect } from "react";
import "./style.css";
import Button from "@material-ui/core/Button";

const Landing = props => {

const addLink = () => {
  props.history.push('/addLink');
}

const getLinks = () => {
  props.history.push('/getLinks');
}

const updateLink = () => {
  props.history.push('/updateLink');
}

  return (
    <div className="LandingContainer">
      <h1 className="LandingHead">Smart Shorter</h1>
      <Button variant="contained" className="LandingButton" style={{backgroundColor: '#89cff0',marginTop:'30px'}} onClick={addLink} >
        Add Short Link
      </Button>
      <Button variant="contained" className="LandingButton" style={{backgroundColor: '#98FB98',marginTop:'30px'}} onClick={getLinks}>
        Get Short Links
      </Button>
      <Button variant="contained" className="LandingButton" style={{backgroundColor: 'yellow',marginTop:'30px'}} onClick={updateLink}>
        Update Short Link
      </Button>
    </div>
  );
};

export default Landing;
