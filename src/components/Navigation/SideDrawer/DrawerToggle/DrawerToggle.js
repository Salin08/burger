import React from 'react'
import css from './DrawerToggle.css'
const drawerToggle=(props)=>{
	return(
			<div className={css.DrawerToggle} onClick={props.clicked}>

				<div></div>
				<div></div>
				<div></div>

			</div>
		);
}
export default drawerToggle