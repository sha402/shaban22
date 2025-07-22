function myMenuFunction(){
    var i = document.getElementById('navDropdownMenu');

    if(i.className === "nav_drop_down"){
        i.className += "responvise";
    }else{
        i.className = "nav_drop_down";
    }
}