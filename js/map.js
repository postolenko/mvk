if( document.getElementsByClassName("map-block")[0] ) {

	var map;

	var marker;
	// var image = 'img/map_marker.png';

	var styles;

	function initMap() {

		var styles =[
		    {
		        "featureType": "all",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "weight": "1.00"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#444444"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#f2f2f2"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 45
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#d9d9d9"
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    }
		];


		var styledMap = new google.maps.StyledMapType(styles,
		{name: "Styled Map"});

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 54.71995, lng: 25.2906968},
			scrollwheel: false,
			scaleControl: false,
			mapTypeControl: false,
			zoom: 13
		});

		// marker = new google.maps.Marker({
		// 	map: map,
		// 	draggable: false,
		// 	animation: google.maps.Animation.DROP,
		// 	position: {lat: 54.71995, lng: 25.2906968},
		// 	map: map,
		// 	icon: image,
		// 	title: 'MVK'
		// });

		// marker.addListener('click', toggleBounce);

		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');


	}

		function toggleBounce() {
		  if (marker.getAnimation() !== null) {
		    marker.setAnimation(null);
		  } else {
		    marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}

}



