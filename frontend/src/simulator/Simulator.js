import React, { Component } from 'react';
import { Api } from '../api/Api';
import Form from '../shared/forms/Form';
import InputField from '../shared/input-field/InputField';
import Selector from '../shared/selectors/Selector';
import StartButton from '../shared/buttons/StartButton';
import Row from '../shared/rows/Row';
import SimulatorResult from './simulator-result/SimulatorResult';

const numWins = (drawList) => drawList.filter((item) => item.won).length;
const hitFrequency = (numWins, drawList) => numWins / drawList.length;

class Simulator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            simulations: '',
            newChoice: 0,
            drawList: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.target.nodeName === 'SELECT'
            ? this.setState({newChoice: event.target.value})
            : this.setState({simulations: event.target.value});
    }

    handleSubmit(event) {
        Api.getDraws(
            this.state.simulations,
            this.state.newChoice
        ).then((res) => {
            (res.status === 200) && this.setState({drawList: res.data})
        });
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row><InputField value={this.state.simulations} label="Number of simulations: " onHandleChange={(evt) => this.handleChange(evt)}/></Row>
                <Row className="row"><Selector value={this.state.newChoice} label="Second choice: " onHandleChange={(evt) => this.handleChange(evt)} optionList={[{key: 1, value: 'Yes'}, {key: 0, value: 'No'}]}/></Row>
                <Row className="row"><StartButton label="Begin simulation"/></Row>
                {!!this.state.drawList.length &&
                <SimulatorResult
                    drawList={this.state.drawList}
                    numWins={numWins(this.state.drawList)}
                    hitFrequency={hitFrequency(numWins(this.state.drawList), this.state.drawList)}
                />}
            </Form>
        );
    }
}

export default Simulator;
