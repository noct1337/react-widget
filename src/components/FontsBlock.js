import React, {useEffect, useState} from "react";
import {connect, useSelector} from 'react-redux';
import { getTabs } from "../actions/getTabs";
import { getTabsContent } from "../actions/getTabContent";
import PropTypes from 'prop-types';
import Tab from "./Tab";
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import Content from "./Content";

function FontsBlock (props) {
    const tabs = useSelector((state) => state.tabs)
    const content = useSelector((state) => state.content)

    const [tabName, setTabName] = useState('fonts_a')
    function tabHandler (val) {
        setTabName(val)
    }
    useEffect(() =>{
        props.loadTabs()
        props.loadContent(tabName)
    },[props, tabName])
    return (
        <Router>
            <Switch>
            </Switch>
            <div className="fonts-page page">
                <header>
                    <h2 className="title">{tabName==='fonts_a'&&'Please select one font'}</h2>
                    <div className="tabs">
                        {!tabs.loading&&tabs.tabs.map((tab, index)=> (
                            // tried post request first and broke json, that is why this check below exists
                            tab.content_endpoint&&(
                            <NavLink activeClassName="active" key={index} to={tab.content_endpoint} onClick={()=>tabHandler(tab.content_endpoint)}>
                                <Tab tab={tab}/>
                            </NavLink>
                            )
                        ))}
                    </div>
                </header>
                {!tabs.loading&&tabs.tabs.map((tab, index)=> (
                            // tried post request first and broke json, that is why this check below exists
                            tab.content_endpoint&&(
                            <Route key={index} path={'/'+tab.content_endpoint}>
                                <Content content={content}/>
                            </Route>
                            )
                        ))}
                        <Redirect to={tabName} />

            </div>
        </Router>
    )
}

const mapDispatchToProps = dispatch => ({
    loadTabs: () => dispatch(getTabs()),
    loadContent: (tabName) => dispatch(getTabsContent(tabName))
});

export default connect(null, mapDispatchToProps)(FontsBlock)

FontsBlock.propTypes = {
    loadTabs: PropTypes.func,
    loadContent: PropTypes.func,
};