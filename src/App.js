import { useState, useRef,useEffect,Fragment } from 'react';
import CurrentLocation from "./currentLocation";

export default function App() {   
	return (
		<Fragment>
			<div className='container'>
				<CurrentLocation />
			</div>
		</Fragment>
	)
}

