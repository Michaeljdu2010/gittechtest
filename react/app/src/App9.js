import React from 'react';

class App9 extends React.Component{
	render(){
		return (
			<div> 
				<Parent> 
					<ChildOne /> 
					<ChildTwo /> 
				</Parent> 
			</div> 
		)
	}
}

/* Remember this.props.children?  
   There is a more React way of doing it, called React.Children.  It takes two
   parameters: (i) this.props.children, (ii) the function to handle it.
   The two most common functions on it are .map and .forEach, which are the same ones
   usually associated with arrays */
class Parent extends React.Component{
	render(){
		let children = this.props.children; 
		return (
			{React.Children.map(children, (child, i) => {
	          // Ignore the first child
	          if (i < 1) return
	          return child
        	})}
		)
	}
}

const ChildOne = (props) => {
	return (
		<div> I am the only child </div>
	)
}

const ChildTwo = (props) => {
	return (
		<div> I am another child </div> 
	)
};

export default App9;