// 左耳與右耳資料 API URL
const apiUrl = "https://script.google.com/macros/s/AKfycbw5Cxk_KfOQaiVFvX0Ui7GCK29sYLc2py2k3WG3fhAlOkLPDVqfatDKAw879VrYLrBt/exec";

// DOM 元素
const LmodelSelect = document.getElementById("LmodelSelect");
const Lbrand = document.getElementById("Lbrand");
const LlicenseNumber = document.getElementById("LlicenseNumber");
const LsubsidyType = document.getElementById("LsubsidyType");
const LwarrantyPeriod = document.getElementById("LwarrantyPeriod");
const LbatterySpec = document.getElementById("LbatterySpec");
const LdaiInput = document.getElementById("LdaiInput");
const LrequiredSpec = document.getElementById("LrequiredSpec");
const LotherSpec = document.getElementById("LotherSpec");

const RmodelSelect = document.getElementById("RmodelSelect");
const Rbrand = document.getElementById("Rbrand");
const RlicenseNumber = document.getElementById("RlicenseNumber");
const RsubsidyType = document.getElementById("RsubsidyType");
const RwarrantyPeriod = document.getElementById("RwarrantyPeriod");
const RbatterySpec = document.getElementById("RbatterySpec");
const RdaiInput = document.getElementById("RdaiInput");
const RrequiredSpec = document.getElementById("RrequiredSpec");
const RotherSpec = document.getElementById("RotherSpec");

// 加載資料並填充下拉選單
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    populateModelSelect(LmodelSelect, data);
    populateModelSelect(RmodelSelect, data);

    LmodelSelect.addEventListener("change", () => handleModelChange(LmodelSelect.value, data, 'L'));
    RmodelSelect.addEventListener("change", () => handleModelChange(RmodelSelect.value, data, 'R'));
  })
  .catch((error) => console.error("Error fetching data:", error));

// 填充下拉選單
function populateModelSelect(selectElement, data) {
  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.modelSelect;
    option.textContent = item.modelSelect;
    selectElement.appendChild(option);
  });
}

// 處理型號改變時的行為
function handleModelChange(selectedModel, data, side) {
  const selectedItem = data.find((item) => item.modelSelect === selectedModel);

  if (!selectedItem) return;

  if (side === 'L') {
    Lbrand.value = selectedItem.brand || "";
    LlicenseNumber.value = selectedItem.licenseNumber || "";
    LsubsidyType.value = selectedItem.subsidyType || "";
    LwarrantyPeriod.value = selectedItem.warrantyPeriod || "";
    LbatterySpec.value = selectedItem.betterySpect || "";
    LdaiInput.value = selectedItem.daiInput || "";
    LrequiredSpec.value = selectedItem.requiredSpec || "";
    LotherSpec.value = selectedItem.otherSpec || "";
  } else if (side === 'R') {
    Rbrand.value = selectedItem.brand || "";
    RlicenseNumber.value = selectedItem.licenseNumber || "";
    RsubsidyType.value = selectedItem.subsidyType || "";
    RwarrantyPeriod.value = selectedItem.warrantyPeriod || "";
    RbatterySpec.value = selectedItem.betterySpect || "";
    RdaiInput.value = selectedItem.daiInput || "";
    RrequiredSpec.value = selectedItem.requiredSpec || "";
    RotherSpec.value = selectedItem.otherSpec || "";
  }
}
