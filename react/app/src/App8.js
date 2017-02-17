import React from 'react';

/* 
Whereas a component transforms state and props into UI, 
a higher-order component transforms a component into another component.
*/

/* Here we have an anonymous class being assigned to HigherOrder
i.e. 
const HigherOrder = function(OriginalComponent){
	return class extendsReactComponent{
	  ... <OriginalComponent /> 
	}
}

The reason we return an anonymous class is because it will be recieved 
and name by a variable which will store this function.  
*/

const HigherOrder = (OriginalComponent) => class extends React.Component{

	constructor(){
		super();
		this.state = {
			counter: 0
		};
		this.counterUpdate = this.counterUpdate.bind(this);
	}
	counterUpdate(){
		this.setState({
			counter: this.state.counter + 1 
		}); 
	}
	componentWillMount() {
		console.log('Higher Order compoment to be rendered');
	}
	/* We take all the props and state recieved by this anonymous class
	and spread it into the originalComponent */
	/* Note the state spread.  The child component recivees them as
	props as well. */
	render(){
		return(
			<div className='higher-order-wrap'> 
				{<OriginalComponent 
					{...this.props} 
					{...this.state} 
					counterUpdate={this.counterUpdate}
				/>}
			</div> 
		)
	}
}

class App8 extends React.Component{
	render(){
		return(
			<div> 
				<ButtonHigherOrder> Click me </ButtonHigherOrder>  
				<LabelHigherOrder> A label by any other name </LabelHigherOrder>
			</div>  
		)
	}
}

/* 
React allows us to write statelesss functions as simple functions.  
*/

/* Define a stateless component. */
const Button = (props) => {
		return (
			<button onClick={props.counterUpdate}> {props.children} - {props.counter} </button> 
		)
	}
/* pass it into the HigherOrder mixin component */
const ButtonHigherOrder = HigherOrder(Button)
/* A full component example of the same. */
class Label extends React.Component { 
	componentWillMount() {
		console.log('Label compoment to be rendered');
	}
	render(){
		return (
			<label onMouseMove={this.props.counterUpdate}> {this.props.children} = {this.props.counter} </label> 
		)
	}
}

const LabelHigherOrder = HigherOrder(Label)

export default App8; 