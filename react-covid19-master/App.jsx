import React from "react";
import { WrappedMap } from "./Map";
import _ from "lodash";
import Header from "./Header/Header";

const mapProps = {
	googleMapURL:
		"https://maps.googleapis.com/maps/api/js?key=API_KEY&v=3.exp&libraries=geometry,drawing,places",

	loadingElement: <div style={{ height: `100%` }} />,
	containerElement: <div style={{ height: `66vh` }} />,
	mapElement: <div style={{ height: `125%` }} />,
};

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoaded: false,
			tableData: [],
		};
	}
	componentDidMount() {
		this.getData();
		this.getCityData();
	}
	getData() {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					isLoaded: true,
					data: data,
				});
			});
	}

	getCityData() {
		fetch("https://api.covid19india.org/data.json")
			.then((resp) => resp.json())
			.then((tableData) => {
				this.setState({
					tableData: tableData,
				});
			});
	}

	render() {
		return (
			<React.Fragment>
				<Header
					markers={_.filter(this.state.data.countries, {
						country: "India",
					})}
				/>
				<WrappedMap
					{...mapProps}
					markers={_.filter(this.state.data.countries, {
						country: "India",
					})}
				/>
			</React.Fragment>
		);
	}
}
