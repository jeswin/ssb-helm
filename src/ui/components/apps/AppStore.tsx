import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  GridList,
  Subheader,
  GridTile,
  IconButton,
  RadioButton,
  RadioButtonGroup
} from "material-ui";
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
        {/* <GridList cellHeight={180} style={styles.gridList}>
          <Subheader>December</Subheader>
          {tilesData.map(tile => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={
                <span>
                  by <b>{tile.author}</b>
                </span>
              }
              actionIcon={
                <IconButton>
                </IconButton>
              }
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList> */}
      </div>
    );
  }
}
