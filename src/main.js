import React, {Component} from 'react';
import {AppRegistry, StyleSheet ,View, Text} from 'react-native';
import {createStore} from 'react-redux'

export default class Root extends Component {
    renderApp(){
        const initialState = window.__INITIAL_STATE__;
        const store = createStore(initialState)

        return (
            <div></div>
        )
    }
    
    render(){
            return this.renderApp();
    }
}
