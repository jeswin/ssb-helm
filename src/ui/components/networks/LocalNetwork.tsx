import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  TextField,
  RaisedButton,
  FlatButton,
  Checkbox,
  Toggle
} from "material-ui";
import { orange500, blue500 } from "material-ui/styles/colors";

const styles = {
  hintStyle: {
    color: orange500
  },
  toggle: {
    marginBottom: 16
  }
};

export default function() {
  return (
    <div>
      <p>
        <TextField
          hintText="Name of your network"
          hintStyle={styles.hintStyle}
        />
      </p>
      <p>
        <TextField
          hintText="Network Key (optional)"
          hintStyle={styles.hintStyle}
        />
        &nbsp;
        <FlatButton>Generate</FlatButton>
      </p>
      <p>
        <TextField
          hintText="Sign Key (optional)"
          hintStyle={styles.hintStyle}
        />
        &nbsp;
        <FlatButton>Generate</FlatButton>
      </p>
      <p>
        <Toggle
          labelPosition="right"
          label="Start automatically"
          style={styles.toggle}
        />
      </p>
      <p style={{ paddingTop: "1em" }}>
        <RaisedButton style={{ width: 140 }} primary={true}>
          Add Network
        </RaisedButton>
      </p>
    </div>
  );
}
