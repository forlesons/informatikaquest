 var CompletedQuests = new Array("False","False","False","False","False","False","False","False","False");

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
  for (var i=0; i<9; i++) {
  CompletedQuests[i] = getCookie("completedQuests").toString().split(",")[i];
  }
} catch(a) {
  document.cookie = "completedQuests=False,False,False,False,False,False,False,False,False; expires=Tue, 18 Dec 2024 12:00:00 UTC; path=/";
}
//var CompletedQuests = new Array("False","False","False","False","False","False","False","False","False");
try {
  for (var i=0; i<9; i++) {
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
    document.getElementById("VideocardImg").src = "quest/Site.html.png";
}
if (CompletedQuests[3] == "True") {
  document.getElementById("QuestFo").style.backgroundColor = "green"
    document.getElementById("VideocardImg").src = "quest/Quests.txt.png";
}
if (CompletedQuests[4] == "True") {
  document.getElementById("QuestFive").style.backgroundColor = "green"
    document.getElementById("VideocardImg").src = "quest/directories.png";
}
if (CompletedQuests[5] == "True") {
  document.getElementById("QuestSix").style.backgroundColor = "green"
    document.getElementById("VideocardImg").src = "quest/adobePhotoshop.png";
}
if (CompletedQuests[6] == "True") {
  document.getElementById("QuestSeven").style.backgroundColor = "green"
    document.getElementById("VideocardImg").src = "quest/win.png";
}
if (CompletedQuests[7] == "True") {
  document.getElementById("QuestEight").style.backgroundColor = "green"
    document.getElementById("VideocardImg").src = "quest/vsCode.png";
}
if (CompletedQuests[8] == "True") {
  document.getElementById("QuestNine").style.backgroundColor = "green"
}

alert(getCookie("completedQuests"));

document.getElementById("CheckButton").onclick = function() {
    if (document.getElementById("InputFromQuest1").value.toLowerCase() == "видеокарта" && CompletedQuests[0] == "False") {
      document.getElementById("VideocardImg").src = "quest/materinskayaplata.jpg";
        document.getElementById("h1").src = "А это что?";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestOne").style.backgroundColor = "green"
      document.getElementById("QuestTwo").style.backgroundColor = "rgb(56, 56, 56)"
        CompletedQuests[0] = "True"
    }
    if (document.getElementById("InputFromQuest1").value.toLowerCase() == "материнская плата" && CompletedQuests[1] == "False") {
      document.getElementById("VideocardImg").src = "quest/port-it_338-bjec-1000x1000.jpg";
        document.getElementById("h1").src = "Что на счёт этого?";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestTwo").style.backgroundColor = "green"
        document.getElementById("QuestThree").style.backgroundColor = "rgb(56, 56, 56)"
      CompletedQuests[1] = "True"
    }
    if (document.getElementById("InputFromQuest1").value.toLowerCase() == "процессор" && CompletedQuests[2] == "False") {
      document.getElementById("VideocardImg").src = "quest/Site.html.png";
        document.getElementById("h1").src = "Есть файл Сайт.html, что в этом файле является расширением файла?";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestThree").style.backgroundColor = "green"
    document.getElementById("QuestFo").style.backgroundColor = "rgb(56, 56, 56)"
        CompletedQuests[2] = "True"
    }
    if (document.getElementById("InputFromQuest1").value.toLowerCase() == "html" && CompletedQuests[3] == "False") {
      document.getElementById("VideocardImg").src = "quest/Quests.txt.png";
        document.getElementById("h1").src = "Тоже самое но с Задания.txt";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestFo").style.backgroundColor = "green"
      document.getElementById("QuestFive").style.backgroundColor = "rgb(56, 56, 56)"
        CompletedQuests[3] = "True"
    }
    if (document.getElementById("InputFromQuest1").value.toLowerCase() == "txt" && CompletedQuests[4] == "False") {
      document.getElementById("VideocardImg").src = "quest/directories.png";
        document.getElementById("h1").src = "Укажите путь к файлу Матеша.txt(указывать сам файл также необходимо)";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestFive").style.backgroundColor = "green"
      document.getElementById("QuestSix").style.backgroundColor = "rgb(56, 56, 56)"
        CompletedQuests[4] = "True"
    }
    if (document.getElementById("InputFromQuest1").value.toLowerCase() == "C:\дз\матеша\Матеша.txt" && CompletedQuests[5] == "False") {
      document.getElementById("VideocardImg").src = "quest/adobePhotoshop.png";
        document.getElementById("h1").src = "К какому программному обеспечению(по) относится эта программа?";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestSix").style.backgroundColor = "green"
      document.getElementById("QuestSeven").style.backgroundColor = "rgb(56, 56, 56)"
        CompletedQuests[5] = "True"
    }
    if (document.getElementById("InputFromQuest1").value.toLowerCase() == "прикладное по" && CompletedQuests[6] == "False") {
      document.getElementById("VideocardImg").src = "quest/win.png";
        document.getElementById("h1").src = "А эта к какому программному обеспечению(по) относится эта программа?";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestSeven").style.backgroundColor = "green"
      document.getElementById("QuestEight").style.backgroundColor = "rgb(56, 56, 56)"
        CompletedQuests[6] = "True"
    }
    if (document.getElementById("InputFromQuest1").value.toLowerCase() == "системное по" && CompletedQuests[7] == "False") {
      document.getElementById("VideocardImg").src = "quest/vsCode.png";
        document.getElementById("h1").src = "Ну а это к какому программному обеспечению(по) относится эта программа?";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestEight").style.backgroundColor = "green"
      document.getElementById("QuestNine").style.backgroundColor = "rgb(56, 56, 56)"
        CompletedQuests[7] = "True"
    }
    if (document.getElementById("InputFromQuest1").value.toLowerCase() == "система программирования" && CompletedQuests[8] == "False") {
      document.getElementById("VideocardImg").src = "quest/vsCode.png";
        document.getElementById("h1").src = "Молодцы, те кто не работал или много раз ошибался тот получит 2!!";
      //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
      document.getElementById("QuestNine").style.backgroundColor = "green"
      CompletedQuests[8] = "True"
    }
    var SaveQuest = "";
for (var i=0; i<9; i++) {
    if (i < 7) {
    SaveQuest += CompletedQuests[i] + ",";
    }
    if (i == 8) {
        SaveQuest += CompletedQuests[i];
    }
}

document.getElementById("QuestOne").onclick = function() {
  document.getElementById("VideocardImg").src = "quest/videocard.jpg";
  //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
  document.getElementById("QuestOne").style.backgroundColor = "rgb(56, 56, 56)"
  CompletedQuests[0] = "False"
}
document.getElementById("QuestTwo").onclick = function() {
  document.getElementById("VideocardImg").src = "quest/materinskayaplata.jpg";
  //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
  document.getElementById("QuestTwo").style.backgroundColor = "rgb(56, 56, 56)"
  CompletedQuests[1] = "False"
}
document.getElementById("QuestThree").onclick = function() {
  document.getElementById("VideocardImg").src = "quest/port-it_338-bjec-1000x1000.jpg";
  //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
  document.getElementById("QuestThree").style.backgroundColor = "rgb(56, 56, 56)"
  CompletedQuests[2] = "False"
}
document.getElementById("QuestFo").onclick = function() {
  document.getElementById("VideocardImg").src = "quest/Site.html.png";
  //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
  document.getElementById("Questone").style.backgroundColor = "rgb(56, 56, 56)"
  CompletedQuests[3] = "False"
}
document.getElementById("QuestFive").onclick = function() {
  document.getElementById("VideocardImg").src = "quest/Quests.txt.png";
  //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
  document.getElementById("QuestFive").style.backgroundColor = "rgb(56, 56, 56)"
  CompletedQuests[4] = "False"
}
document.getElementById("QuestSix").onclick = function() {
  document.getElementById("VideocardImg").src = "quest/directories.png";
  //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
  document.getElementById("QuestSix").style.backgroundColor = "rgb(56, 56, 56)"
  CompletedQuests[5] = "False"
}
document.getElementById("QuestSeven").onclick = function() {
  document.getElementById("VideocardImg").src = "quest/adobePhotoshop.png";
  //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
  document.getElementById("QuestSeven").style.backgroundColor = "rgb(56, 56, 56)"
  CompletedQuests[6] = "False"
}
document.getElementById("QuestEight").onclick = function() {
  document.getElementById("VideocardImg").src = "quest/win.png";
  //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
  document.getElementById("QuestEight").style.backgroundColor = "rgb(56, 56, 56)"
  CompletedQuests[7] = "False"
}
document.getElementById("QuestNine").onclick = function() {
  document.getElementById("VideocardImg").src = "quest/vsCode.png";
  //setCookie('completedQuests', 'True,False,False,False,False,False,False,False,False', {secure: true, 'max-age': 3600})
  document.getElementById("QuestNine").style.backgroundColor = "rgb(56, 56, 56)"
  CompletedQuests[8] = "False"
}

alert(SaveQuest)
    setCookie('completedQuests', SaveQuest.replace("undefined", ""), {secure: true, 'max-age': 3600})
}
alert(CompletedQuests)
