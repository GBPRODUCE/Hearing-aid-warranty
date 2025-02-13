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
    "雲林虎尾分公司": { address: "雲林縣虎尾鎮光復路445號", taxID: "00046369", phone: "05-7701770" },
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
    "新北林口分公司": { address: "新北市林口區仁愛路一段356號", taxID: "50989698", phone: "02-77298460" },
    "基隆仁愛分公司": { address: "基隆市仁愛區愛三路87號3樓之7", taxID: "91081109", phone: "02-24262100" },
    "苗栗頭份分公司": { address: "苗栗縣頭份市自強路126號", taxID: "90584151", phone: "037-774110" },
    "台中豐原分公司": { address: "臺中市豐原區中正路430號", taxID: "90002872", phone: "04-37027596" },

    "新北新莊分公司": { address: "新北市新莊區中正路159之2號", taxID: "83741677", phone: "02-29946656" },
    "新北板橋分公司": { address: "新北市板橋區前西路59號", taxID: "83743302", phone: "02-89697557" },
    "新北土城分公司": { address: "新北市土城區金城路三段193號", taxID: "90576096", phone: "02-77532383" },
    "新北三重分公司": { address: "新北市三重區三和路三段48之2號", taxID: "90691286", phone: "02-29818068" },
    "新北汐止分公司": { address: "新北市汐止區大同路二段428號", taxID: "90403026", phone: "02-77538753" },
    "台北萬華分公司": { address: "台北市萬華區西園路一段254號1樓", taxID: "94226017", phone: "02-77093228" },
    "台北中正分公司": { address: "台北市中正區福州街16號之3號1樓", taxID: "83511181", phone: "02-33221110" },
    "台北復興分公司": { address: "台北市中山區復興南路一段18號", taxID: "90476408", phone: "02-77095938" },
    "台北信義分公司": { address: "台北市信義區光復南路一段469號1樓", taxID: "90213172", phone: "02-77557962" },
    "台北石牌分公司": { address: "台北市北投區石牌路一段38號", taxID: "90041642", phone: "02-77566512" },
    "台北永春分公司": { address: "台北市信義區忠孝東路五段489號", taxID: "94190783", phone: "02-77290322" },
    "台北內湖分公司": { address: "台北市內湖區文德路64號1樓", taxID: "93490039", phone: "02-77290737" },
    "經國分公司": { address: "桃園市仁愛區愛三路一段87號3樓之7", taxID: "85103251", phone: "03-3161712" },
    "桃園八德分公司": { address: "桃園市八德區中華路271號1樓", taxID: "91090352", phone: "03-3920089" },
    "桃園中壢分公司": { address: "桃園市中壢區元化路1之5號1樓", taxID: "90484553", phone: "03-4250605" },
    "新竹南門分公司": { address: "新竹市東區中華路二段570號", taxID: "83257441", phone: "03-5235565" },
    "台中大里分公司": { address: "台中市大里區國光路二段534號1樓", taxID: "90484224", phone: "04-24822640" },
    "台中南屯分公司": { address: "台中市南屯區五權西路二段179號1樓", taxID: "90583694", phone: "04-37072010" },
    "南投草屯分公司": { address: "南投縣草屯鎮太平路二段291號", taxID: "82984773", phone: "049-7005030" },
    "台南站前分公司": { address: "台南市中西區成功路27之1號", taxID: "91091367", phone: "06-7032562" },
    "台南奇美分公司": { address: "台南市中西區成功路27之1號", taxID: "91098501", phone: "" },
    "台南東門分公司": { address: "台南市東區東寧路263號1樓", taxID: "93560816", phone: "06-7034522" },
    "台南永康分公司": { address: "台南市永康區中山北路13號1樓", taxID: "91090923", phone: "06-7035705" },
    "台南安南分公司": { address: "台南市安南區安和路四段373號", taxID: "90306312", phone: "06-7007242" },
    "高雄鳳山分公司": { address: "高雄市鳳山區光遠路242之1號", taxID: "83053517", phone: "07-7105701" },
    "高雄楠梓分公司": { address: "高雄市楠梓區軍校路756號", taxID: "90584217", phone: "07-9730080" }
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
