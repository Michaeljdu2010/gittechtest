import React from 'react';

// const App = () => {
//   return <h1> A journey of a thousand miles starts with a single step. </h1>
// };

class App extends React.Component {
  render(){
  	let quote = this.props.quote; 
  	let author = this.props.author;
    return (
      <div>
        <h1> {quote} </h1> 
        <h2> - {author} </h2> 
      </div>
    )
  }
}

/* React transforms the code to
  
  React.createElement(
    'name of Element',
    {object of props},
    'content, could be another React.createElement'
  )
*/

App.propTypes = {
  // creating custom prop validation 
  // props: all props, propName: this prop 'quote', component: this component 'App' 
  quote(props, propName, component){
    if(!(propName in props)){
      return new Error('you must provide the prop "quote" to the component'); 
    } 
    if (props[propName].length < 10){
      return new Error('your prop "quote" must be longer than 10 characters'); 
    }
  }, 
	// quote: React.PropTypes.string.isRequired,
  author: React.PropTypes.string
}

App.defaultProps = {
	author: 'unknown'
}

export default App; 
