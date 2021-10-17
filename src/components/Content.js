import React from "react";
import PropTypes from 'prop-types';
import Font from "./Font";
import { useSelector } from "react-redux";

export default function Content (props) {
    const storeContent = useSelector((state) => state.content)
    const activeFont = useSelector((state) => state.activeFont)
    console.log(storeContent)
    if (storeContent.contentLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (typeof storeContent.contentData.content === 'string'){
        return (
            <div className="content-container content-part__text">{storeContent.contentData.content}</div>
        )
    } else {
        let styles
        return (
            <div className="content-container content-part__select-fonts">
                {storeContent.contentData.content.map((el, index)=>(
                    styles = {
                        color: el.color,
                        backgroundColor: el["color-blind-label"]
                    },
                    <Font key={index} index={index} styles={styles} el={el} activeFont={activeFont.numberOfFont}/>
                ))}
            </div>
        )
    }
}
Content.propTypes = {
    content: PropTypes.object
};