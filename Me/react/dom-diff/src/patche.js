import { render } from "./element";

let allPatches;
let index = 0;
function patch(node, patches) {
  allPatches= patches;
  console.log(node);

  work(node);
}

function work(node) {
  let currentPatch = allPatches[index++];
  let childNodes = node.childNodes;
  childNodes.forEach(child => work(child));
  if (currentPatch && currentPatch.length > 0) {
    doPatch(node, currentPatch)
  }
}

function doPatch(node, patches) {
  patches.forEach(patche => {
    switch (patche.type) {
      case 'ATTRS':
        break
      case 'TEXT':
        node.textContent = patche.text
        break
      case 'REPLACE':
        let newNode = (patches.newNode instanceof Element) ? 
        render(patche,newNode) : document.createTextNode(patche.newNode)
        node.parentNode.replaceChild(newNode, node)
        break
      case 'REMOVE':
        break
      default:
        break;
    }
  })
}

export default patch;

