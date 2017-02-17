/*

Quick syntax on the fetch() method.  

fetch('https://davidwalsh.name/users.json', {
	method: 'POST', 
	mode: 'cors', 
	redirect: 'follow',
	headers: new Headers({
		'Content-Type': 'text/plain'
	})
}).then(function(response) { ... handle response ... });

*/

// var cachedData = {"count":87,"next":"http://swapi.co/api/people/?page=2&format=json","previous":null,"results":[{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"http://swapi.co/api/planets/1/","films":["http://swapi.co/api/films/6/","http://swapi.co/api/films/3/","http://swapi.co/api/films/2/","http://swapi.co/api/films/1/","http://swapi.co/api/films/7/"],"species":["http://swapi.co/api/species/1/"],"vehicles":["http://swapi.co/api/vehicles/14/","http://swapi.co/api/vehicles/30/"],"starships":["http://swapi.co/api/starships/12/","http://swapi.co/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"http://swapi.co/api/people/1/"},{"name":"C-3PO","height":"167","mass":"75","hair_color":"n/a","skin_color":"gold","eye_color":"yellow","birth_year":"112BBY","gender":"n/a","homeworld":"http://swapi.co/api/planets/1/","films":["http://swapi.co/api/films/5/","http://swapi.co/api/films/4/","http://swapi.co/api/films/6/","http://swapi.co/api/films/3/","http://swapi.co/api/films/2/","http://swapi.co/api/films/1/"],"species":["http://swapi.co/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:10:51.357000Z","edited":"2014-12-20T21:17:50.309000Z","url":"http://swapi.co/api/people/2/"},{"name":"R2-D2","height":"96","mass":"32","hair_color":"n/a","skin_color":"white, blue","eye_color":"red","birth_year":"33BBY","gender":"n/a","homeworld":"http://swapi.co/api/planets/8/","films":["http://swapi.co/api/films/5/","http://swapi.co/api/films/4/","http://swapi.co/api/films/6/","http://swapi.co/api/films/3/","http://swapi.co/api/films/2/","http://swapi.co/api/films/1/","http://swapi.co/api/films/7/"],"species":["http://swapi.co/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:11:50.376000Z","edited":"2014-12-20T21:17:50.311000Z","url":"http://swapi.co/api/people/3/"},{"name":"Darth Vader","height":"202","mass":"136","hair_color":"none","skin_color":"white","eye_color":"yellow","birth_year":"41.9BBY","gender":"male","homeworld":"http://swapi.co/api/planets/1/","films":["http://swapi.co/api/films/6/","http://swapi.co/api/films/3/","http://swapi.co/api/films/2/","http://swapi.co/api/films/1/"],"species":["http://swapi.co/api/species/1/"],"vehicles":[],"starships":["http://swapi.co/api/starships/13/"],"created":"2014-12-10T15:18:20.704000Z","edited":"2014-12-20T21:17:50.313000Z","url":"http://swapi.co/api/people/4/"},{"name":"Leia Organa","height":"150","mass":"49","hair_color":"brown","skin_color":"light","eye_color":"brown","birth_year":"19BBY","gender":"female","homeworld":"http://swapi.co/api/planets/2/","films":["http://swapi.co/api/films/6/","http://swapi.co/api/films/3/","http://swapi.co/api/films/2/","http://swapi.co/api/films/1/","http://swapi.co/api/films/7/"],"species":["http://swapi.co/api/species/1/"],"vehicles":["http://swapi.co/api/vehicles/30/"],"starships":[],"created":"2014-12-10T15:20:09.791000Z","edited":"2014-12-20T21:17:50.315000Z","url":"http://swapi.co/api/people/5/"},{"name":"Owen Lars","height":"178","mass":"120","hair_color":"brown, grey","skin_color":"light","eye_color":"blue","birth_year":"52BBY","gender":"male","homeworld":"http://swapi.co/api/planets/1/","films":["http://swapi.co/api/films/5/","http://swapi.co/api/films/6/","http://swapi.co/api/films/1/"],"species":["http://swapi.co/api/species/1/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:52:14.024000Z","edited":"2014-12-20T21:17:50.317000Z","url":"http://swapi.co/api/people/6/"},{"name":"Beru Whitesun lars","height":"165","mass":"75","hair_color":"brown","skin_color":"light","eye_color":"blue","birth_year":"47BBY","gender":"female","homeworld":"http://swapi.co/api/planets/1/","films":["http://swapi.co/api/films/5/","http://swapi.co/api/films/6/","http://swapi.co/api/films/1/"],"species":["http://swapi.co/api/species/1/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:53:41.121000Z","edited":"2014-12-20T21:17:50.319000Z","url":"http://swapi.co/api/people/7/"},{"name":"R5-D4","height":"97","mass":"32","hair_color":"n/a","skin_color":"white, red","eye_color":"red","birth_year":"unknown","gender":"n/a","homeworld":"http://swapi.co/api/planets/1/","films":["http://swapi.co/api/films/1/"],"species":["http://swapi.co/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:57:50.959000Z","edited":"2014-12-20T21:17:50.321000Z","url":"http://swapi.co/api/people/8/"},{"name":"Biggs Darklighter","height":"183","mass":"84","hair_color":"black","skin_color":"light","eye_color":"brown","birth_year":"24BBY","gender":"male","homeworld":"http://swapi.co/api/planets/1/","films":["http://swapi.co/api/films/1/"],"species":["http://swapi.co/api/species/1/"],"vehicles":[],"starships":["http://swapi.co/api/starships/12/"],"created":"2014-12-10T15:59:50.509000Z","edited":"2014-12-20T21:17:50.323000Z","url":"http://swapi.co/api/people/9/"},{"name":"Obi-Wan Kenobi","height":"182","mass":"77","hair_color":"auburn, white","skin_color":"fair","eye_color":"blue-gray","birth_year":"57BBY","gender":"male","homeworld":"http://swapi.co/api/planets/20/","films":["http://swapi.co/api/films/5/","http://swapi.co/api/films/4/","http://swapi.co/api/films/6/","http://swapi.co/api/films/3/","http://swapi.co/api/films/2/","http://swapi.co/api/films/1/"],"species":["http://swapi.co/api/species/1/"],"vehicles":["http://swapi.co/api/vehicles/38/"],"starships":["http://swapi.co/api/starships/48/","http://swapi.co/api/starships/59/","http://swapi.co/api/starships/64/","http://swapi.co/api/starships/65/","http://swapi.co/api/starships/74/"],"created":"2014-12-10T16:16:29.192000Z","edited":"2014-12-20T21:17:50.325000Z","url":"http://swapi.co/api/people/10/"}]}


