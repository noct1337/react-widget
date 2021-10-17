import React from "react";
import PropTypes from "prop-types";

export default function Tab (props) {
    return (
        <div className="item">
            <h2>{props.tab.label}</h2>
        </div>
    )
}
Tab.propTypes = {
    tab: PropTypes.object,
};