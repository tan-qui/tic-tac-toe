import "./assets/scss/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import { Spin } from "antd";
import { pageRouter } from "./routers/pages";
import Blank from "./component/blank";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withLocalize } from "react-localize-redux";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount(): void {}

  render() {
    let { loadSpin } = this.props;
    return (
      <Spin spinning={loadSpin > 0} size="large">
        <BrowserRouter>
          <Routes>
            {pageRouter.map((item, i) => (
              <Route
                key={i}
                path={item.url}
                element={
                  <React.Suspense fallback={<span>Loading...</span>}>
                    {React.createElement(item.component)}
                  </React.Suspense>
                }
              />
            ))}
            <Route path="*" element={<Blank />} />
          </Routes>
        </BrowserRouter>
      </Spin>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    loadSpin: state.commonReducer.loadSpin,
  };
};

const mapdispatchToProps = (dispatch: any) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapdispatchToProps)(withLocalize(App));
