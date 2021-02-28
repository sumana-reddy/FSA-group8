import data from './speech.js'
import locationsArray from '../locations.js';

let colorElement1 = document.getElementById("status1");
let colorElement2 = document.getElementById("status2");
let device, location;

function main() {
    console.log('Page is fully loaded');
}

window.addEventListener('load', main);
colorElement1.addEventListener('click', onClicktriangleBox1);
colorElement1.addEventListener('touch', onClicktriangleBox1);
colorElement2.addEventListener('click', onClicktriangleBox2);
colorElement2.addEventListener('touch', onClicktriangleBox2);


async function onClicktriangleBox1() {
    location = locationsArray[0];
    let confirmation = "Found Treasure: " + location.name;
    document.getElementById("status1").innerHTML = confirmation;
    let utterance = new SpeechSynthesisUtterance(confirmation);
    speechSynthesis.speak(utterance);
}

async function onClicktriangleBox2() {
    device = await getLocation();
    let isInside = isInsidetrinagle(device, location);
    
    let status;
    let speak;
    status = "Device Coordinates: " + "<br>";
    status += "Latitude: " + device.coords.latitude + "<br>";
    status += "Longitude: " + device.coords.longitude + "<br>";
    if(isInside) {
        status += "Congratulations!! You have reached Quest: " + location.name;
        speak = "Congratulations!! You have reached Quest: " + location.name;
    } else {
        status += "You haven't reached the quest";
        speak = "You haven't reached the quest";
    }
    document.getElementById("status2").innerHTML = status;
    let utterance = new SpeechSynthesisUtterance(speak);
    speechSynthesis.speak(utterance);

}

// collects current location
async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then(position => {
        
        return position;
    });
}

function isValid(coordinates) {
    let lat = coordinates.latitude;
    let lon = coordinates.longitude;

    if (lat < -90 || lat > 90 || lon < -180 || lon > 180)
        return false;
    else
        return true;
}

function isValidDevice(device) {
    let deviceCoordinates = {};
    deviceCoordinates["latitude"] = device.coords.latitude;
    deviceCoordinates["longitude"] = device.coords.longitude;

    if (isValid(deviceCoordinates))
        return true;
    else
        throw "Invalid Device";
}

function isValidType(location) {
    if (location.type === "triangle")
        return true;
    else
        throw "Invalid Location Type";
}

function isValidCoordinates(coordinates) {
    if (coordinates.length != 3)
        return false;

    coordinates.forEach(function (coordinate, index) {
        if (!isValid(coordinate))
            return false;
    })

    return true;
}

function isValidLocation(location) {
    if (location.name.length > 0 && isValidType(location) && isValidCoordinates(location.coordinates))
        return true;
    else
        throw "Invalid Location";
}

function isValidArguments(device, location) {
    if(device == null && location == null)
        throw "Two valid arguments are needed";
    else
        return true;
}

function isInsidetrinagle(device, location) {
    try {
        let checkValid = isValidArguments(device, location) && isValidDevice(device) &&  isValidLocation(location);
        if (checkValid) {
            let x = device.coords.latitude;
            let y = device.coords.longitude;

            let inside = false;
            let coordinates = location.coordinates;
            for (let i = 0, j = coordinates.length - 1; i < coordinates.length; j = i++) {
                let xi = coordinates[i]["latitude"], yi = coordinates[i]["longitude"];
                let xj = coordinates[j]["latitude"], yj = coordinates[j]["longitude"];

                let intersect = ((yi > y) != (yj > y))
                    && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                if (intersect) inside = !inside;
            }
            return inside;
        }

    } catch (err) {
        console.log("Exception: " + err);
    }
}






