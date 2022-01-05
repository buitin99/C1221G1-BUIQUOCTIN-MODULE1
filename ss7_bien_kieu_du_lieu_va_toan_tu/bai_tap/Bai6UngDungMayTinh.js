


function toanCong() {
    let i1 = parseInt(document.getElementById('I1').value);
    let i2 = parseInt(document.getElementById('I2').value);
    let phepTinh;



    if(document.getElementById('add')) {
            phepTinh = i1 + i2;
        };
            alert(phepTinh);
    };

function toanTru(){

    let i1 = parseInt(document.getElementById('I1').value);
    let i2 = parseInt(document.getElementById('I2').value);
    let phepTinh;
        if(document.getElementById('sub')) {
            phepTinh = i1 - i2;
        };
        alert(phepTinh);
    }

function toanNhan(){

    let i1 = parseInt(document.getElementById('I1').value);
    let i2 = parseInt(document.getElementById('I2').value);
    let phepTinh;
    if(document.getElementById('mul')) {
        phepTinh = i1 * i2;
    };
    alert(phepTinh);
}

function toanChia(){

    let i1 = parseInt(document.getElementById('I1').value);
    let i2 = parseInt(document.getElementById('I2').value);
    let phepTinh;
    if(document.getElementById('div')) {
        phepTinh = i1 / i2;
    };
    alert(phepTinh);
}



let a = 5;
let b;
aler(parseInt(a++ + a--));