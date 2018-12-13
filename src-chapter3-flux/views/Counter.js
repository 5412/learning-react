import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CounterStore from "../stores/CounterStore";
import * as Actions from '../Actions'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {count: CounterStore.getCounterValues()[props.caption]};
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption]
        this.setState({count:newCount})
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.caption !== this.props.caption || nextState.count !== this.state.count;
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange)
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange)
    }

    onClickIncrementButton() {
        Actions.increment(this.props.caption)
    }

    onClickDecrementButton() {
        Actions.decrement(this.props.caption)
    }


    render() {
        const counterStyle = {
            margin:  '16px'
        };

        const {caption} = this.props;

        return (
            <div style={counterStyle}>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
                <i>{caption}</i>
                Count : {this.state.count}
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
};

export default Counter