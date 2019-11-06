import React from 'react';

class BuilingList extends React.Component {
	render() {
		const { data, selectedUpdate, filterText} = this.props;

		const buildingList = data
		.sort((a,b)=> {
			if(a.code.toUpperCase() < b.code.toUpperCase()){
				return -1;
			}
			else if(a.code.toUpperCase() > b.code.toUpperCase()){
				return 1;
			}
			return 0;})
		.filter(building => building.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
			|| building.code.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
		.map(directory => {
			return (
					<tr key={directory.id} onClick={()=>selectedUpdate(directory.id)}>
					<td> {directory.code}  </td>
					<td> {directory.name} </td>
					</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
