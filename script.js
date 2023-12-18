//CONTS
const monthlyTbl = document.getElementById('month-table');
const factorDate = document.getElementById('factor-date');
const cusNameLbl = document.getElementById('cus-name');
const productList = document.getElementById('product-list');
const productNum = document.getElementById('product-count');
const prodBtn = document.getElementById('prod-btn');
const productsTxtArea = document.getElementById('products');
const eshantionTxtArea = document.getElementById('eshantion');
const percentageNum = document.getElementById('percentage');
const payCasheNum = document.getElementById('pay-cashe');
const payTypeTxtArea = document.getElementById('pay-type');
const payBtn = document.getElementById('pay-btn');
const paymentTxtArea = document.getElementById('payment');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function (e) {
    const factorTr = document.createElement("tr")
    const dateTd = document.createElement("td")
    const dateNode = document.createTextNode(factorDate.value.slice(5))
    const cusNameTd = document.createElement("td")
    const cusNameNode = document.createTextNode(cusNameLbl.value)


    dateTd.appendChild(dateNode)
    factorTr.appendChild(dateTd)
    cusNameTd.appendChild(cusNameNode)
    factorTr.appendChild(cusNameTd)
    
    const inputElements = document.querySelectorAll('input');
    const inputReqElements = document.querySelectorAll('.req');
    let allInputsValid = true;
    inputReqElements.forEach(function (input) {
        if (!validateInput(input)) {
            allInputsValid = false;
        }
    });
    if (!allInputsValid) {
        e.preventDefault();
        alert('لطفا همه فیلدهای اجباری را پر کنید');
    } else {
        monthlyTbl.appendChild(factorTr)
        alert('فرم با موفقیت ثبت شد');
    }
    inputElements.forEach(function (input) {
        input.value = '';
    });
});

function validateInput(inputElement) {
    return inputElement.value.trim() !== '';
}
