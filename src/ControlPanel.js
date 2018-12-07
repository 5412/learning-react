import React, { Component } from 'react';
import ClickCounter from "./ClickCouter";

class ControlPanel extends Component {
    constructor (props) {
        super(props)
        this.state = {count:0};
    }

    render() {
        return (
            <div>
                <ClickCounter caption="first" initValue={0}/>
                <ClickCounter caption="second" initValue={10}/>
                <ClickCounter caption="third" initValue={20}/>
            </div>
        );
    }

}

export default ControlPanel