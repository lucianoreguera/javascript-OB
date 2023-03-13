let markers, map;

function initMap() {
    const posicion = {
        lat: -25.363,
        lng: 131.044,
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });

    markers.push(
        new google.maps.Marker({
        position: {
            lat: -34.670267,
            lng: -58.370969,
        },
        map,
        title: "Libertadores de América",
        })
    );
    markers.push(
        new google.maps.Marker({
        position: {
            lat: -31.416667,
            lng: -64.183333,
        },
        map,
        title: "Córdoba",
        })
    );
    markers.push(
        new google.maps.Marker({
        position: {
            lat: -36.85,
            lng: 174.783333,
        },
        map,
        title: "Auckland",
        })
    );
}