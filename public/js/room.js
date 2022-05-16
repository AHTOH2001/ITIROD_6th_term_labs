// import { db } from './firebase.js'
// import { collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"; 

function toggle_menu() {
  var menu = document.getElementById("menu-list")
  var contacts = document.getElementsByClassName("contacts")[0]
  if (menu.style.display === "block") {
    menu.style.display = "none"
    contacts.style.margin = "0"
  } else {
    menu.style.display = "block"
    contacts.style.margin = "70% 0px 0px 0px"
  }
}

function send_message() {
  var message_container = document.getElementsByClassName("message-container")[0]
  var message = document.getElementsByClassName("message-friend")[0]
  message = message.cloneNode(true)

  var input = document.getElementById('input2')


  var message_content = message.getElementsByClassName('message')[0]
  message_content.textContent = input.value
  input.value = ''

  var message_image = message.getElementsByClassName('message-img')[0]
  message_image.setAttribute('src', './image/sticker.png')

  var message_sender = message.getElementsByClassName('message-name')[0]
  message_sender.textContent = 'You'

  var message_time = message.getElementsByClassName('message-time')[0]
  var d = new Date(Date.now())
  let time = new Intl.DateTimeFormat('en', { hour: '2-digit', minute: 'numeric', hour12: false }).format(d)
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  message_time.textContent = `${da} ${mo} ${time}`

  message_container.insertAdjacentElement('beforeend', message)

  message_container.scroll(0, message_container.scrollHeight)
  return false
}

function add_symbol(symbol) {
  var input = document.getElementById('input2')
  input.value += symbol
}
