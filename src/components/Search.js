import React from 'react';


class Search extends React.Component {
	constructor(props) {
        super(props);
        this.state = {value: ''};
    }
 
	filterUpdate(event) {
		this.props.filterUpdateFromApp(event.target.value);
		this.setState({value: event.target.value});
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<form>
				<input type="text" placeholder="Type to Filter" value ={this.state.value}  onChange={this.filterUpdate.bind(this)}/>
			</form>
		);
	}
}
export default Search;
