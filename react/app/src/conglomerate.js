import React from 'react';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5Wrapper from './App5Wrapper';
import App6 from './App6';
import App7 from './App7';
import App8 from './App8';
import App9 from './App9';

class Conglomerator extends React.Component{
	constructor(){
		super();
		this.state={
			counter: 0
		}
		this.increaseCounter = this.increaseCounter.bind(this); 
	}
	increaseCounter(){
		this.setState({
			counter: this.state.counter + 1
		});
	}
	render(){
		return (
			<div> 
				<div className='component-wrap app'>
					<h4> App: proptypes custom validation: </h4> 
					<App quote='A journey of a thousand miles starts with a single step' /> 
				</div>
				<div className='component-wrap app2'>
					<h4> App 2: let, props, state: </h4> 
					<App2 /> 
				</div>
				<div className='component-wrap app3'>
					<h4> App 3: Widgets: </h4> 
					<App3 name='Mike' /> 
				</div>
				<div className='component-wrap app4'>
					<h4> App 4: Refs: </h4> 
					<App4 /> 
				</div>
				<div className='component-wrap app5'>
					<h4> App 5: Component Life Cycle: </h4> 
					<App5Wrapper /> 
				</div>
				<div className='component-wrap app6'>
					<h4> App 6: Update Life Cycle: </h4> 
					<button onClick={this.increaseCounter} /> 
					<div id='app6'>
						<App6 counter={this.state.counter} /> 
					</div> 
				</div>
				<div className='component-wrap app7'>
					<h4> App 7: Fetch, and consuming and presenting data: </h4> 
					<App7 /> 
				</div>
				<div className='component-wrap app8'>
					<h4> App 8: Higher order components: </h4> 
					<App8 /> 
				</div>
				<div className='component-wrap app9'>
					<h4> App 9: React Child Utilities: </h4> 
					<App9 /> 
				</div>
			</div>
		)
	}
}

export default Conglomerator;