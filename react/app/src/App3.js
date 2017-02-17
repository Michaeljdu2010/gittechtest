import React from 'react';

class App3 extends React.Component{
	constructor(){
		super(); 
		this.state = {
			'author'  : 'Mike'
		}
	}

	/* You'll notice that we can still make use of the this variable, but we
	cannot call on state without super() */
	render(){
		this.test = 'I believe in hard work and I can learn any trade required of me';
		return(
			<div> 
				<Widget> Quote: "{<TextWidget/>}" </Widget>  
				<Widget> {this.test} - {this.state.author} </Widget> 
			</div> 
		)
	}
}

class Widget extends React.Component{
	/* We can access values inside the Widget component 
	through 'this.props.children' */
	render(){
		return (
			<button> {this.props.children} </button>  
		)
	}
}

const TextWidget = () => {
	return (
		<span> Water flows from valleys to peaks </span>
	); 
}

export default App3; 