import React from "react";
import { connect } from "react-redux";


const LightComponent = ({ light, dispatch }) => (
  <div>
    <p>{light}</p>
    <button
      onClick={() => dispatch({ type: 'SWITCH' })}
    >
      switch
    </button>
  </div>
);

const mapStateToProps = state => ({
  light: state
});

export default connect(mapStateToProps)(LightComponent);
