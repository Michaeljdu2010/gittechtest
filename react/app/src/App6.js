import React from 'react';
import ReactDOM from 'react-dom';

class App6 extends React.Component{
	constructor(){
		super();
		this.updateCounter = this.updateCounter.bind(this);
		this.state = {
			increased: 'false'
		}; 
	}
	updateCounter(){
		ReactDOM.render(<App6 counter={this.props.counter + 1}/>, document.getElementById('app6'));
	}
	/* this is called everytime new props are recieved.  The 'nextProps' is an object
	which contains prop: value pairs of all new props and their values */ 
	componentWillReceiveProps(nextProps) { 
		if (nextProps.counter > this.props.counter){
			this.setState({
				increased: 'true' 
			}); 
		}
	}
	/* Decides if component should re-render.  Recieves nextProps and nextState object
	Does not prevent prop/state from updating */
	/* You can add conditions for nextProps, and/or nextState to determine if component
	should re-render */
	shouldComponentUpdate(nextProps, nextState) {
		return (nextProps.counter % 3 === 0);
	}
	render(){
		return (
			<div> 
				<p>{this.state.increased}</p> 
				<button onClick={this.updateCounter}>
					{this.props.counter}
				</button>
			</div> 
		)
	}
	/* Runs right after component updated, and shows us the previous props and state
	from before update  */
	componentDidUpdate(prevProps, prevState) {
		console.log(prevProps);
		console.log(prevState); 
	}
}

App6.defaultProps = {
	counter: 0
}

export default App6;