import * as React from "react";
import * as ReactDOM from "react-dom";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import { FormEvent } from "react";
import LocalNetwork from "./LocalNetwork";
import RemoteNetwork from "./RemoteNetwork";

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16,
    width: 140
  }
};

type State = {
  networkType: string;
};

export default class AddNewNetwork extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = { networkType: "local" };
  }

  changeNetworkType(e: Event) {
    this.setState({ networkType: (e.target as HTMLFormElement).value });
  }

  render() {
    return (
      <div>
        <h1>Add a new Network</h1>
        <RadioButtonGroup
          name="networkType"
          defaultSelected={this.state.networkType}
          onChange={this.changeNetworkType.bind(this)}
          style={{ display: "flex" }}
        >
          <RadioButton value="local" label="Local" style={styles.radioButton} />
          <RadioButton
            value="remote"
            label="Remote"
            style={styles.radioButton}
          />
        </RadioButtonGroup>
        {this.state.networkType === "local" ? (
          <LocalNetwork />
        ) : (
          <RemoteNetwork />
        )}
      </div>
    );
  }
}
