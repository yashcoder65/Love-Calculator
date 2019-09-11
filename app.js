var inputFeild1 = document.getElementById('inputFeild');
var inputFeild2 = document.getElementById('inputFeild1');
var result = document.getElementById('outputfeild');
var header = document.getElementById('percent');


header.addEventListener("submit", function(event) {

    var output;
    if (!inputFeild1.value || !inputFeild2.value) {
        alert("Please Enter your name")
    } else {
        var x = inputFeild1.value;
        var y = inputFeild2.value;
        var d = x.length;
        var a = y.length;
        if (d > a) {
            output = (a / d) * 100;
        } else if (d < a) {
            output = (d / a) * 100;
        } else {
            output = 100;
        }
    }
    result.innerText = Math.ceil(output) + "%";
    event.preventDefault();
});