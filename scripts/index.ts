import { bodyView } from '../frame/view'
import { bodyStyle } from '../frame/style'


   let iframe = document.createElement('iframe')
// iframe.setAttribute('style', 'position: absolute !important; opacity: 1 !important; width: 380px !important; height: 600px !important; top: 0 !important; left: 0 !important; border: none !important; display: block !important; z-index: -1 !important;'); 
 
iframe.setAttribute('src', '../iframe_src.html')
document.body.appendChild(iframe); 
console.log(iframe.style);