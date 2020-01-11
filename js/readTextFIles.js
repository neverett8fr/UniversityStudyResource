//hopefully should read in text files and display them on page
//called when module info is clicked


function loadFile(fileName, writeLocation){

    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", fileName, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            let allText = rawFile.responseText;
            document.getElementById(writeLocation).innerHTML = allText;
        }
    }


}
