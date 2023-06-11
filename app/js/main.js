import Api from '../services/api.js';
import {getListGiangVien,getListHocSinh,getListKhachHang,layThongTinHocSinh,layThongTinGiangVien,layThongTinKhachHang} from '../controller/controller.js';
import {Person,Student,Employee,Customer} from '../modal/person.js';
import ListPerson from '../modal/listPerson.js';

const domID = function (id) {
    return document.getElementById(id);
};

const foodList = new ListPerson();
const api = new Api();
getListHocSinh();
getListGiangVien();
getListKhachHang();
domID('home-tab').onclick = function () {
    getListHocSinh();
};

domID('profile-tab').onclick = function () {
    getListGiangVien();
};

domID('contact-tab').onclick = function () {
    getListKhachHang();
};


//Xu ly thêm hoc sinh -------------------------------
domID('btnThemHocSinh').onclick = function () {
    let btnAddHocSinh = `<button class='btn btn-outline-success' id='btnAddHS' onclick="themHocSinh()">Add</button>`;
    let btnUpdateHocSinh = `<button class='btn btn-outline-success' style="display:none" id='btnUpdateHS' onclick="updateHocSinh()">Update</button>`;
    document.getElementsByClassName('modal-footer-hocsinh')[0].innerHTML = btnAddHocSinh + btnUpdateHocSinh;
};

window.themHocSinh = () => {
    const hocsinh = layThongTinHocSinh();
    console.log(hocsinh);
    api
    .callApi('hocvien', 'POST', hocsinh)
    .then((res) => {
        getListHocSinh();
        //close modal 
        document.getElementsByClassName('close-hocsinh')[0].click();
    })
    .catch((error) => {
        console.log(error);
    });
};

//Xu ly thêm Giảng Viên
domID('btnThemGiangVien').onclick = function () {
    let btnAddGiangVien = `<button class='btn btn-outline-info' id='btnAddGV' onclick="themGiangVien()">Add</button>`;
    let btnUpdateGiangVien = `<button class='btn btn-outline-success' style="display:none" id='btnUpdateGV' onclick="updateGiangVien()">Update</button>`;
    document.getElementsByClassName('modal-footer-GiangVien')[0].innerHTML = btnAddGiangVien + btnUpdateGiangVien;
};

window.themGiangVien = () => {
    const GiangVien = layThongTinGiangVien();
    api
    .callApi('hocvien', 'POST', GiangVien)
    .then((res) => {
        getListGiangVien();
        //close modal 
        document.getElementsByClassName('close-GiangVien')[0].click();
    })
    .catch((error) => {
        console.log(error);
    });
};

//Xu ly thêm Khách Hàng
domID('btnThemKhachHang').onclick = function () {
    let btnAddKhachHang = `<button class='btn btn-outline-danger' id='btnAddKH' onclick="themKhachHang()">Add</button>`;
    let btnUpdateKhachHang = `<button class='btn btn-outline-success' style="display:none" id='btnUpdateKH' onclick="updateKhachHang()">Update</button>`;
    document.getElementsByClassName('modal-footer-KhachHang')[0].innerHTML = btnAddKhachHang + btnUpdateKhachHang;
};

window.themKhachHang = () => {
    const KhachHang = layThongTinKhachHang();
    api
    .callApi('hocvien', 'POST', KhachHang)
    .then((res) => {
        getListKhachHang();
        //close modal 
        document.getElementsByClassName('close-KhachHang')[0].click();
    })
    .catch((error) => {
        console.log(error);
    });
};

// Xử lý xóa 
window.deleteID = (id) => {
    api
        .callApi(`hocvien/${id}`, 'DELETE', null)
        .then((response) => {
            getListHocSinh();
            getListGiangVien();
            getListKhachHang();
        })
        .catch(err => {
            console.log('error: ' + err);
        })
};

//Xử lí sửa 
window.editID = (id) => {
    api
    .callApi(`hocvien/${id}`, 'GET', null)
    .then((response) => {
        console.log(response);
        if (response.data.type === 1) {
            domID('btnThemHocSinh').click();
            domID('btnAddHS').style.display = 'none';
            domID('btnUpdateHS').style.display = 'block';
            domID('idHS').value = response.data.id;
            domID('hoTenHS').value = response.data.name;
            domID('addressHS').value = response.data.address;
            domID('emailHS').value = response.data.email;
            domID('toan').value = response.data.toan;
            domID('ly').value = response.data.ly;
            domID('hoa').value = response.data.hoa;
        } else if (response.data.type === 2) {
            domID('btnThemGiangVien').click();
            domID('btnAddGV').style.display = 'none';
            domID('btnUpdateGV').style.display = 'block';
            domID('idGV').value = response.data.id;
            domID('hoTenGV').value = response.data.name;
            domID('addressGV').value = response.data.address;
            domID('emailGV').value = response.data.email;
            domID('ngayLam').value = response.data.soNgayLam;
            domID('luongNgay').value = response.data.luongNgay;
        } else if (response.data.type === 3 ) {
            domID('btnThemKhachHang').click();
            domID('btnAddKH').style.display = 'none';
            domID('btnUpdateKH').style.display = 'block';
            domID('idKH').value = response.data.id;
            domID('hoTenKH').value = response.data.name;
            domID('addressKH').value = response.data.address;
            domID('emailKH').value = response.data.email;
            domID('tenCty').value = response.data.tenCty;
            domID('hoaDon').value = response.data.hoaDon;
            domID('danhGia').value = response.data.danhGia;
        };
    })
    .catch(err => {
        console.log('error: ' + err);
    })
};

//Xử lý Update 

window.updateHocSinh = async () => {
    const hocsinh = layThongTinHocSinh();

    const result = await api.callApi(`hocvien/${hocsinh.id}`, "PUT",hocsinh);
    
    if ( result.status === 200 ) {
        //success
        getListHocSinh();
        document.getElementsByClassName('close-hocsinh')[0].click();
    } else {
        //error
        console.log("error");
    };
};

window.updateGiangVien = async () => {
    const giangvien = layThongTinGiangVien();

    const result = await api.callApi(`hocvien/${giangvien.id}`, "PUT",giangvien);
    
    if ( result.status === 200 ) {
        //success
        getListGiangVien();
        document.getElementsByClassName('close-GiangVien')[0].click();
    } else {
        //error
        console.log("error");
    };
};

window.updateKhachHang = async () => {
    const khachhang = layThongTinKhachHang();

    const result = await api.callApi(`hocvien/${khachhang.id}`, "PUT",khachhang);
    
    if ( result.status === 200 ) {
        //success
        getListKhachHang();
        document.getElementsByClassName('close-KhachHang')[0].click();
    } else {
        //error
        console.log("error");
    };
};