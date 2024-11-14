const companySelect = document.getElementById("companySelect");
const companyAddress = document.getElementById("companyAddress");
const companyTaxID = document.getElementById("companyTaxID");
const companyPhone = document.getElementById("companyPhone");

// 定義分公司資料清單
const companyData = {
    "宜蘭分公司": { address: "新北市新店區中興路二段196號2樓", taxID: "50989698", phone: "02-86658227" },
    "台北天母分公司": { address: "台北市士林區基河路34號1樓", taxID: "77055404", phone: "02-77557548" },
    "台中西屯分公司": { address: "台中市西屯區台灣大道四段946號", taxID: "91096861", phone: "04-24637797" },
    "彰化中華分公司": { address: "彰化縣彰化市中華路162號", taxID: "83054348", phone: "04-7227717" },
    "彰化員林分公司": { address: "彰化縣員林市莒光路265號1樓", taxID: "90674322", phone: "04-7055028" },
    "雲林北港分公司": { address: "雲林縣北港鎮文化路103號", taxID: "90376718", phone: "05-7709636" },
    "雲林斗六分公司": { address: "雲林縣斗六市大學路3段245號", taxID: "90778522", phone: "05-5362300" },
    "宜蘭宜大分公司": { address: "宜蘭縣宜蘭市復興路27號1樓", taxID: "90576125", phone: "03-9103118" },
    "羅東分公司": { address: "宜蘭縣羅東鎮中正南路125號", taxID: "82892275", phone: "03-9563900" },
    "花蓮中山分公司": { address: "花蓮縣花蓮市中山路377號", taxID: "83632002", phone: "03-8310050" },
    "台東寶桑分公司": { address: "台東縣台東市中華路一段277號1樓", taxID: "90568477", phone: "08-9717008" },
    "高雄博愛分公司": { address: "高雄市三民區博愛一路147號", taxID: "83688856", phone: "07-3223637" },
    "高雄左營分公司": { address: "高雄市左營區自由三路386號", taxID: "90200253", phone: "07-9753675" },
    "高雄五甲分公司": { address: "高雄市鳳山區五甲三路148號", taxID: "83053283", phone: "07-8415667" },
    "台中中清分公司": { address: "台中市北區中清路一段125號1樓", taxID: "83511176", phone: "04-22034132" },
    "屏東中央分公司": { address: "屏東縣屏東市民生路337號", taxID: "94059989", phone: "08-8203380" },
    "澎湖馬公分公司": { address: "澎湖縣馬公市中正路5號", taxID: "94210839", phone: "06-9266822" },
    "新北中和分公司": { address: "新北市中和區中正路23號", taxID: "90801050", phone: "02-22428280" },
    "台中沙鹿分公司": { address: "台中市沙鹿區鎮南路二段622號", taxID: "90583863", phone: "04-37079380" },
    "嘉義東區分公司": { address: "嘉義市東區中山路224號1樓", taxID: "93489770", phone: "05-3204020" },
    "新竹竹北分公司": { address: "新竹縣竹北市文信路237號2樓", taxID: "94225093", phone: "03-6221339" },
    "新北淡水分公司": { address: "新北市淡水區中正東路73號1樓", taxID: "93511528", phone: "02-77306212" },
    "林口分公司": { address: "新北市林口區仁愛路一段356號", taxID: "50989698", phone: "02-77298460" },
    "基隆仁愛分公司": { address: "基隆市仁愛區愛三路87號3樓之7", taxID: "91081109", phone: "02-24262100" },
    "苗栗頭份分公司": { address: "苗栗縣頭份市自強路126號", taxID: "90584151", phone: "037-774110" },
    "台中豐原分公司": { address: "臺中市豐原區中正路430號", taxID: "90002872", phone: "04-37027596" }
};

// 當選擇改變時更新顯示的分公司資訊
companySelect.addEventListener("change", function () {
    const selectedValue = companySelect.value;
    const data = companyData[selectedValue];

    if (data) {
        companyAddress.textContent = data.address;
        companyTaxID.textContent = data.taxID;
        companyPhone.textContent = data.phone;
    } else {
        companyAddress.textContent = "";
        companyTaxID.textContent = "";
        companyPhone.textContent = "";
    }
});
