import React, { Component } from 'react';
import ClickCounter from "./ClickCouter";

const style = {
    margin: '20px'
};
class ControlPanel extends Component {
    render() {
        console.log("enter ControlPanel's render");
        return (
            <div style={style}>
                <ClickCounter caption="First"/>
                <ClickCounter caption="Second" initValue={10} />
                <ClickCounter caption="Third" initValue={20} />
                <button onClick={ () => this.forceUpdate() }>
                    Click me to re-render!
                </button>
            </div>
        );
    }

}

export default ControlPanel