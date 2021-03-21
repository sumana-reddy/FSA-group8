import locationsArray from './locations.js';
import {isInsideQuad} from "./location-quad.js";

let colorElement1 = document.getElementById("status1");
let colorElement2 = document.getElementById("status2");
let locationListUpdated;
let device, location;
let flag = false;
let secondBoxFlag = false;

function resetLocations() {
    locationListUpdated.forEach(x => {
        x.status = "false";
    })
    localStorage.setItem("locationListUpdated", JSON.stringify(locationListUpdated));
    flag = false;
    secondBoxFlag = false;
}

document.getElementById("reset").addEventListener("click", resetLocations);

function searchLocationFromLocalStorage(id) {
    let existingLocationData = JSON.parse(localStorage.getItem("locationListUpdated"))
    return existingLocationData.find(ele => ele.id === id);
}

function main() {
    console.log('Page is fully loaded');

    function isLocationDataEqual(currentLocation, existingLocation) {
        return (Date.parse(currentLocation.updatedAt) == Date.parse(existingLocation.updatedAt))
    }

    $.get("/list/index", function (data, status) {

        data.forEach(function (element) {
            element.status = "false";
        });

        // Check browser support
        if (typeof (Storage) !== "undefined") {
            if (localStorage.locationListUpdated) {

                for (let i = 0; i < data.length; i++) {
                    let existingLocation = searchLocationFromLocalStorage(data[i].id);
                    if (existingLocation) {
                        let isExist = isLocationDataEqual(data[i], existingLocation);
                        if (isExist) {
                            data[i].status = existingLocation.status;
                        }
                    }
                }

                localStorage.setItem("locationListUpdated", JSON.stringify(data));
                locationListUpdated = JSON.parse(localStorage.getItem("locationListUpdated"));

            } else {
                localStorage.setItem("locationListUpdated", JSON.stringify(data));
            }
        }
    });
}

window.addEventListener('load', main);
colorElement1.addEventListener('click', onClickSquareBox1);
colorElement1.addEventListener('touch', onClickSquareBox1);
colorElement2.addEventListener('click', onClickSquareBox2);
colorElement2.addEventListener('touch', onClickSquareBox2);


async function onClickSquareBox1() {

    if (typeof (Storage) !== "undefined") {
        let myArray = JSON.parse(localStorage.getItem("locationListUpdated"));

        if(myArray.length == 0) {
            document.getElementById("status1").innerHTML = "No Locations found, please add locations!";
            let utterance = new SpeechSynthesisUtterance("No Locations found, please add locations!");
            speechSynthesis.speak(utterance);
            return;
        }

        let filterCompletedArray = myArray.filter(x => x.status == "false")
        if (filterCompletedArray.length > 0) {
            let myArrayElement = filterCompletedArray[Math.floor(Math.random() * filterCompletedArray.length)];
            myArrayElement.coordinates = [];

            let latArray = myArrayElement.latitude.split("#")
            let lonArray = myArrayElement.longitude.split("#")

            for (let i = 0; i < 4; i++) {
                myArrayElement.coordinates.push({
                    latitude: latArray[i],
                    longitude: lonArray[i]
                });
            }

        console.log(myArrayElement);

            location = myArrayElement;
            secondBoxFlag = true;
        } else {
            flag = true;
        }
    } else {
        location = locationsArray[1];
    }

    if (flag) {
        document.getElementById("status1").innerHTML = "All locations were completed. Please reset to play again!";
        let utterance = new SpeechSynthesisUtterance("All locations were completed. Please reset to play again!");
        speechSynthesis.speak(utterance);
    } else {
        let confirmation = "Treasure ready: " + location.name;
        document.getElementById("status1").innerHTML = confirmation;
        let utterance = new SpeechSynthesisUtterance(confirmation);
        speechSynthesis.speak(utterance);
    }


}

async function onClickSquareBox2() {
    if (secondBoxFlag) {
        if (!flag) {

            device = await getLocation();

            let isInside = isInsideQuad(device, location);
            let status;
            let speak;
            status = "Device Coordinates: " + "<br>";
            status += "Latitude: " + device.coords.latitude + "<br>";
            status += "Longitude: " + device.coords.longitude + "<br>";
            if (isInside) {
                status += "Congratulations!! You have reached Quest: " + location.name;
                speak = "Congratulations!! You have reached Quest: " + location.name;
                locationListUpdated.forEach(x => {
                    if (x.id === location.id) {
                        x.status = "true";
                    }
                })
            } else {
                status += "You haven't reached the quest";
                speak = "You haven't reached the quest";
            }


            document.getElementById("status2").innerHTML = status;
            let utterance = new SpeechSynthesisUtterance(speak);
            speechSynthesis.speak(utterance);
        }
        else {
            document.getElementById("status1").innerHTML = "All locations were completed. Please reset to play again!";
            let utterance = new SpeechSynthesisUtterance("All locations were completed. Please reset to play again!");
            speechSynthesis.speak(utterance);
        }
    } else {
        document.getElementById("status2").innerHTML = "Select the location!";
        let utterance = new SpeechSynthesisUtterance("Select the location!");
        speechSynthesis.speak(utterance);
    }

}

// collects current location
async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then(position => {
        return position;
    });
}


