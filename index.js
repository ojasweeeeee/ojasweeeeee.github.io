function changeCSS(){
    var checkbox = document.getElementById('darkmode-toggle');
    if (checkbox.checked != true)
    {
        document.getElementById("theme").setAttribute("href", "css/styles.css");
    }
    else
    {
        document.getElementById("theme").setAttribute("href", "css/stylesdark.css");
    }
}



