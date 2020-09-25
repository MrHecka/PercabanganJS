var k = prompt('Masukkan Angka!');

for (var i = 5; i >= 1; i--) {
    var l = i;
    for (var j = 1; j <= i; j++) {
        if (j > k) {
            if (l % 2 == 0) {
                document.write("=");
            } else {
                document.write("*");
            }
        } else {
            document.write("&nbsp;&nbsp;");
        }
        l++;
    }
    document.write("<br>");
    k++;
}