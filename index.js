function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString()
  }
}

function deepestChild() {
  let current = document.getElementById('grand-node').querySelectorAll('div')
  let next = []
  while (current.length > 1) {
      for (let i = 0; i < current.length, i++)  {
        next.push(current[0].querySelectorAll('div')// <div><div><div?>boo!<div><div><div>
      }
      current = next.shift()
    }

  return current
}
