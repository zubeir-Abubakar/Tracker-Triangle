function tracker(){
        var measurement1 = parseInt(document.getElementById("measurement 1").value);
        var measurement2 = parseInt(document.getElementById("measurement 2").value);
        var measurement3 = parseInt(document.getElementById("measurement 3").value);
 if (measurement3 >= (measurement1 + measurement2)) {
            alert("this  triangle can't be formed");
        }
 else if (measurement1 === measurement2 && measurement2 === measurement3 && measurement3 === measurement1 && measurement1 === measurement3) {
            alert("this is an equilatral triangle");
        }
 else if (measurement1 === measurement2 && measurement2 !== measurement3 || measurement1 == measurement3 && measurement1 !== measurement2 || measurement2 == measurement3 && measurement1 !== measurement3) {
            alert("this an isoscles triangle");
        }
else if (measurement1 < (measurement2 + measurement3) || measurement2 < (measurement1 + measurement3) || measurement3 < (measurement1 + measurement2)) {
            alert("this is a scalene triangle");
        }
        else {
            alert("error");
        }
    }
