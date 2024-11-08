const companySelect = document.getElementById("companySelect");
    const companyAddress = document.getElementById("companyAddress");
    const companyTaxID = document.getElementById("companyTaxID");
    const companyPhone = document.getElementById("companyPhone"); 

    companySelect.addEventListener("change", function () {
        const selectedValue = companySelect.value;
        if (selectedValue === "宜蘭分公司") {
            companyAddress.textContent = "新北市新店區中興路二段196號2樓";
            companyTaxID.textContent = "50989698";
            companyPhone.textContent = "02-86658227";
        } else if (selectedValue === "台北天母分公司") {
            companyAddress.textContent = "台北市士林區基河路34號1樓";
            companyTaxID.textContent = "77055404";
            companyPhone.textContent = "02-77557548";
        } else if (selectedValue === "台中西屯分公司") {
            companyAddress.textContent = "台中市西屯區台灣大道四段946號";
            companyTaxID.textContent = "91096861";
            companyPhone.textContent = "04-24637797";
        } else if (selectedValue === "彰化中華分公司") {
            companyAddress.textContent = "彰化縣彰化市中華路162號";
            companyTaxID.textContent = "83054348";
            companyPhone.textContent = "04-7227717";
        } else if (selectedValue === "彰化員林分公司") {
            companyAddress.textContent = "彰化縣員林市莒光路265號1樓";
            companyTaxID.textContent = "90674322";
            companyPhone.textContent = "04-7055028";
        } else if (selectedValue === "雲林北港分公司") {
            companyAddress.textContent = "雲林縣北港鎮文化路103號";
            companyTaxID.textContent = "90376718";
            companyPhone.textContent = "05-7709636";
        } else if (selectedValue === "雲林斗六分公司") {
            companyAddress.textContent = "雲林縣斗六市大學路3段245號";
            companyTaxID.textContent = "90778522";
            companyPhone.textContent = "05-5362300";
        } else if (selectedValue === "宜蘭宜大分公司") {
            companyAddress.textContent = "宜蘭縣宜蘭市復興路27號1樓";
            companyTaxID.textContent = "90576125";
            companyPhone.textContent = "03-9103118";
        } else if (selectedValue === "羅東分公司") {
            companyAddress.textContent = "宜蘭縣羅東鎮中正南路125號";
            companyTaxID.textContent = "82892275";
            companyPhone.textContent = "03-9563900";
        } else if (selectedValue === "花蓮中山分公司") {
            companyAddress.textContent = "花蓮縣花蓮市中山路377號";
            companyTaxID.textContent = "83632002";
            companyPhone.textContent = "03-8310050";
        } else if (selectedValue === "台東寶桑分公司") {
            companyAddress.textContent = "台東縣台東市中華路一段277號1樓";
            companyTaxID.textContent = "90568477";
            companyPhone.textContent = "08-9717008";
        } else if (selectedValue === "高雄博愛分公司") {
            companyAddress.textContent = "高雄市三民區博愛一路147號";
            companyTaxID.textContent = "83688856";
            companyPhone.textContent = "07-3223637";
        } else if (selectedValue === "高雄左營分公司") {
            companyAddress.textContent = "高雄市左營區自由三路386號";
            companyTaxID.textContent = "90200253";
            companyPhone.textContent = "07-9753675";
        } else if (selectedValue === "高雄五甲分公司") {
            companyAddress.textContent = "高雄市鳳山區五甲三路148號";
            companyTaxID.textContent = "83053283";
            companyPhone.textContent = "07-8415667";
        } else if (selectedValue === "台中中清分公司") {
            companyAddress.textContent = "台中市北區中清路一段125號1樓";
            companyTaxID.textContent = "83511176";
            companyPhone.textContent = "04-22034132";
        } else if (selectedValue === "屏東中央分公司") {
            companyAddress.textContent = "屏東縣屏東市民生路337號";
            companyTaxID.textContent = "94059989";
            companyPhone.textContent = "08-8203380";
        } else if (selectedValue === "澎湖馬公分公司") {
            companyAddress.textContent = "澎湖縣馬公市中正路5號";
            companyTaxID.textContent = "94210839";
            companyPhone.textContent = "06-9266822";
        } else if (selectedValue === "新北中和分公司") {
            companyAddress.textContent = "新北市中和區中正路23號";
            companyTaxID.textContent = "90801050";
            companyPhone.textContent = "02-22428280";
        } else if (selectedValue === "台中沙鹿分公司") {
            companyAddress.textContent = "台中市沙鹿區鎮南路二段622號";
            companyTaxID.textContent = "90583863";
            companyPhone.textContent = "04-37079380";
        } else if (selectedValue === "嘉義東區分公司") {
            companyAddress.textContent = "嘉義市東區中山路224號1樓";
            companyTaxID.textContent = "93489770";
            companyPhone.textContent = "05-3204020";
        } else if (selectedValue === "新竹竹北分公司") {
            companyAddress.textContent = "新竹縣竹北市文信路237號2樓";
            companyTaxID.textContent = "94225093";
            companyPhone.textContent = "03-6221339";
        } else if (selectedValue === "新北淡水分公司") {
            companyAddress.textContent = "新北市淡水區中正東路73號1樓";
            companyTaxID.textContent = "93511528";
            companyPhone.textContent = "02-77306212";
        } else if (selectedValue === "林口分公司") {
            companyAddress.textContent = "新北市林口區仁愛路一段356號";
            companyTaxID.textContent = "50989698";
            companyPhone.textContent = "02-77298460";
        } else if (selectedValue === "基隆仁愛分公司") {
            companyAddress.textContent = "基隆市仁愛區愛三路87號3樓之7";
            companyTaxID.textContent = "91081109";
            companyPhone.textContent = "02-24262100";
        } else if (selectedValue === "苗栗頭份分公司") {
            companyAddress.textContent = "苗栗縣頭份市自強路126號";
            companyTaxID.textContent = "90584151";
            companyPhone.textContent = "037-774110";
        } else if (selectedValue === "台中豐原分公司") {
            companyAddress.textContent = "臺中市豐原區中正路430號";
            companyTaxID.textContent = "90002872";
            companyPhone.textContent = "04-37027596";
        } else {
            companyAddress.textContent = "";
            companyTaxID.textContent = "";
            companyPhone.textContent = "";
        }
    });
