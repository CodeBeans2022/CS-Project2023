function openTab(event, tabName) {
    let i;
    let tabcontent;
    let tabbtns;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabbtns = document.getElementsByClassName('tabbtns');
    for(i = 0; i < tabbtns.length; i++) {
        tabbtns[i].className = tabbtns[i].className.replace('active', '');
    }
document.getElementById(tabName).style.display = "block";
event.currentTarget.className += 'active';

}