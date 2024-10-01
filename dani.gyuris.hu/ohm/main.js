//ellenállás = r
//feszültség = u
//áramerősség = i


function szamolas() {
    var u = document.getElementById("u").value
    var i = document.getElementById("i").value
    var r = document.getElementById("r").value

    if (u == "") {
        u = r * i
    }
    if (i == "") {
        i = u / r
        
    }
    if (r == "") {
        r = u / i


    }
    document.querySelector(".feszultseg").innerHTML = `${ u }`
    document.querySelector(".aramerosseg").innerHTML = `${ i }`
    document.querySelector(".ellenallas").innerHTML = `${ r }`
    
}