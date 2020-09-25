var angka = prompt('Masukkan Angka!');

for (var i = 1; i <= 21; i++) {
    for (var j = 1; j <= i; j++) {
        document.write("&nbsp&nbsp");
    }
    for (var k = i; k <= angka; k++) {
        document.write("*");
        for (var j = i; j <= i; j++)
            document.write("=");
    }

    document.write("<br>");
}
