const city = document.querySelector('#city');
const json = {
  "city1": "Минск",
  "city2": "Гомель",
  "city3": "Могилев",
  "city4": "Витебск",
  "city5": "Гродно",
  "city6": "Брест",
  "city7": "Барановичи",
  "city8": "Мозырь",
  "city9": "Солигорск",
  "city10": "Жлобин",
  "city11": "Жодино",
  "city12": "Горки",
  "city13": "Ивацевичи",
  "city14": "Добруш",
  "city15": "Шклов",
  "city16": "Смолевичи",
  "city17": "Минусинск",
  "city18": "Назарово",
  "city19": "Норильск",
  "city20": "Сосновоборск",
  "city21": "Ужур",
  "city22": "Уяр",
  "city23": "Шарыпово",
}

html = "";
for(let key in json) {
    html += "<option value=" + key  + ">" +json[key] + "</option>"
}
city.innerHTML = html;
