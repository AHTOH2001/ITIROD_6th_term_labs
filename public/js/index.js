function sign_in() {
  var input = document.getElementById("name-input")
  var username = input.value

  db.collection("users").doc(username).get().then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      localStorage.setItem('username', username);
      location.href = 'room.html'
    } else {
      console.log("No such user!");
      alert(`New user with nickname ${username} has been created`)
      db.collection("users").doc(username).set({

      })
        .then(() => {
          console.log("User successfuly created");
          localStorage.setItem('username', username);
          location.href = 'room.html'
        })
        .catch((error) => {
          console.error("Error creating user: ", error);
        });
    }
  }).catch((error) => {
    console.log("Error getting user:", error);
  });

  return false
}
