import React from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"

export default function Font (props) {
    const dispatch = useDispatch()
    function clickHandler () {
        dispatch({ type: 'UPDATE_ACTIVE_FONT', payload: props.index })
    }
    return (
        <div className={`content-part__font ${props.activeFont === props.index?'active':''}`} onClick={()=> clickHandler()} onKeyPress={()=> clickHandler()} tabIndex="0">
            <div className={`square`}><p style={props.styles}>{props.el.abbr}</p></div>
            <h3>{props.el.label}</h3>
        </div>
    )
}
Font.propTypes = {
    el: PropTypes.object,
    styles: PropTypes.object,
    index: PropTypes.number,
    activeFont: PropTypes.number,
    setActiveFont: PropTypes.func
};