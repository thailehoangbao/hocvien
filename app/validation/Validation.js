const domID = function (id) {
    return document.getElementById(id);
};

function Validation() {
    this.kiemTraRong = function (value, errorId, mess) {
        if (value === "") {
            //Sai
            domID(errorId).style.display = "block";
            domID(errorId).innerHTML = mess;
            return false;
        }

        //Dung
        domID(errorId).style.display = "none";
        domID(errorId).innerHTML = "";
        return true;
    };

    this.kiemTraDoDaiKiTu = function (value, errorId, mess, min, max) {
        if (min <= value.length && value.length <= max) {
            //true
            domID(errorId).style.display = "none";
            domID(errorId).innerHTML = "";
            return true;
        }

        //false
        domID(errorId).style.display = "block";
        domID(errorId).innerHTML = mess;
        return false;
    };

    this.kiemTraChuoiKiTu = function (value, errorId, mess) {
        var letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
            //true
            domID(errorId).style.display = "none";
            domID(errorId).innerHTML = "";
            return true;
        }

        //false
        domID(errorId).style.display = "block";
        domID(errorId).innerHTML = mess;
        return false;
    };

    this.kiemTraPattern = function (value, letter, errorId, mess) {
        if (value.match(letter)) {
            //true
            domID(errorId).style.display = "none";
            domID(errorId).innerHTML = "";
            return true;
        }

        //false
        domID(errorId).style.display = "block";
        domID(errorId).innerHTML = mess;
        return false;
    };

    this.kiemTraKhoaHoc = function (idSelect, errorId, mess) {
        if (domID(idSelect).selectedIndex !== 0) {
            //true
            domID(errorId).style.display = "none";
            domID(errorId).innerHTML = "";
            return true;
        }

        //false
        domID(errorId).style.display = "block";
        domID(errorId).innerHTML = mess;
        return false;
    };
};

export default Validation;
