var CompletedQuests = new Array("False","False","False","False","False","False","False","False","False",);

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
    //setCookie('completedQuests', CompletedQuests, {secure: true, 'max-age': 3600})
  for (var i=0; i<10; i++) {
  CompletedQuests[i] = getCookie("completedQuests").toString().split(",")[i];
  }
} catch(a) {
  document.cookie = "completedQuests=False,False,False,False,False,False,False,False,False; expires=Tue, 18 Dec 2024 12:00:00 UTC; path=/";
}
//var CompletedQuests = new Array("False","False","False","False","False","False","False","False","False");
try {
  for (var i=0; i<10; i++) {
  CompletedQuests[i] = getCookie("completedQuests").toString().split(",")[i];
  }
} catch(a) {
  document.cookie = "completedQuests=False,False,False,False,False,False,False,False,False; expires=Tue, 18 Dec 2024 12:00:00 UTC; path=/";
}


alert(CompletedQuests);

if (CompletedQuests[0] == "True") {
  document.getElementById("QuestOne").style.backgroundColor = "green"
    alert("ok")
    document.getElementById("VideocardImg").src = "quest/materinskayaplata.jpg";
}
if (CompletedQuests[1] == "True") {
  document.getElementById("QuestTwo").style.backgroundColor = "green"
document.getElementById("VideocardImg").src = "quest/port-it_338-bjec-1000x1000.jpg";
}
if (CompletedQuests[2] == "True") {
  document.getElementById("QuestThree").style.backgroundColor = "green"
}

alert(getCookie("completedQuests"));

document.getElementById("CheckButton").onclick = function() {
    if (document.getElementById("InputFromQuest1").value == "Видеокарта" && CompletedQuests[0] == "False") {
      document.getElementById("VideocardImg").src = "quest/materinskayaplata.jpg";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestOne").style.backgroundColor = "green"
      document.getElementById("QuestTwo").style.backgroundColor = "Black"
        CompletedQuests[0] = "True"
    }
    if (document.getElementById("InputFromQuest1").value == "Материнская плата" && CompletedQuests[1] == "False") {
      document.getElementById("VideocardImg").src = "quest/port-it_338-bjec-1000x1000.jpg";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestTwo").style.backgroundColor = "green"
        document.getElementById("QuestThree").style.backgroundColor = "Black"
      CompletedQuests[1] = "True"
    }
    if (document.getElementById("InputFromQuest1").value == "Процессор" && CompletedQuests[2] == "False") {
      document.getElementById("VideocardImg").src = "quest/port-it_338-bjec-1000x1000.jpg";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestThree").style.backgroundColor = "green"
    document.getElementById("QuestFo").style.backgroundColor = "Black"
        CompletedQuests[2] = "True"
    }
    if (document.getElementById("InputFromQuest1").value == ".html" && CompletedQuests[3] == "False") {
      //document.getElementById("VideocardImg").src = "quest/port-it_338-bjec-1000x1000.jpg";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestFo").style.backgroundColor = "green"
      document.getElementById("QuestFive").style.backgroundColor = "Black"
        CompletedQuests[3] = "True"
    }
    if (document.getElementById("InputFromQuest1").value == ".txt" && CompletedQuests[4] == "False") {
      //document.getElementById("VideocardImg").src = "quest/port-it_338-bjec-1000x1000.jpg";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestFive").style.backgroundColor = "green"
      document.getElementById("QuestSix").style.backgroundColor = "Black"
        CompletedQuests[4] = "True"
    }
    if (document.getElementById("InputFromQuest1").value == "Матеша.txt" && CompletedQuests[5] == "False") {
      //document.getElementById("VideocardImg").src = "quest/port-it_338-bjec-1000x1000.jpg";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestSix").style.backgroundColor = "green"
      document.getElementById("QuestSeven").style.backgroundColor = "Black"
        CompletedQuests[5] = "True"
    }
    if (document.getElementById("InputFromQuest1").value == "Прикладное по" && CompletedQuests[6] == "False") {
      //document.getElementById("VideocardImg").src = "quest/port-it_338-bjec-1000x1000.jpg";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestSeven").style.backgroundColor = "green"
      document.getElementById("QuestEight").style.backgroundColor = "Black"
        CompletedQuests[6] = "True"
    }
    if (document.getElementById("InputFromQuest1").value == "Системное по" && CompletedQuests[7] == "False") {
      //document.getElementById("VideocardImg").src = "quest/port-it_338-bjec-1000x1000.jpg";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestEight").style.backgroundColor = "green"
      document.getElementById("QuestNine").style.backgroundColor = "Black"
        CompletedQuests[7] = "True"
    }
    if (document.getElementById("InputFromQuest1").value == "система программирования" && CompletedQuests[8] == "False") {
      //document.getElementById("VideocardImg").src = "quest/port-it_338-bjec-1000x1000.jpg";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestNine").style.backgroundColor = "green"
      CompletedQuests[8] = "True"
    }
    var SaveQuest = "";
for (var i=0; i<10; i++) {
    if (i < 8) {
    SaveQuest += CompletedQuests[i] + ",";
    }
    if (i == 9) {
        SaveQuest += CompletedQuests[i];
    }
}
alert(SaveQuest)
    setCookie('completedQuests', SaveQuest.replace("undefined", ""), {secure: true, 'max-age': 3600})
}
alert(CompletedQuests)
