import Api from '../services/api.js';
import Validation from '../validation/Validation.js';
import { Person, Student, Employee, Customer } from '../modal/person.js';
const api = new Api();
const validation = new Validation();

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



    /**
     * Validation
     */
    var isValid = true;

    //Validation TenSV
    isValid &= validation.kiemTraRong(name, "errorNameHS", "(*) Vui Lòng Nhập Trường Này!") &&
        validation.kiemTraChuoiKiTu(name, "errorNameHS", "(*) Vui lòng nhập chuỗi ký tự!");

    //Validation Email
    isValid &= validation.kiemTraRong(email, "errorEmailHS", "(*) Vui Lòng Nhập Trường Này!") &&
        validation.kiemTraPattern(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "errorEmailHS", "(*) Vui lòng nhập trường Email hợp lệ!");

    //Validation địa chỉ
    isValid &= validation.kiemTraRong(address, "errorAddressHS", "(*) Vui Lòng Nhập Trường Này!");

    //Validation Toan
    isValid &= validation.kiemTraRong(toan, "errorToan", "(*) Vui lòng nhập trường này!")
        && validation.kiemTraPattern(toan, /^[0-9]+$/, "errorToan", "(*) Vui lòng nhập kiểu dữ liệu Number");

    //Validation Ly
    isValid &= validation.kiemTraRong(ly, "errorLy", "(*) Vui Lòng Nhập Trường Này!")
        && validation.kiemTraPattern(ly, /^[0-9]+$/, "errorLy", "(*) Vui lòng nhập kiểu dữ liệu Number");

    //Validation Hoa
    isValid &= validation.kiemTraRong(hoa, "errorHoa", "(*) Vui Lòng Nhập Trường Này!")
        && validation.kiemTraPattern(hoa, /^[0-9]+$/, "errorHoa", "(*) Vui lòng nhập kiểu dữ liệu Number");

    if (!isValid) return null;


    const hocsinh = new Student(id, name, address, email, toan, ly, hoa, type);
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

    /**
 * Validation
 */
    var isValid = true;

    //Validation TenSV
    isValid &= validation.kiemTraRong(name, "errorNameGV", "(*) Vui Lòng Nhập Trường Này!") &&
        validation.kiemTraChuoiKiTu(name, "errorNameGV", "(*) Vui lòng nhập chuỗi ký tự!");

    //Validation Email
    isValid &= validation.kiemTraRong(email, "errorEmailGV", "(*) Vui Lòng Nhập Trường Này!") &&
        validation.kiemTraPattern(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "errorEmailGV", "(*) Vui lòng nhập trường Email hợp lệ!");

    //Validation địa chỉ
    isValid &= validation.kiemTraRong(address, "errorAddressGV", "(*) Vui Lòng Nhập Trường Này!");

    //Validation Ngày làm
    isValid &= validation.kiemTraRong(soNgayLam, "errorNgayLam", "(*) Vui Lòng Nhập Trường Này!")
        && validation.kiemTraPattern(soNgayLam, /^[0-9]+$/, "errorNgayLam", "(*) Vui lòng nhập kiểu dữ liệu Number");

    isValid &= validation.kiemTraRong(luongNgay, "errorLuongNgay", "(*) Vui Lòng Nhập Trường Này!")
        && validation.kiemTraPattern(luongNgay, /^[0-9]+$/, "errorLuongNgay", "(*) Vui lòng nhập kiểu dữ liệu Number");

    if (!isValid) return null;

    const giangvien = new Employee(id, name, address, email, soNgayLam, luongNgay, type);
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


    /**
* Validation
*/
    var isValid = true;

    //Validation Ten Khach Hang
    isValid &= validation.kiemTraRong(name, "errorNameKH", "(*) Vui Lòng Nhập Trường Này!") &&
        validation.kiemTraChuoiKiTu(name, "errorNameKH", "(*) Vui lòng nhập chuỗi ký tự!");

    //Validation Email
    isValid &= validation.kiemTraRong(email, "errorEmailKH", "(*) Vui Lòng Nhập Trường Này!") &&
        validation.kiemTraPattern(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "errorEmailKH", "(*) Vui lòng nhập trường Email hợp lệ!");

    //Validation địa chỉ
    isValid &= validation.kiemTraRong(address, "errorAddressKH", "(*) Vui Lòng Nhập Trường Này!");

    //Validation tên Cty
    isValid &= validation.kiemTraRong(tenCty, "errorTenCty", "(*) Vui Lòng Nhập Trường Này!");

    //Validation hóa đơn
    isValid &= validation.kiemTraRong(hoaDon, "errorHoaDon", "(*) Vui Lòng Nhập Trường Này!")
        && validation.kiemTraPattern(hoaDon, /^[0-9]+$/, "errorHoaDon", "(*) Vui lòng nhập kiểu dữ liệu Number");

    //Validation đánh giá
    isValid &= validation.kiemTraRong(tenCty, "errorDanhGia", "(*) Vui Lòng Nhập Trường Này!");

    if (!isValid) return null;
    const khachhang = new Customer(id, name, address, email, tenCty, hoaDon, danhGia, type);
    return khachhang;
};

//Lấy danh sách học sinh
const getListHocSinh = () => {
    let promise = api.callApi('hocvien', 'GET', null)
    promise
        .then((response) => {
            const arrHocSinh = response.data.filter((item) => item.type === 1);
            const newarrHocSinh = arrHocSinh.map((item) => {
                const hocsinh = new Student(item.id, item.name, item.address, item.email, item.toan, item.ly, item.hoa, item.type);
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
                const GiangVien = new Employee(item.id, item.name, item.address, item.email, item.soNgayLam, item.luongNgay, item.type);
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
                const KhachHang = new Customer(item.id, item.name, item.address, item.email, item.tenCty, item.hoaDon, item.danhGia, item.type);

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
    if (arr && arr.length > 0) {
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
    if (arr && arr.length > 0) {
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
    if (arr && arr.length > 0) {
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

const xapXepThuTu = (value) => {
    api.callApi('hocvien', 'GET', null)
        .then((res) => {
            const kharr = res.data.filter((item) => item.type === value);
            const arrXX = kharr.sort((a, b) => {
                const nameA = a.name.toLowerCase(); // Chuyển tên thành chữ thường để so sánh
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                    return -1; // Sắp xếp a trước b
                }
                if (nameA > nameB) {
                    return 1; // Sắp xếp b trước a
                }
                return 0; // Không cần sắp xếp
            });
            if (value === 1) {
                renderUIHocSinh(arrXX);
            } else if (value === 2) {
                renderUIGiangVien(arrXX);
            } else if (value === 3) {
                renderUIKhachHang(arrXX);
            };
        })
        .catch((error) => {
            console.log(error);
        });
};

export { getListHocSinh, renderUIHocSinh, getListGiangVien, renderUIGiangVien, getListKhachHang, renderUIKhachHang, layThongTinHocSinh, layThongTinGiangVien, layThongTinKhachHang, xapXepThuTu };