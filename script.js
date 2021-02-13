function f(id) {
    var small = document.getElementById(id);
    var path = small.src.replace('small', 'big');
    var big = document.getElementById("big");
    big.src = path;
}

function imageError() {
    document.querySelector(".big").innerHTML = 'fail not found';
}