import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GoogleMap from "./Map"
import FlickrApp from './Flickr';
import Navbar from "./Navbar"


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));
  
export default function Search() {
    const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
				<div className={classes.root}>
					<Navbar />
					<Grid container spacing={0}>
                    	<Grid item xs={3}>
							<FlickrApp />
						</Grid>
						<Grid item xs={9}>
							<GoogleMap />							
						</Grid>
					</Grid>
				</div>
		</React.Fragment>
	);
}
