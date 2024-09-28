function ani() {
    document.getElementById('StartQuest').className = 'EndStartQuest';
    document.getElementById('Div1').className = 'EndDiv1';
    document.getElementById('Mainh1').className = 'EndMainh1';
    document.getElementById('Creatorh2').className = 'EndCreatorh2';
    document.getElementById('ImgInformatika').className = 'EndImgInformatika';
    setTimeout(function(){ window.location.replace("quest.html");},2100);
}