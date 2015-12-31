import React from 'react';
//import getGameStats from '../actions/GameStats'

export default class GameTracker extends React.Component {
    componentDidMount() {
        this.setState({
            // route components are rendered with useful information, like URL params
            gameId: this.props.params.gameId
        })
    }

    render() {
        return (<h1>Game {this.state.gameId}</h1>);
    }
}
