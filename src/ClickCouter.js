import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.onClickMimiButton = this.onClickMimiButton.bind(this);
        this.onClickPlusButton = this.onClickPlusButton.bind(this);
        this.state = {count: props.initValue};
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.initValue !== this.state.count){
            this.setState({count: nextProps.initValue});
        }
    }

    onClickMimiButton() {
        this.setState({count: this.state.count - 1});
    }
    onClickPlusButton() {
        this.setState({count: this.state.count + 1});
    }

    render() {

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
};

ClickCounter.defaultProps = {
    initValue:0
};


export default ClickCounter