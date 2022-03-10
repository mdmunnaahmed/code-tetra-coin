"use strict";
if ($("#gmaps").length > 0) {
    google.maps.event.addDomListener(window, "load", init);
    function init() {
        var latLng = { lat: 23.8395, lng: 90.416002 };
        var mapOptions = {
            scrollwheel: true,
            zoom: 15,
            center: latLng,
            panControl: true,
            styles: [
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#222222",
                        },
                    ],
                },
                {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [
                        {
                            color: "#E8E8E8",
                        },
                    ],
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [
                        {
                            visibility: "off",
                        },
                    ],
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [
                        {
                            saturation: -50,
                        },
                        {
                            lightness: 75,
                        },
                    ],
                },
                {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [
                        {
                            visibility: "simplified",
                        },
                    ],
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [
                        {
                            visibility: "off",
                        },
                    ],
                },
                {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [
                        {
                            visibility: "off",
                        },
                    ],
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [
                        {
                            color: "#D4D2D4",
                        },
                        {
                            visibility: "on",
                        },
                    ],
                },
            ],
        };
        var mapElement = document.getElementById("gmaps");
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: {
                url: "./assets/images/map.png",
            },
        });
    }
}
