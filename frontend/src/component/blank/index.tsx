import React, { Component } from "react";
import { connect } from "react-redux";
import { withLocalize } from "react-localize-redux";
import { bindActionCreators } from "redux";
import { commonActions } from "../../store/common/common.actions";

class Blank extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="box-master">Blank</div>
      </React.Fragment>
    );
  }
}

const mapstateToProps = (state: any) => {
  return {};
};

const mapdispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      startSpin: commonActions.startSpin,
      stopSpin: commonActions.stopSpin,
    },
    dispatch
  );

export default connect(
  mapstateToProps,
  mapdispatchToProps
)(withLocalize(Blank));
