function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
    const list = document.querySelectorAll('ul.ranked-list li');

    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
    }
}

function deepestChild() {
    let divNest = 'div';
    let nodeList  = document.getElementById('grand-node').querySelectorAll(divNest);
    while (nodeList.length > 1) {
        divNest += ' div';
        nodeList  = document.getElementById('grand-node').querySelectorAll(divNest);
    };
    return nodeList[0];
}

// function deepestChild() {
//     let array = document.querySelectorAll('#grand-node div')
//     let criteriaFn = function (n) {
//         if (!(n.querySelector('div'))) {
//             return true;
//         } else {
//             return false
//         }
//     }
//
//
//     let current = array
//     let next = []
//      while (current) {
//        if (criteriaFn(current)) {
//          return current
//        }
//        if (Array.isArray(current)) {
//          for (let i = 0; i < current.length; i++) {
//            next.push(current[i])
//          }
//        }
//        current = next.shift()
//      }
//      return null
// }
