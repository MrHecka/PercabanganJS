var baris = 5;
var polaDollar = "$";
var polaSamaDgn = "=";
var polaBintang = "*";
var spasi = "";

for (let index = baris; index > 0; index--) {

    var hasil = "";

    var jmlhCell = (index * 2) - 1;
    //console.log(jmlhCell);

    for (let index2 = jmlhCell; index2 > 0; index2--) {

        if ((index2 % 2) == 0) {
            hasil = hasil.concat(polaSamaDgn);
            hasil = hasil.concat(polaBintang);
        } else {
            hasil = hasil.concat(polaDollar);
        }
    }


console.log(spasi + hasil);
spasi += " ";

}