import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    this.setState({ filterText: value });
  }

  selectedUpdate(id) {
    this.setState({ selectedBuilding: id });
  }

  render() {

    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterUpdateFromApp={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    filterText={this.state.filterText}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <div className="viewColumn">
                <ViewBuilding
                  selectedBuildingID={this.state.selectedBuilding}
                  data={this.props.data}
                  selectedUpdate={this.selectedUpdate.bind(this)}
                />
              </div>
              <div className="addColumn">
                <h2>Add Building to Directory</h2>
                <AddBuilding
                  data={this.props.data}
                  filterUpdate={this.filterUpdate.bind(this)}
                />
              </div>

            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
