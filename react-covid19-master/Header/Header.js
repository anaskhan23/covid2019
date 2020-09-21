import React, { Component } from "react";
import HeaderStyle from "./headerStyle";

export default class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<HeaderStyle>
				<div className="header">
					<h1>CORONAVIRUS COVID-19 INDIA DASHBOARD</h1>
					{this.props.markers[0] && (
						<div className="cases-india">
							<div className="col">
								CONFIRMED CASES :{" "}
								{this.props.markers[0].cases_confirmed}
							</div>
							<div className="col">
								DEATH : {this.props.markers[0].cases_death}
							</div>
							<div className="col">
								RECOVERED CASES :{" "}
								{this.props.markers[0].cases_recovered}
							</div>
						</div>
					)}
				</div>
			</HeaderStyle>
		);
	}
}
