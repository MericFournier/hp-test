import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import PropTypes from "prop-types";

import {setAppReady} from "../../services/store/actions/app/app.actions";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";

const AppContainer = ({setAppReady,appReady,children}) => {

    useEffect(() => {
        setAppReady(true);
    }, []);

    return (
        <div className={`app ${appReady ? 'ready':'loading'}`}>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </div>
    )
};

AppContainer.propTypes = {
    setAppReady : PropTypes.func.isRequired,
    appReady : PropTypes.bool.isRequired,
    children : PropTypes.element.isRequired,
};

const mapStateToProps = state => ({
    appReady: state.app.ready,
});

const mapDispatchToProps = {
    setAppReady:setAppReady,
};


export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);