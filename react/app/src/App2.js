import React from 'react';

class App2 extends React.Component {
	constructor(){
		// sets the context inside this to 'this'
		super(); 
		this.state = {}
		// we bind the context of update inside the constructor
		this.update = this.update.bind(this);
	}

	// There seems to be alot of interesting properties inside 'event.target', including
	// target.name, target.value, .type etc... etc... 

	update(event){
		let newStateObj = {}; // we have to declare the object first.  
		// we cannot create object and it's property in one go.  
		newStateObj[event.target.name] = event.target.value;
		this.setState(newStateObj); 
	}

	/* 
		In actual coding, we would use a loop to generate text-1.
		
		The downside to ths is we need to pass in the value to display to each InputBox
		ourselves.
	*/
	render(){
		return (
			<div>
				<InputBox updateh1={this.update} inputname='text-1' displayvalue={this.state['text-1']} />
				<InputBox updateh1={this.update} inputname='text-2' displayvalue={this.state['text-2']}/> 
				<InputBox updateh1={this.update} inputname='text-3' displayvalue={this.state['text-3']}/>  
			</div> 
		) 
	}
}


const InputBox = (props) => {
	return (
		<div> 
			<input onChange={props.updateh1} name={props.inputname} />
			<span>{props.displayvalue}</span>
		</div>
	)
}

export default App2; 