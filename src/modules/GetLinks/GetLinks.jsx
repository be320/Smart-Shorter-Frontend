import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import Button from "@material-ui/core/Button";
import "./style.css";
const axios = require("axios");

const GetLinks = props => {

  const [links,setLinks] = useState([])

  useEffect(() => {
    getAllLinks();
  }, []);

  const getAllLinks = () => {
    axios.get("https://smart-shorter.herokuapp.com/shortlinks").then(res=>{
        setLinks(res.data.links);
      })
  };

  const cancel = () => {
    props.history.push("/");
  };

  return (
    <div className="AddLinkContainer">
      <h1>All Short Links</h1>
      <div className="linksList">
      { Object.keys(links).length?  links.map(link => {
            return (
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="1" label={"Slug: "+link['slug']}>
            <TreeItem nodeId="2" label={"Web: "+link['web']} />
            <TreeItem nodeId="3" label={"Android"}>
              <TreeItem nodeId="4" label={"Primary: "+link['android']['primary']} />
              <TreeItem nodeId="5" label={"Fallback: "+link['android']['fallback']} />
            </TreeItem>
            <TreeItem nodeId="6" label={"IOS"}>
              <TreeItem nodeId="7" label={"Primary: "+link['ios']['primary']} />
              <TreeItem nodeId="8" label={"Fallback: "+link['ios']['fallback']} />
            </TreeItem>
          </TreeItem>
        </TreeView>
            );
          }) : <div></div>}
      </div>
      <Button
          variant="contained"
          className="AddLinkButton"
          style={{ backgroundColor: "#FF6666", marginTop: "300px" }}
          onClick={cancel}
        >
          Cancel
        </Button>
    </div>
  );
};

export default GetLinks;