import React from 'react';

class App7 extends React.Component{
	constructor(){
		super(); 
		this.updateFilter = this.updateFilter.bind(this);
		this.state = {
			data: []
		};  
	}
	/* response.json() seems to pass on to the next promise the formatted JSON response */
	
	/* 
	 Notice the render() function will be called while the ajax fetch is still in flight.
	 This is why we need to set this.state.data to an empty array, so the code doesn't
	 error out on the first pass of render(). 
	*/
	componentWillMount() {
		fetch('http://swapi.co/api/people/?format=json')
		.then((response) => response.json())
		.then((formattedResponse) => {
				this.setState({
					data: formattedResponse.results 
				}); 
			}
		).catch(
			function(err){
				console.log(err); 
			}
		); 
	}

	updateFilter(e){
		this.setState({
			filter: e.target.value 
		})
	}

	// unique key amongst siblings 
	renderItem(item, index){
		return (
			<h4 key={index}> {item.name} </h4> 
		)
	}
	/*
		.filter   ...  a js method on arrays which returns a new array on all items
					   that pass the condition. 
		.includes ...  a test to see if the string passed is contained inside the string 
		.map      ...  creates a new array by passing each member of current array to a
					   function to be processed. 
	*/
	render(){ 
		let returnData = this.state.data;  
		if (this.state.filter){
			returnData = returnData.filter(
				(item) => {
					return item.name.toLowerCase().includes(this.state.filter.toLowerCase()) 
				}
			)
		} 
		return (
			<div> 
				<input type='text' onChange={this.updateFilter} /> 
				{
					returnData.map(
						(item, index) => this.renderItem(item, index)
					)
				}
			</div> 
		)
	}
}


export default App7; 