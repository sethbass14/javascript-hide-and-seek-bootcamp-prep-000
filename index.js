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


// function deepestChild() {
//   let grand = document.querySelector('#grand-node').querySelectorAll('div')
//   let grandArr = [...grand]
//   return grandArr.pop()
// }

// Take a look at this
// function deepestChild() {
//   let grand = document.querySelectorAll('div#grand-node')
//   // let grandArr = [...grand]
//   let current = grand
//   let next = []
//   while (current.length >= 1) {
//     for (let i = 0; i < current.length; i++){
//         console.log(current[i].querySelectorAll('div'))
//         next.push(current[i].querySelectorAll('div'))
//         current = next.shift()
//     }
//
//   }
//   return current[0]
// }

function deepestChild() {
  let grand = document.getElementById('app').querySelectorAll('div#grand-node div')
  let grandArr = [...grand]
  return grandArr.pop()
  // console.log(grand)
  // let myArr = [].concat.apply([], grand)
  // console.log(myArr)
  // console.log(myArr[myArr.length - 1])
  // return myArr[myArr.length - 1]
}
