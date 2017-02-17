import React from 'react';

/* This App4 demonstrates 'ref' in the latest React */

class App4 extends React.Component{
	constructor(){
		super(); 
		this.update = this.update.bind(this);
		this.state = {
			textfieldA: '',
			textfieldB: ''
		}
	}

	update(e){
		this.setState({
			textfieldA: this.textA.value,
			textfieldB: this.InputComponent.inputB.value
		}); 
	}

	render(){
		/* ref gets a callback, which gets one parameter which is the HTML DOM node itself.
		You can assign this to a global variable inside the App for easier tracking. */

		/*
		If you put it onto a component, it gets one return which is that component
	    instance */
	    
	    /* You'll notice how we have used 'this'.  I believe this is due to super()? */
		return (
			<div> 
				<input type='text'
					onChange={this.update}
					ref={(node) => {this.textA = node}}
				/> 
				<p>{this.state.textfieldA}</p>
				<Input update={this.update} 
					   ref={(component) => {this.InputComponent = component}}	
				/> 			 
				<p>{this.state.textfieldB}</p> 
			</div>
		)
	}
}

/* If there is more than one html element inside, we can't use ReactDOM.findDOMNode anymore.
At that point, we can do an inner definition for ref and grab it that way.

BTW: ReactDOM.findDOMNode() =almost= this.refs.textA.  However, findDOMNode returns 
the underlying HTML element, and breaks the React abstration whereas refs doesn't.
React recommends using ref if possible.  */
class Input extends React.Component {
	render(){
		return <input type='text' ref={(elem) => {this.inputB = elem}} onChange={this.props.update} /> 
	}
}

export default App4;