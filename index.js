// function getFirstSelector(selector) {
//   return document.querySelector(selector)
// }
//
// function nestedTarget() {
//   return document.getElementById('nested').querySelector('div.target')
// }
//
// function increaseRankBy(n) {
//   var lis = document.querySelectorAll('ul.ranked-list')
//   for (let i = 0; i < lis.length; i++) {
//     lis[i].innerHTML = (i + n).toString()
//   }
// }
//
// function deepestChild() {
//   let current = document.getElementById('grand-node').querySelectorAll('div')
//   let next = []
//   while (current.length > 1) {
//       for (let i = 0; i < current.length; i++)  {
//         next.push(current[i].querySelectorAll('div'))// <div><div><div?>boo!<div><div><div>
//       }
//       current = next.shift()
//     }
//
//   return current[0]
// }
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list li')
  let listArr = [...list]
  listArr.forEach(function (el) {
    let content = el.innerHTML
    console.log(content)
    el.innerHTML = parseInt(content) + n
  })
}


function deepestChild() {
  let grand = document.querySelectorAll('div#grand-node')
  // let grandArr = [...grand]
  // Query selector All returns a node which is an array like object. the .children method will always return an empty array like object that evaluates to truthy. But, calling length on it will return 0 which evaluates to falsey!
  let current = grand
  while (current[0].children.length) {
    current = current[0].children
    debugger
    }
  return current[0].innerHTML
}
