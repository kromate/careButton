import { bodyView } from './frame/view'
import { bodyStyle } from './frame/style'

export const initButton = (
  { color = 'rgb(55, 131, 55)',
    bgColor = 'darkBlue',
    scriptURL = 'https://script.google.com/macros/s/AKfycbwNddRBf6fJHnual0bmKRm6ExEHf6520FRv_2t66FO28tUBj4AiZlkr0lk2-p3iDAmf8g/exec',
    openIcon = '<rect x="0.900146" y="4.5" width="22.2" height="15" rx="1.5" stroke="currentColor" stroke-width="1.8"/> < path d="M22.5 5.25L12.8719 12.1272C12.3503 12.4998 11.6497 12.4998 11.1281 12.1272L1.5 5.25" stroke="currentColor" stroke- width= "1.5" />',
    closeIcon = ' < path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="currentColor" stroke- width= "1.5" stroke-miterlimit="10" stroke - linecap="round" stroke - linejoin="round" /> å',
    title = 'Company Title',
    desc = 'Description text goes here'
  }) => {


  loaded()



  function functionality() {
    document.querySelector('.closebtn').addEventListener('click', () => {
      document.getElementById('c123').innerHTML = openIcon
      document.getElementById('box123').style.display = 'none'
      document.getElementById('b123').classList.add('animateB123')
    })
    document.getElementById('b123').addEventListener('click', () => {
      let box = document.getElementById('box123').style.display
      if (box == 'block') {
        document.getElementById('c123').innerHTML = openIcon
        document.getElementById('box123').style.display = 'none'
        document.getElementById('b123').classList.add('animateB123')
      } else {
        document.getElementById('c123').innerHTML = closeIcon
        document.getElementById('box123').style.display = 'block'
        document.getElementById('b123').classList.remove('animateB123')
      }

    })

    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
      e.preventDefault()
      let sendBtn = document.querySelector('#SUB123') as HTMLButtonElement
      sendBtn.disabled = true;
      sendBtn.innerHTML = 'Sending...'
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { formSubmit() })
        .catch(error => formError())
    })

    const formSubmit = function () {
      form.innerHTML = `
                      <h3>Form Submitted</h3>
              <button onclick='showForm()' class='shrrr'>Send Another</button>
        `
    }
    const formError = function () {
      form.innerHTML = `
                      <h3>An Error Occurred <br> please send again</h3>
              <button onclick='showForm()' class='shrrr'>Retry</button>
        `
    }

    var showForm = function () {
      form.innerHTML = `
                       <div class="v123"></div>
         <input type="text" placeholder="* Name" name="Product" value='KT' style='visibility: hidden; height:0px; padding:0px'> 
        <input type="text" placeholder="* Name" name="Name" required>

        <div class="v123"></div>
        <input type="email" placeholder="* Email" name="Email" required>

        <div class="v123"></div>
        <textarea id="" name="Message" placeholder="* Message" rows="8" required></textarea>

        <button id="SUB123" class="shrrr">Submit </button>
        `
    }

  }

  function loaded() {
    let head = document.querySelector('head')
    let body = document.querySelector('body')
    let style = document.createElement('style')
    let frame = document.createElement('iframe')
    let idoc = frame.contentDocument
    let contentBody = document.createElement('div')
    contentBody.className = 'body123'

    style.innerHTML = bodyStyle(bgColor)
    contentBody.innerHTML = bodyView(title, desc)


    head.appendChild(style)
    body.appendChild(contentBody)
    frame.srcdoc = bodyView(title, desc)
    console.log(frame.contentDocument);
    body.appendChild(frame)
    functionality()

  }

}



initButton({
  bgColor: 'black',
  title: 'Passion Project',
  desc: 'This is part of my passion project series'
})