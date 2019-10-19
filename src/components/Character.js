import React, { Component } from 'react';
import './Character.css';

class Character extends Component {
    constructor(props) {
        super(props);
        this.addHealth = this.addHealth.bind(this);
        this.addStamina = this.addStamina.bind(this);
        this.addGold = this.addGold.bind(this);

        this.state = {
            health: 150,
            stamina: 200, 
            gold: 75
        }
    }

    addHealth() {
        this.setState((prevState) => { //'prevState' is industry standards
            return {
                health: prevState.health + 10
            }
        })
    }

    addStamina() {
        this.setState((previousState) => {
            return {
                stamina: previousState.stamina + 10
            }
        })
    }

    addGold() {
        this.setState((stateBefore) => {
            return {
                gold: stateBefore.gold + 10
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Name: {this.props.name}</h2>
                <p>Race: {this.props.race}</p>
                <p>
                    Status: {this.props.status}
                    < br/>
                    (with health at: {this.state.health}, and stamina at: {this.state.stamina})
                </p>
                <p>Gold: {this.state.gold}</p>
                <p className={this.props.comment ? 'visible' : 'hidden'}>Comment: {this.props.comment}</p>
                <button onClick={this.addHealth}>Add 10 Health</button>
                <button onClick={this.addStamina}>Add 5 Stamina</button>
                <button onClick={this.addGold}>Add 3 Gold</button>
                <hr />
            </div>
        );
    }
}

export default Character;