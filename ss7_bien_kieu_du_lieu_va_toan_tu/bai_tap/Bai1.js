let vatLy = prompt("nhập điểm vật lý: ");
let hoaHoc = prompt("nhập điểm hóa học: ");
let sinhHoc = prompt("nhập điểm sinh học: ");
let vl = parseInt(vatLy);
let hh = parseInt(hoaHoc);
let sh = parseInt(sinhHoc);
let diemTrungBinh = (vl + hh + sh)/3;
document.write("điểm trung bình của bạn là: "  + diemTrungBinh);