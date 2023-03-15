
const map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(31.798300, -85.954670),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
});

const directionsService = new google.maps.DirectionsService();

directionsService.route(
    {
            origin: "600 University Ave, Troy, Alabama",
            destination: "200 Industrial Blvd, Troy, Alabama",
            travelMode: "DRIVING",
    },
    (response, status) => {
        if (status === "OK") {

            new google.maps.DirectionsRenderer({
                suppressMarkers: true,
                directions: response,
                map: map,
              });
        }
    }
)

function myFunction() {
    
    let x = document.getElementById("rate").value;
    
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Please insert a number between 1 and 10";
    } else {
      text = "Thank you for your feedback!";
    }
    document.getElementById("verification").innerHTML = text;
  }

