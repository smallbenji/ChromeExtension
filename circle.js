var pi;

var a = prompt("Radius\n\nDu skal måle fra midten og ud til kanten af cirkelen");

if(confirm("Pi\n\nHvis pi skal være 3,14 tryk på OK knappen")){
    pi = 3.14;
}
else {
    pi = prompt("Hvad skal pi være?");
}

var answer = pi*(a*a);
alert("Cirkel\n\n" + pi + " * (" + a + " * " + a + ") = " + answer);