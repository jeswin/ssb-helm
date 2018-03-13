import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from "../styles";

type State = {
  networkType: string;
};

export default class FirstRun extends React.Component<{}, State> {
  constructor() {
    super({});
  }

  render() {
    return (
      <div>
        <h1>Setup Helm</h1>
        <p>
          Helm periodically syncs data (such as new apps) from pub.ssb-helm.com.
          To receive them, you need to follow pub.ssb-helm.com.
        </p>        
        
      </div>
    );
  }
}
