import * as React from "react";
import './page.css';
import AgGrid from "../agGrid/AgGrid";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="left-page">
          <div className="row"><label className="label">Filters</label>
            <button className="primary">Apply Filter</button>
          </div>
          <div className="unit">
            <h5>Units</h5>
            <div className="unit-label"><input type="radio" id="hello" name="hello" value="hello"/><label
              className="unit-label">Unit1</label></div>
            <div className="unit-label"><input type="radio" id="hello2" name="hello2" value="hello2"/><label
              className="unit-label">Unit2</label></div>
            <div className="unit-label"><input type="radio" id="hello3" name="hello3" value="hello3"/><label
              className="unit-label">Unit3</label></div>
          </div>
          <div className="unit">
            <h5>Rollup</h5>
            <div className="unit-label">
              <h6 className="unit-label">Worldwide</h6>
              <div className="unit-label">
                <div className="unit-label"><input type="checkbox" id="hello" name="hello" value="hello"/><label
                  className="unit-label">India</label></div>
                <div className="unit-label"><input type="checkbox" id="hello2" name="hello2" value="hello2"/><label
                  className="unit-label">USA</label></div>
                <div className="unit-label"><input type="checkbox" id="hello3" name="hello3" value="hello3"/><label
                  className="unit-label">Australia</label></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
        <AgGrid/>
        </div>
      </div>
    )
  }
}

export default Page;