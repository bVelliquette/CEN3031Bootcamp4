import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {
	render() {
		const { selectedBuildingID, data } = this.props;
		if (selectedBuildingID === 0) {
			return (
				<div>
					<p>
						<i>Click on a name to view more information</i>
					</p>
				</div>

			);
		}
		else {
			const selectedBuilding = data
				.filter(building => building.id === selectedBuildingID);
			if (!selectedBuilding[0].coordinates)
				selectedBuilding[0].coordinates = { latitude: 'Not available', longitude: 'Not available' };
			else {
				if (!selectedBuilding[0].coordinates.latitude)
					selectedBuilding[0].coordinates.latitude = 'Not available';
				if (!selectedBuilding[0].coordinates.longitude)
					selectedBuilding[0].coordinates.longitude = 'Not available';
			}
			if (!selectedBuilding[0].address)
				selectedBuilding[0].address = 'Address unavailable';
			return (
				<div>
					<h2>
						{selectedBuilding[0].name}
					</h2>
					<b>{selectedBuilding[0].address}</b>
					<p>
						<b>Code:</b> {selectedBuilding[0].code}
						<br></br><b>ID:</b> {selectedBuilding[0].id}

						<br></br><b>Latitude:</b> {selectedBuilding[0].coordinates.latitude}
						<br></br><b>Longitude:</b> {selectedBuilding[0].coordinates.longitude}

						<RemoveBuilding
							selectedBuildingID={this.props.selectedBuildingID}
							data={this.props.data}
							selectedUpdate={this.props.selectedUpdate}
						/>
					</p>
				</div>
			);
		}
	}
}
export default ViewBuilding;
