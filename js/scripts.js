var typeActual = 0;

function btnPress(type){
    document.getElementById(
        "overlay"
    ).style.display = "block";
    document.getElementById(
        "popup"
    ).style.display = "block";

    typeActual = type;
}

function enviar(){
    const contra = document.getElementById('contrassenya').value;

    if (verifyPassword(typeActual, contra)){

    } else {
        closeWindow();
        errorWindow();
    }
}

function closeWindow(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
    document.getElementById("popupError").style.display = "none";
}

function verifyPassword(type, contra){
    if(type == 1 && contra == ''){
        return true;
    }
    else if(type == 2 && contra == ''){
        return true;
    }
    else if(type == 3 && contra == ''){
        return true;
    }
    else if(type == 4 && contra == ''){
        return true;
    }
    else if(type == 5 && contra == ''){
        return true;
    }
    else if(type == 6 && contra == ''){
        return true;
    }
    else if(type == 7 && contra == ''){
        return true;
    }
    else if(type == 8 && contra == ''){
        return true;
    }
    else if(type == 9 && contra == ''){
        return true;
    }
    else if(type == 10 && contra == ''){
        return true;
    }
    else{
        return false;
    }
}

function errorWindow(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popupError").style.display = "block";
}

