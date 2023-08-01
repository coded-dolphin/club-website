function socialTgl() {
    var tgl = document.getElementById("hidden");

    if (tgl.style.transform === "scale(0)") { // Use triple equal (===) for comparison, not single equal (=)
        tgl.style.transform = "scale(1)";
    } 
    else if(tgl.style.transform !== "scale(0)") {
        tgl.style.transform = "scale(0)";
    }else{
        tgl.style.transform === "scale(0)"
    }
}
