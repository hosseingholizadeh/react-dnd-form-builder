import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import {
  tab_Add,
  deleteForm,
  tab_OnChange,
  tab_Remove,
  tab_Remove_Custom,
} from "../../../../../redux/action";

// Components
import ElementRender from "./ElementRender/ElementRender";

export class Preview extends Component {
  render() {
    return (
      <div class="card">
        <div style={{ padding: 20 }}>
          <div class="mt-5 d-flex flex-column">
            {this.props.elements.length === 0 ? (
              <div class="text-center pt-2 pb-2">خالی است</div>
            ) : (
              this.props.elements.map((each, index) => {
                return <ElementRender key={index} name={each.element} />;
              })
            )}
          </div>
          <div class="d-flex justify-content-center">
            <div
              class="btn btn-success "
              style={{ borderRadius: 4, marginTop: 20, width: "300px" }}
            >
              ذخیره فرم
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div
              onClick={() => {
                this.props.deleteForm();
                const panesz = this.props.panes.filter(
                  (pane) => pane.content === "Preview"
                );

                this.props.tab_Remove(panesz[0].key);
                //this.props.tab_OnChange("1");
              }}
              class="btn btn-danger "
              style={{ borderRadius: 4, marginTop: 13, width: "300px" }}
            >
              حذف فرم
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    name: state.name,
    lan: state.lan,
    elements: state.elements,
    panes: state.panes,
  };
};
const mapDis = (dispatch) => {
  return {
    tab_Add: (item, j, x) => dispatch(tab_Add(item, j, x)),
    deleteForm: () => dispatch(deleteForm()),
    tab_OnChange: (item, j) => dispatch(tab_OnChange(item, j)),
    tab_Remove: (val) => dispatch(tab_Remove(val)),
  };
};

export default connect(mapState, mapDis)(Preview);
