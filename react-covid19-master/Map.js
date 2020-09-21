import React, { useState } from "react";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import MapTheme from "./MapTheme";

function Map(props) {
	const [selectedMarker, setSelectedMarker] = useState(null);
	return (
		<GoogleMap
			defaultZoom={4}
			defaultCenter={{ lat: 23.3015076, lng: 80.404294 }}
			options={{ styles: MapTheme }}
		>
			<MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
				{props.markers[0].states.map((marker) => {
					return (
						<Marker
							key={marker.state}
							position={{
								lat: marker.lat,
								lng: marker.lng,
							}}
							onClick={() => {
								setSelectedMarker(marker);
							}}
							onMouseOver={() => {
								setSelectedMarker(marker);
							}}
							icon={{
								url: "coronavirus.png",
							}}
						/>
					);
				})}
				{selectedMarker && (
					<InfoWindow
						position={{
							lat: selectedMarker.lat,
							lng: selectedMarker.lng,
						}}
						onCloseClick={() => {
							setSelectedMarker(null);
						}}
					>
						<div>
							<h2>STATE: {selectedMarker.state}</h2>
							<h2>
								CONFIRMED CASES :
								{selectedMarker.cases_confirmed}
							</h2>
							<h2>DEATH:{selectedMarker.cases_death}</h2>
							<h2>RECOVERED :{selectedMarker.cases_recovered}</h2>
						</div>
					</InfoWindow>
				)}
			</MarkerClusterer>
		</GoogleMap>
	);
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));

