import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  TextField,
  RaisedButton,
  FlatButton,
  Checkbox,
  Toggle
} from "material-ui";
import styles from "../styles";

export default function() {
  return (
    <div>
      <table>
        <tr>
          <td style={styles.label}>Network Name</td>
          <td>
            <TextField style={{ ...styles.widths.std }} />
          </td>
        </tr>
        <tr>
          <td style={styles.label}>Network Key</td>
          <td>
            <TextField style={{ ...styles.widths.std }} />&nbsp;<a
              style={{ ...styles.links }}
              href="#"
            >
              auto generate?
            </a>
          </td>
        </tr>
        <tr>
          <td style={styles.label}>Sign Key</td>
          <td>
            <TextField style={{ ...styles.widths.std }} />&nbsp;<a
              style={{ ...styles.links }}
              href="#"
            >
              auto generate?
            </a>
          </td>
        </tr>
      </table>
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
