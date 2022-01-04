let r = prompt("Nhập bán kính hình tròn:");
let pi = 3.14;
let bk = parseInt(r);
let dienTichHinhTron;
let chuViHinhTron;
dienTichHinhTron = bk*bk*pi;
chuViHinhTron =  (bk+bk)*pi;
document.write("Diện tích hình tròn là:" + dienTichHinhTron);
document.write("<br>")
document.write("Chu vi hình tròn là:" + chuViHinhTron);