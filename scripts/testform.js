function testResults (form) {
    var TestVar = form.uname.value;

    if (form.uname.value == "elyan"){
        open("output-form.html");
    }else{
        alert("CÓDIGO INCORRECTO, VUELVE A INTENTARLO");
    }
}