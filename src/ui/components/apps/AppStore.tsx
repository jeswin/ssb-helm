import * as React from "react";
import * as ReactDOM from "react-dom";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import { FormEvent } from "react";
import styles from "../styles";

type State = {
  networkType: string;
};

export default class AppStore extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = { networkType: "local" };
  }

  render() {
    return (
      <div>
        <h1>App Store</h1>
        
      </div>
    );
  }
}
