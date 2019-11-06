import React from 'react'

class RemoveBuilding extends React.Component {

    handleClick() {
        var {selectedBuildingID, data, selectedUpdate} = this.props;
        data.splice(data.indexOf(data.find((e) => {return e.id === selectedBuildingID})), 1);
        selectedUpdate(0);
    }

    render() {
        return (
            <div className='RemoveBuilding'>
                <button onClick={this.handleClick.bind(this)}>
                Remove Building
                </button>
            </div>
        );
    }
}
export default RemoveBuilding;