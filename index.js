function getElement(selector) {
    return document.querySelector(selector)
}

var mangNumber = new mangSo()

getElement('#btnNhapSo').onclick = function () {
    var inputNumber = +getElement('#nhapSo').value

    mangNumber.addNumber(inputNumber)

    document.getElementById('spanNhapSo').innerHTML = mangNumber.arrNumber;

}

function mangSo() {
    this.arrNumber = []

    this.addNumber = function (inputNumber) {
        this.arrNumber.push(inputNumber)
    }

}

// No.1
getElement('#btnTinhTong').onclick = function () {
    var tong = 0
    for (var i = 0; i < mangNumber.arrNumber.length; i++) {
        if (mangNumber.arrNumber[i] > 0) {
            tong += mangNumber.arrNumber[i];
        }
    }
    getElement('#spanTinhTong').innerHTML = tong;
}

// No.2
getElement('#btnDemSo').onclick = function () {
    var tong = 0
    for (var i = 0; i < mangNumber.arrNumber.length; i++) {
        if (mangNumber.arrNumber[i] > 0) {
            tong += 1;
        }
    }
    getElement('#spanDemSo').innerHTML = tong;
}

// No.3
getElement('#btnMin').onclick = function () {
    var min = mangNumber.arrNumber[0]
    for (var i = 0; i < mangNumber.arrNumber.length; i++) {
        if (mangNumber.arrNumber[i] < min) {
            min = mangNumber.arrNumber[i];
        }
    }
    getElement('#spanMin').innerHTML = min;
}

// No.4
getElement('#btnMinDuong').onclick = function () {
    var min = mangNumber.arrNumber[0]
    for (var i = 0; i < mangNumber.arrNumber.length; i++) {
        if (mangNumber.arrNumber[i] < min && mangNumber.arrNumber[i] > 0) {
            min = mangNumber.arrNumber[i];
        }
    }
    getElement('#spanMinDuong').innerHTML = min;
}

// No.5
getElement('#btnsoChan').onclick = function () {
    var lastNumber = 0;
    for (var i = 0; i < mangNumber.arrNumber.length; i++) {
        if (
            mangNumber.arrNumber[i] % 2 === 0
        ) {
            lastNumber = mangNumber.arrNumber[i];
        }
    }
    getElement('#spansoChan').innerHTML = lastNumber;
}

// No.6
getElement('#btnDoiCho').onclick = function () {
    var i = +getElement('#ipDoiCho1').value
    var j = +getElement('#ipDoiCho2').value
    var temp = 0

    temp = mangNumber.arrNumber[i]

    mangNumber.arrNumber[i] = mangNumber.arrNumber[j]

    mangNumber.arrNumber[j] = temp

    getElement('#spanDoiCho').innerHTML = mangNumber.arrNumber;
}

// No.7
getElement('#btnTangDan').onclick = function () {

    mangNumber.arrNumber.sort(function (a, b) {

        return a - b;
    })
    getElement('#spanTangDan').innerHTML = mangNumber.arrNumber;
}

// No.8
getElement('#btnNguyenTo').onclick = function () {
    function KtraSoNT(n) {
        //flag = 0 không phải số nguyên tố
        //flag = 1 số nguyên tố

        var flag = 1

        if (n < 2) return flag = 0

        var i = 2
        while (i < n) {
            if (n % i == 0) {
                flag = 0
                break
            }
            i++
        }
        return flag
    }
    for (var i = 0; i < mangNumber.arrNumber.length; i++) {
        if (KtraSoNT(mangNumber.arrNumber[i]) == 1) {
            break
        }
    }
    getElement('#spanNguyenTo').innerHTML = mangNumber.arrNumber[i];
    
}

// No.9
var mangRealNumber = new mangSoThuc()

getElement('#btnNhapSoThuc').onclick = function () {
    var inputRealNumber = +getElement('#nhapSoThuc').value

    mangRealNumber.addRealNumber(inputRealNumber)

    document.getElementById('spanNhapSoThuc').innerHTML = mangRealNumber.arrRealNumber;

}
function mangSoThuc() {
    this.arrRealNumber = []

    this.addRealNumber = function (inputRealNumber) {
        this.arrRealNumber.push(inputRealNumber)
    }

}

getElement('#btnDemSoNguyen').onclick = function () {
    function checkSoNguyen(n){
        //flag = 1 số nguyên
        //flag = 0 số thực
    
        var flag = 1;
        if (Number.isInteger(n) == false) flag = 0;
        return flag;
    }

    var count = 0
    for(var i = 0; i < mangRealNumber.arrRealNumber.length; i++){
        check = checkSoNguyen(mangRealNumber.arrRealNumber[i]);
        if( check == 1 ) {
            count++
           
        }
    }
    getElement('#spanDemSoNguyen').innerHTML = count;
    
}


// No.10
getElement('#btnSoSanh').onclick = function () {
    function checkSo (n) {
        var flag = 0
        if (n > 0) {
            flag = 1
        } else if (n < 0) {
            flag = -1
        }
        return flag

    }
     
    var soAm = 0
    var soDuong = 0
    var result = 0
    

    for (var i = 0; i < mangNumber.arrNumber.length; i++) {
        var check = checkSo(mangNumber.arrNumber[i])

        if (check === 1) {
            soDuong++
        } else if (check === -1) {
            soAm++
        }
    }
    if (soDuong == soAm) {
        result = "Số Dương = Số Âm"
    }else if (soDuong > soAm) {
        result = "Số Dương > Số Âm"
    } else {
        result = "Số Dương < Số Âm"
    }

    getElement('#spanSoSanh').innerHTML = result;

}













