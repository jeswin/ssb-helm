import * as React from "react";
import * as ReactDOM from "react-dom";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import { FormEvent } from "react";
import LocalNetwork from "./LocalNetwork";
import RemoteNetwork from "./RemoteNetwork";
import {
  TextField,
  Toggle,
  SelectField,
  MenuItem,
  RaisedButton
} from "material-ui";
import { connect } from "redux-jetpack";
import styles from "../styles";

type State = {
  networkType: string;
};

function Configuration({ network }: { network: string }) {
  return (
    <div>
      <h1>Configuration</h1>
      <p>
        Most of these fields have good defaults. Do not change unless you know
        what you're doing.
      </p>
      <table>
        <tr>
          <td style={styles.label}>Port</td>
          <td>
            <TextField />
          </td>
        </tr>
        <tr>
          <td style={styles.label}>Timeout</td>
          <td>
            <TextField />
          </td>
        </tr>
        <tr>
          <td style={styles.selectLabel}>Pub?</td>
          <td>
            <SelectField autoWidth={true}>
              <MenuItem value={undefined} primaryText="Default (No)" />
              <MenuItem value={true} primaryText="Yes" />
              <MenuItem value={false} primaryText="No" />
            </SelectField>
          </td>
        </tr>
        <tr>
          <td style={styles.selectLabel}>Local?</td>
          <td>
            <SelectField autoWidth={true}>
              <MenuItem value={undefined} primaryText="Default (Yes)" />
              <MenuItem value={true} primaryText="Yes" />
              <MenuItem value={false} primaryText="No" />
            </SelectField>
          </td>
        </tr>
      </table>
      <h3 style={{ marginTop: "1em" }}>Friends</h3>
      <table>
        <tr>
          <td style={styles.label}>Dunbar</td>
          <td>
            <TextField />
          </td>
        </tr>
        <tr>
          <td style={styles.label}>Max Hops</td>
          <td>
            <TextField />
          </td>
        </tr>
      </table>
      <h3 style={{ marginTop: "1em" }}>Gossip</h3>
      <table>
        <tr>
          <td style={styles.label}>Connections</td>
          <td>
            <TextField />
          </td>
        </tr>
      </table>
      <h3 style={{ marginTop: "1em" }}>Logging</h3>
      <table>
        <tr>
          <td style={styles.selectLabel}>Level</td>
          <td>
            <SelectField value={undefined} autoWidth={true}>
              <MenuItem value={undefined} primaryText="Auto" />
              <MenuItem value={"error"} primaryText="Error" />
              <MenuItem value={"warning"} primaryText="Warning" />
              <MenuItem value={"notice"} primaryText="Notice" />
              <MenuItem value={"info"} primaryText="Info" />
            </SelectField>
          </td>
        </tr>
      </table>
      <p style={{ paddingTop: "1em" }}>
        <RaisedButton style={{ width: 180 }} primary={true}>
          Save Configuration
        </RaisedButton>
      </p>
    </div>
  );
}

export default connect(Configuration, (state: State) => state);
