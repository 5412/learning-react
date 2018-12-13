import React, { Component } from 'react';
import ClickCounter from "./ClickCouter";

const style = {
    margin: '20px'
};
class ControlPanel extends Component {
    constructor(props) {
        super(props)
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues = [0,10,20];
        const initSum = this.initValues.reduce((a,b) => a+b, 0);
        this.state = {sum: initSum};
    }

    onCounterUpdate(newValue, previousValue){
        const valueChange = newValue - previousValue;
        this.setState({sum:this.state.sum + valueChange});
    }
    render() {
        console.log("enter ControlPanel's render");
        return (
            <div style={style}>
                <ClickCounter caption="First" onUpdate={this.onCounterUpdate}/>
                <ClickCounter caption="Second" initValue={10}  onUpdate={this.onCounterUpdate}/>
                <ClickCounter caption="Third" initValue={20} onUpdate={this.onCounterUpdate}/>
                <button onClick={ () => this.forceUpdate() }>
                    Click me to re-render!
                </button>
                <div>Total Count: {this.state.sum}</div>
            </div>
        );
    }

}

export default ControlPanel