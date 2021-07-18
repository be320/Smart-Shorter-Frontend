import React, { useState, useEffect } from "react";
import "./style.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const axios = require("axios");

const AddLink = props => {
  const [slug, setSlug] = useState("");
  const [web, setWeb] = useState("");
  const [primaryAndroid, setPrimaryAndroid] = useState("");
  const [fallbackAndroid, setFallbackAndroid] = useState("");
  const [primaryIOS, setPrimaryIOS] = useState("");
  const [fallbackIOS, setFallbackIOS] = useState("");

  const handleSlug = e => {
    setSlug(e.target.value);
  };

  const handleWeb = e => {
    setWeb(e.target.value);
  };
  const handlePrimaryAndroid = e => {
    setPrimaryAndroid(e.target.value);
  };
  const handleFallbackAndroid = e => {
    setFallbackAndroid(e.target.value);
  };
  const handlePrimaryIOS = e => {
    setPrimaryIOS(e.target.value);
  };
  const handleFallbackIOS = e => {
    setFallbackIOS(e.target.value);
  };

  const addLink = () => {
    const link = {
        "slug": slug,
        "web": web,
        "android": {
            "primary": primaryAndroid,
            "fallback": fallbackAndroid
        },
        "ios": {
            "primary": primaryIOS,
            "fallback": fallbackIOS
        }
    }  
    axios.post("https://smart-shorter.herokuapp.com/shortlinks", link)
      .then(response => {
        props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const cancel = () => {
    props.history.push("/");
  };

  return (
    <div className="AddLinkContainer">
      <h1>Add Short Link</h1>
      <div className="AddLinkFormItem">
        <TextField id="outlined-basic" label="Slug" variant="outlined" onChange={handleSlug} />
      </div>
      <div className="AddLinkFormItem">
        <TextField id="outlined-basic" label="Web" variant="outlined" onChange={handleWeb} />
      </div>
      <div className="AddLinkFormItem">
        <TextField
          style={{ marginRight: "30px" }}
          id="outlined-basic"
          label="Android Primary"
          variant="outlined"
          onChange={handlePrimaryAndroid}
        />
        <TextField
          id="outlined-basic"
          label="Android Fallback"
          variant="outlined"
          onChange={handleFallbackAndroid}
        />
      </div>
      <div className="AddLinkFormItem">
        <TextField
          style={{ marginRight: "30px" }}
          id="outlined-basic"
          label="IOS Primary"
          variant="outlined"
          onChange={handlePrimaryIOS}
        />
        <TextField
          id="outlined-basic"
          label="IOS Fallback"
          variant="outlined"
          onChange={handleFallbackIOS}
        />
      </div>

      <div className="AddLinkFormItem">
        <Button
          variant="contained"
          className="AddLinkButton"
          style={{
            backgroundColor: "#89cff0",
            marginTop: "30px",
            marginRight: "30px"
          }}
          onClick={addLink}
        >
          Add
        </Button>
        <Button
          variant="contained"
          className="AddLinkButton"
          style={{ backgroundColor: "	#FF6666", marginTop: "30px" }}
          onClick={cancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddLink;
