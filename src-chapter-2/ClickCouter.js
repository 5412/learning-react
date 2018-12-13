import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.onClickMimiButton = this.onClickMimiButton.bind(this);
        this.onClickPlusButton = this.onClickPlusButton.bind(this);
        this.state = {count: props.initValue};
    }

    componentWillMount() {
        console.log("componentWillMount" + this.props.caption)
    }

    componentDidMount() {
        console.log("componentDidMount" + this.props.caption)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('enter componentWillReceiveProps ' + this.props.caption  + this.state.count + nextProps.caption + nextProps.count)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
        // return (nextProps.caption !== this.props.caption) ||
        //     (nextState.count !== this.state.count);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("Enter componentWillUpdate")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Enter componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("Enter componentWillUnmount")
    }

    onClickMimiButton() {
        //this.setState({count: this.state.count - 1});
        this.updateCount(false)
    }
    onClickPlusButton() {
        //this.setState({count: this.state.count + 1});
        this.updateCount(true)

    }
    updateCount(isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
        this.setState({count:newValue});
        this.props.onUpdate(newValue, previousValue);
    }

    render() {
        console.log("enter" +  this.props.caption + "'s render");
        const counterStyle = {
            margin:  '16px'
        };

        const {caption} = this.props;

        return (
            <div style={counterStyle}>
                <button onClick={this.onClickMimiButton}>-</button>
                <button onClick={this.onClickPlusButton}>+</button>
                <i>{caption}</i>
                Click Count : {this.state.count}
            </div>
        );
    }
}

ClickCounter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func,
};

ClickCounter.defaultProps = {
    initValue:0,
    onUpdate: f => f
};


export default ClickCounter