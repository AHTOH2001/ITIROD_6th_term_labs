let username = localStorage.getItem('username')
var messagesRef = db.collection("users").doc(username).collection('messages')

messagesRef.orderBy("date").get().then((querySnapshot) => {
  var message_container = document.getElementsByClassName("message-container")[0]
  var original_message = document.getElementsByClassName("message-friend")[0]
  querySnapshot.forEach((doc) => {
    data = doc.data()

    var message = original_message.cloneNode(true)

    var message_content = message.getElementsByClassName('message')[0]
    message_content.textContent = data['message']

    var message_image = message.getElementsByClassName('message-img')[0]
    message_image.setAttribute('src', data['img'])
    message_image.setAttribute('alt', data['username'])

    var message_sender = message.getElementsByClassName('message-name')[0]
    message_sender.textContent = data['username']

    var message_time = message.getElementsByClassName('message-time')[0]
    var d = new Date(data['date']['seconds'] * 1000)
    let time = new Intl.DateTimeFormat('en', { hour: '2-digit', minute: 'numeric', hour12: false }).format(d)
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
    message_time.textContent = `${da} ${mo} ${time}`

    message_container.insertAdjacentElement('beforeend', message)
  })

  message_container.scroll(0, message_container.scrollHeight)

})


function toggle_menu() {
  var menu = document.getElementById("menu-list")
  var contacts = document.getElementsByClassName("contacts")[0]
  if (menu.style.display === "block") {
    menu.style.display = "none"
    contacts.style.margin = "0"
  } else {
    menu.style.display = "block"
    contacts.style.margin = "65% 0px 0px 0px"
  }
}

function send_message() {
  var message_container = document.getElementsByClassName("message-container")[0]
  var original_message = document.getElementsByClassName("message-friend")[0]
  var message = original_message.cloneNode(true)

  var input = document.getElementById('input2')


  var message_content = message.getElementsByClassName('message')[0]
  var input_value = input.value
  message_content.textContent = input_value
  input.value = ''

  var message_image = message.getElementsByClassName('message-img')[0]
  message_image.setAttribute('src', './image/sticker.png')
  message_image.setAttribute('alt', username)

  var message_sender = message.getElementsByClassName('message-name')[0]
  message_sender.textContent = username

  var message_time = message.getElementsByClassName('message-time')[0]
  var d = new Date(Date.now())
  let time = new Intl.DateTimeFormat('en', { hour: '2-digit', minute: 'numeric', hour12: false }).format(d)
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  message_time.textContent = `${da} ${mo} ${time}`

  message_container.insertAdjacentElement('beforeend', message)
  message_container.scroll(0, message_container.scrollHeight)

  messagesRef.add({
    username: username,
    date: d,
    img: "./image/sticker.png",
    message: input_value
  })
    .then((docRef) => {
      console.log("Message written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding message: ", error);
    });

  if (document.getElementsByClassName("message").length == 2) {
    setTimeout(() => {
      message = original_message.cloneNode(true)

      var message_content = message.getElementsByClassName('message')[0]
      var input_value = 'Yes, indeed! I totally agree with you that this lab is perfect'
      message_content.textContent = input_value

      var message_time = message.getElementsByClassName('message-time')[0]
      var d = new Date(Date.now())
      let time = new Intl.DateTimeFormat('en', { hour: '2-digit', minute: 'numeric', hour12: false }).format(d)
      let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
      let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
      message_time.textContent = `${da} ${mo} ${time}`

      message_container.insertAdjacentElement('beforeend', message)
      messagesRef.add({
        username: 'Pavel Durov',
        date: d,
        img: "./image/pavel.jpg",
        message: input_value
      })
        .then((docRef) => {
          console.log("Message written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding message: ", error);
        });
      message_container.scroll(0, message_container.scrollHeight)
    }, 2000)
  }

  if (document.getElementsByClassName("message").length == 8) {
    setTimeout(() => {
      message = original_message.cloneNode(true)

      var message_content = message.getElementsByClassName('message')[0]
      var input_value = 'Yep, auto scroll to the bottom is also works.'
      message_content.textContent = input_value

      var message_time = message.getElementsByClassName('message-time')[0]
      var d = new Date(Date.now())
      let time = new Intl.DateTimeFormat('en', { hour: '2-digit', minute: 'numeric', hour12: false }).format(d)
      let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
      let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
      message_time.textContent = `${da} ${mo} ${time}`

      message_container.insertAdjacentElement('beforeend', message)
      messagesRef.add({
        username: 'Pavel Durov',
        date: d,
        img: "./image/pavel.jpg",
        message: input_value
      })
        .then((docRef) => {
          console.log("Message written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding message: ", error);
        });
      message_container.scroll(0, message_container.scrollHeight)
    }, 2000)
  }

  return false
}

function add_symbol(symbol) {
  var input = document.getElementById('input2')
  input.value += symbol
}
