function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankyBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toSting()
  }
}


function deepestChild() {
  
}