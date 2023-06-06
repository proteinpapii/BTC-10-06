function getElement(selector) {
    return document.querySelector(selector)
}

var mangNumber = new mangSo ()

getElement('#btnNhapSo').onclick = function () {
    var inputNumber = +getElement('#nhapSo').value

    mangNumber.addNumber(inputNumber)
    
    document.getElementById('spanNhapSo').innerHTML = mangNumber.arrNumber;
    
}

function mangSo () {
    this.arrNumber = []

    this.addNumber = function (inputNumber) {
        this.arrNumber.push(inputNumber)
    }
    
}

// No.1
getElement('#btnTinhTong').onclick = function () {
    var tong = 0
    for (var i = 0; i < mangNumber.arrNumber.length; i++){
        if (mangNumber.arrNumber[i] > 0) {
            tong += mangNumber.arrNumber[i];
        }
    }
   
    document.getElementById('spanTinhTong').innerHTML = tong;
}

// No.2
getElement('#btnDemSo').onclick = function () {
    var tong = 0
    for (var i = 0; i < mangNumber.arrNumber.length; i++){
        if (mangNumber.arrNumber[i] > 0) {
            tong += 1;
        }
    }
   
    document.getElementById('spanDemSo').innerHTML = tong;
}

// No.3
getElement('#btnMin').onclick = function () {
    var min = mangNumber.arrNumber[0]
    for (var i = 0; i < mangNumber.arrNumber.length; i++){
        if (mangNumber.arrNumber[i] < min) {
            min = mangNumber.arrNumber[i];
        }
    }
   
    document.getElementById('spanMin').innerHTML = min;
}

// No.4
getElement('#btnMinDuong').onclick = function () {
    var min = mangNumber.arrNumber[0]
    for (var i = 0; i < mangNumber.arrNumber.length; i++){
        if (mangNumber.arrNumber[i] < min && mangNumber.arrNumber[i] > 0) {
            min = mangNumber.arrNumber[i];
        }
    }
   
    document.getElementById('spanMinDuong').innerHTML = min;
}





