import Api from '../services/api.js';
import {Person,Student,Employee,Customer} from '../modal/person.js';
const api = new Api();

const domID = function (id) {
    return document.getElementById(id);
};
//Lay thông tin học sinh
const layThongTinHocSinh = () => {
    const id = domID('idHS').value;
    const name = domID('hoTenHS').value;
    const address = domID('addressHS').value;
    const email = domID('emailHS').value;
    const toan = domID('toan').value;
    const ly = domID('ly').value;
    const hoa = domID('hoa').value;
    const type = 1;

    const hocsinh = new Student(id,name,address,email,toan,ly,hoa,type);
    hocsinh.calculateAverage();
    return hocsinh;
};
//Lay thông tin giảng viên
const layThongTinGiangVien = () => {
    const id = domID('idGV').value;
    const name = domID('hoTenGV').value;
    const address = domID('addressGV').value;
    const email = domID('emailGV').value;
    const soNgayLam = domID('ngayLam').value;
    const luongNgay = domID('luongNgay').value;
    const type = 2;

    const giangvien = new Employee(id,name,address,email,soNgayLam,luongNgay,type);
    giangvien.calculateSalary();
    return giangvien;
};

//Lay thông tin khách hàng
const layThongTinKhachHang = () => {
    const id = domID('idKH').value;
    const name = domID('hoTenKH').value;
    const address = domID('addressKH').value;
    const email = domID('emailKH').value;
    const tenCty = domID('tenCty').value;
    const hoaDon = domID('hoaDon').value;
    const danhGia = domID('danhGia').value;
    const type = 3;

    const khachhang = new Customer(id,name,address,email,tenCty,hoaDon,danhGia,type);
    return khachhang;
};

//Lấy danh sách học sinh
const getListHocSinh = () => {
    let promise = api.callApi('hocvien', 'GET', null)
    promise
        .then((response) => {
            const arrHocSinh = response.data.filter((item) => item.type === 1);
            const newarrHocSinh = arrHocSinh.map((item)=>{
                const hocsinh = new Student(item.id,item.name,item.address,item.email,item.toan,item.ly,item.hoa,item.type);
                hocsinh.calculateAverage();

                return hocsinh;
            });
            renderUIHocSinh(newarrHocSinh);
        })
        .catch(err => {
            console.log('error: ' + err);
        })
};
//Lấy danh sách Giảng Viên
const getListGiangVien = () => {
    let promise = api.callApi('hocvien', 'GET', null)
    promise
        .then((response) => {
            const arrGiangVien = response.data.filter((item) => item.type === 2);
            const newarrGiangVien = arrGiangVien.map((item) => {
                const GiangVien = new Employee(item.id,item.name,item.address,item.email,item.soNgayLam,item.luongNgay,item.type);
                GiangVien.calculateSalary();
                
                return GiangVien;
            });
            renderUIGiangVien(newarrGiangVien);
        })
        .catch(err => {
            console.log('error: ' + err);
        })
};

//Lấy danh sách Khách Hàng
const getListKhachHang = () => {
    let promise = api.callApi('hocvien', 'GET', null)
    promise
        .then((response) => {
            const arrKhachHang = response.data.filter((item) => item.type === 3);
            const newarrKhachHang = arrKhachHang.map((item) => {
                const KhachHang = new Customer(item.id,item.name,item.address,item.email,item.tenCty,item.hoaDon,item.danhGia,item.type);
                
                return KhachHang;
            });
            renderUIKhachHang(newarrKhachHang);
        })
        .catch(err => {
            console.log('error: ' + err);
        })
};


const renderUIHocSinh = (arr) => {
    let content = ``;
    if (arr && arr.length > 0 ) {
        arr.forEach((item) => {
            content += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.address}</td>
                <td>${item.email}</td>
                <td>${item.toan}</td>
                <td>${item.ly}</td>
                <td>${item.hoa}</td>
                <td>${item.dtb}</td>
                <td>
                <button class='btn btn-danger' onclick="deleteID(${item.id})">Delete</button>
                <button class='btn btn-info' onclick='editID(${item.id})'>Edit</button>
                </td>
            </tr>
        `;
        });
    };
    document.querySelector('#tblDanhSachHocSinh').innerHTML = content;
};

const renderUIGiangVien = (arr) => {
    let content = ``;
    if (arr && arr.length >0 ) {
        arr.forEach((item) => {
            content += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.address}</td>
                <td>${item.email}</td>
                <td>${item.soNgayLam}</td>
                <td>${item.luongNgay}</td>
                <td>${item.sumSalary}</td>
                <td>
                <button class='btn btn-danger' onclick="deleteID(${item.id})">Delete</button>
                <button class='btn btn-info' onclick='editID(${item.id})'>Edit</button>
                </td>
            </tr>
        `;
        });
    };
    document.querySelector('#tblDanhSachGiangVien').innerHTML = content;
};

const renderUIKhachHang = (arr) => {
    let content = ``;
    if (arr && arr.length >0 ) {
        arr.forEach((item) => {
            content += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.address}</td>
                <td>${item.email}</td>
                <td>${item.tenCty}</td>
                <td>${item.hoaDon}</td>
                <td>${item.danhGia}</td>
                <td>
                <button class='btn btn-danger' onclick="deleteID(${item.id})">Delete</button>
                <button class='btn btn-info' onclick='editID(${item.id})'>Edit</button>
                </td>
            </tr>
        `;
        });
    };
    document.querySelector('#tblDanhSachKhachHang').innerHTML = content;
};

export {getListHocSinh,renderUIHocSinh,getListGiangVien,renderUIGiangVien,getListKhachHang,renderUIKhachHang,layThongTinHocSinh,layThongTinGiangVien,layThongTinKhachHang};