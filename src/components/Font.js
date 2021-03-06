import React from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"

export default function Font (props) {
    const dispatch = useDispatch()
    function clickHandler () {
        dispatch({ type: 'UPDATE_ACTIVE_FONT', payload: props.index })
    }
    return (
        <div className={`content-part__font ${props.activeFont === props.index?'active':''}`}
             onClick={()=> clickHandler()}
             onKeyPress={()=> clickHandler()}
             tabIndex="0"
             aria-label={(props.activeFont === props.index&&'Selected font: ')+props.el.label}
        >
            <div className={`square`}><p style={props.styles}>{props.el.abbr}</p></div>
            <ul>
                <li>{props.el.label}</li>
            </ul>
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