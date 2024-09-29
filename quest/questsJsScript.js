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

for (var i=0; i<9; i++) {
  CompletedQuests[i] = getCookie("completedQuests").toString().split(",")[i];
}

alert(CompletedQuests);

if (CompletedQuests[0] == "True") {
  document.getElementById("QuestOne").style.backgroundColor = "green"
    alert("ok")
}
if (CompletedQuests[1] == "True") {
  document.getElementById("QuestTwo").style.backgroundColor = "green"
}
if (CompletedQuests[2] == "True") {
  document.getElementById("QuestThree").style.backgroundColor = "green"
}

alert(getCookie("completedQuests"));

document.getElementById("CheckButton").onclick = function() {
    if (document.getElementById("InputFromQuest1").value == "Видеокарта" && CompletedQuests[0] == "False") {
      document.getElementById("VideocardImg").src = "materinskayaplata.jpg";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestOne").style.backgroundColor = "green"
      CompletedQuests[0] = "True"
    }
    if (document.getElementById("InputFromQuest1").value == "Видеокарта" && CompletedQuests[0] == "True") {
      document.getElementById("VideocardImg").src = "materinskayaplata.jpg";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestOne").style.backgroundColor = "green"
      CompletedQuests[1] = "True"
    }
}
alert(CompletedQuests)
