import React from 'react';
import ReactDOM from 'react-dom'; 

class App5 extends React.Component{
	constructor(){
		super();
		this.state = {
			counter: 0
		}
		this.updateCounter = this.updateCounter.bind(this); 
	}

	updateCounter(){
		this.setState({
			counter: this.state.counter + (1 * this.state.multiplier)
		})
	}

	componentWillMount(){
		console.log('componentWillMount: hasnt made it into DOM yet but will');
		/* we have access to our state and props at this point */
		this.setState({
			multiplier: 2
		})
	}

	/* render is called everytime a state or prop changes.  Virtual DOM decides what 
	is re-rendered */
	render(){
		console.log('render'); 
		return(
			<button onClick={this.updateCounter}> {this.state.counter} </button> 
		)
	}

	componentDidMount(){
		console.log('componentDidMount: component has finished rendering into DOM');
		// we have access to our DOM node at his point, and can do things like
		this.node = ReactDOM.findDOMNode(this);
		this.interval = setInterval(this.updateCounter, 500);
	}

	componentWillUnmount() {
		console.log('componentUnmounted');
		/* we can clean up any processes at this point, such as setInterval */
		clearInterval(this.interval);
	}
}

class App5Wrapper extends React.Component{
	constructor(){
		super(); 
		this.mount = this.mount.bind(this);
		this.unmount = this.unmount.bind(this);
	}
	mount(){
		ReactDOM.render(<App5/>, document.getElementById('wrapper'));
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('wrapper'))
	}
	render(){
	    return(
			<div> 
				<div id='wrapper'></div> 
				<button onClick={this.mount}>Mount</button>
				<button onClick={this.unmount}>Unmount</button> 
			</div> 
		)
	}
}

export default App5Wrapper;