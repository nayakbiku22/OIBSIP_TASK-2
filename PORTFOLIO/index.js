const tabLinks=document.getElementsByClassName('skill')
console.log(tabLinks)
const tabContents=document.getElementsByClassName('contains')
console.log(tabContents)
function opentab(tab){
    for(i of tabLinks){
        i.classList.remove('s')
    }
    for(j of tabContents){
        j.classList.remove('active')
    }
    event.currentTarget.classList.add('s')
    document.getElementById(tab).classList.add('active')
}