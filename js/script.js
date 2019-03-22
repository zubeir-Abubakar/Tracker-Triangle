function(){
var measurement1 = prompt("write measurement for side 1")
var measurement2 = prompt("write measurement for side  2")
var measurement3 = prompt("write measurement for side  3")
if (measurement3 >= (measurement1 + measurement2)) {
    alert("this  triangle can't be formed")
}
else if (measurement1 == measurement2 && measurement2 == measurement3 && measurement3 == measurement1 && measurement1 == measurement3) {
    alert("this is an equilatral triangle");
}
else if (measurement1 == measurement2 && measurement2 !== measurement3 || measurement1 == measurement3 && measurement1 !== measurement2 || measurement2 == measurement3 && measurement1 !== measurement3) {
    alert("this an isoscles triangle");
}
else if (measurement1 < (measurement2 + measurement3) || measurement2 < (measurement1 + measurement3) || measurement3 < (measurement1 + measurement2)) {
    alert("this is a scalene triangle");
}
else {
    alert("error");
}
};