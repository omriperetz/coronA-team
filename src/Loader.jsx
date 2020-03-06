import React from "react";
import { css } from "@emotion/core";
import { RingLoader } from "react-spinners";
 
class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <div className="sweet-loading">
        <RingLoader
          size={300}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader;