const menhGia = {
    VND : 1,
    // 1 : 26.179 USD
    USD : 0.0000382
 
};
function doiTien(){
    let tien = document.getElementById("nhapTien").value;
    let tu = document.getElementById("tu").value;
    let sang = document.getElementById("sang").value;
    let ketQua = tien / (menhGia[tu] * menhGia[sang]);
    let ketQuaXuat = document.getElementById("xuatTiensss");
    ketQuaXuat.textContent = `${ ketQua }`;


}




