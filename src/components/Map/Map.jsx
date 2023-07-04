import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationCityOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: {
      transform: 'scale(0.5)'
    }
  };

  if (isMobile) {
    options.zoomControl = false;
  }

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        options={options}
        bootstrapURLKeys={{ key: 'AIzaSyDZWYt8K1a8ySh4vWRn2nG0HCeIzbmGfIA' }} 
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        center={coordinates}
        onChange={(e) => {
          if (e && e.center) {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          }
          if (e && e.marginBounds && e.marginBounds.ne && e.marginBounds.sw) {
            setBounds({
              ne: { lat: e.marginBounds.ne.lat, lng: e.marginBounds.ne.lng },
              sw: { lat: e.marginBounds.sw.lat, lng: e.marginBounds.sw.lng }
            });
          } else {
            setBounds(null);
          }
        }}
      >
        {places.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            <Paper elevation={3} className={classes.paper}>
              <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                {place.name}
              </Typography>
              <img
                className={classes.pointer}
                src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                alt={place.name}
              />
              <Rating size="small" value={Number(place.rating)} readOnly />
            </Paper>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
