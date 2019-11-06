import React from 'react'

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Code: '',
            Address: '',
            Latitude: '',
            Longitude: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleInputChange(e) {    
        this.setState({
          [e.target.name]: e.target.value
        });
    }
    handleClick(e) {
        e.preventDefault();
        var data = this.props.data.sort((a,b) => {return a.id - b.id});
        var newBuilding = {
            id: (data[data.length-1].id + 1),
            name: this.state.Name,
            code: this.state.Code.toUpperCase(),
            address: this.state.Address,
            coordinates: {
                longitude: this.state.Longitude,
                latitude: this.state.Latitude
            }
        }
        console.log(newBuilding.id)
        data.push(newBuilding);
        console.log();
        this.setState({
            Name: '',
            Code: '',
            Address: '',
            Latitude: '',
            Longitude: ''
        });
        this.props.filterUpdate('');
    }
    render() {
        return (
            <form class="NewBuildingForm">
                <label>
                    Name:
                <input type="text" name="Name" placeholder="Enter Building Name" value={this.state.Name} onChange={this.handleInputChange.bind(this)} />
                </label>
                <label>
                    Code:
                    <input type="text" name="Code" placeholder="Enter Building Code" value={this.state.Code} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Address:
                    <input type="text" name="Address" placeholder="Enter Address for Building" value={this.state.Address} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Latitude:
                    <input type="text" name="Latitude" placeholder="Enter Latitude" value={this.state.Latitude} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Longitude:
                    <input type="text" name="Longitude" placeholder="Enter Longitude" value={this.state.Longitude} onChange={this.handleInputChange}/>
                </label>
                <button onClick={this.handleClick.bind(this)}>
                Submit
                </button>
            </form>
        );
    }

}
export default AddBuilding;