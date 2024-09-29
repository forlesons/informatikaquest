var CompletedQuests = new Array();

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
  

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

try {
  getCookie("completedQuests")
} catch(a) {
  document.cookie = "completedQuests=False,False,False,False,False,False,False,False,False; expires=Tue, 18 Dec 2024 12:00:00 UTC; path=/";
}

alert(getCookie("completedQuests").split(","));

CompletedQuests[0] = getCookie("completedQuests").split(",")[0];

if CompletedQuests[0] == "True") {
  document.getElementById("QuestOne").style.backgroundColor = "green"
  //CompletedQuests = "1";
    alert("ok")
}
if (getCookie("CompletedQuests") == "1,2") {
  document.getElementById("QuestOne").style.backgroundColor = "green"
  document.getElementById("QuestTwo").style.backgroundColor = "green"
  CompletedQuests = "1,2";
}
if (getCookie("CompletedQuests") == "1,2,3") {
  document.getElementById("QuestOne").style.backgroundColor = "green"
  document.getElementById("QuestTwo").style.backgroundColor = "green"
  document.getElementById("QuestThree").style.backgroundColor = "green"
  CompletedQuests = "1,2,3";
}

alert(getCookie("completedQuests"));

document.getElementById("CheckButton").onclick = function() {
    if (document.getElementById("InputFromQuest1").value == "Видеокарта" && CompletedQuests == "") {
      document.getElementById("VideocardImg").src = "materinskayaplata.jpg";
      setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestOne").style.backgroundColor = "green"
      CompletedQuests[0] = "True"
    }
}
alert(CompletedQuests)
