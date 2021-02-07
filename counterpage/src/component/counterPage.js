import React, { Component } from 'react'
import '../scss/counterPage.css'
import { counter } from '../action/counter'
import { connect } from "react-redux";

class Counterpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }

    plus = () => {
        this.setState({
            number: this.state.number + 1
        }, () => {
            let number = this.state.number;


            this.props.counter(number)
        })
    }

    minus = () => {
        this.setState({
            number: this.state.number - 1
        }, () => {
            let number = this.state.number;


            this.props.counter(number)
        })
    }

    render() {
        const { number } = this.state
        const { name } = this.props;
        return (
            <>
                <div className="container">
                    <div className="box">
                        <h1 className="title">저는 {name} 입니다.</h1>
                        <h3 className="number">{number}</h3>

                        <div className="button">
                            <button onClick={this.minus}>-</button>
                            <button onClick={this.plus}>+</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        counter: (number) => dispatch(counter(number))
    };
};

let mapStateToProps = (state) => {
    console.log(state)
    return {
        number: state.counterPage.number,
    };
};

Counterpage = connect(mapStateToProps, mapDispatchToProps)(Counterpage);

export default Counterpage