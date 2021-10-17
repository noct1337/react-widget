import React from "react";
import PropTypes from 'prop-types';
import Font from "./Font";
import { useSelector } from "react-redux";

export default function Content (props) {
    const activeFont = useSelector((state) => state.activeFont.activeFont)
    if (props.content.contentLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (typeof props.content.content.content === 'string'){
        return (
            <div className="content-container content-part__text">{props.content.content.content}</div>
        )
    } else {
        let styles
        return (
            <div className="content-container content-part__select-fonts">
                {props.content.content.content.map((el, index)=>(
                    styles = {
                        color: el.color,
                        backgroundColor: el["color-blind-label"]
                    },
                    <Font key={index} index={index} styles={styles} el={el} activeFont={activeFont}/>
                ))}
            </div>
        )
    }
}
Content.propTypes = {
    content: PropTypes.object
};