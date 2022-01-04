function tinhToan() {

    let tien = document.getElementById('tien').value;
    let sl1 = document.getElementById('sl1').value;
    let sl2 = document.getElementById('sl2').value;
    let vnd1 = document.getElementById('VND1').value;
    let vnd2 = document.getElementById('VND2').value;
    let usd1 = document.getElementById('USD1').value;
    let usd2 = document.getElementById('USD2').value;

    if(sl1 == vnd1 && sl2 == usd2) {
        tien = tien / 24000
    } else if ((sl1 == vnd1 && sl2 == vnd2) || (sl1 == usd1 && sl2 == usd2)){
            tien = tien
        }
            else {
                tien = tien*24000
            }


    alert(tien);


}