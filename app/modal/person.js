// Lớp Person
class Person {
    constructor(id,name, address, email) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
    }
}

// Lớp Student kế thừa từ lớp Person
class Student extends Person {
    constructor(id,name, address, email, math, physics, chemistry,type) {
        super(id,name, address, email);
        this.toan = math;
        this.ly = physics;
        this.hoa = chemistry;
        this.type = type;
        this.dtb = 0;
    }

    calculateAverage() {
        this.dtb = ((Number(this.toan) + Number(this.ly) + Number(this.hoa)) / 3).toFixed(0);
        return this.dtb;
    }
}

// Lớp Employee kế thừa từ lớp Person
class Employee extends Person {
    constructor(id,name, address, email, workDays, dailySalary,type) {
        super(id,name, address,email);
        this.soNgayLam = workDays;
        this.luongNgay = dailySalary;
        this.sumSalary = 0;
        this.type = type;
    }

    calculateSalary() {
        this.sumSalary = Number(this.soNgayLam * this.luongNgay);
        return this.sumSalary;
    }
}

// Lớp Customer kế thừa từ lớp Person
class Customer extends Person {
    constructor(id,name, address, email, companyName, invoiceValue, rating,type) {
        super(id,name, address, email);
        this.tenCty = companyName;
        this.hoaDon = invoiceValue;
        this.danhGia = rating;
        this.type = type;
    }
}

export {Person,Student,Employee,Customer};
