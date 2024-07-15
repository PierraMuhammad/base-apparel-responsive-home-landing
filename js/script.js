validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  }

  emailDetect = () => {
    let email = document.getElementById('name').value
    email.replace(/\s/g, "")
    if (validateEmail(email) && email != ""){
      window.alert(`${email} is valid`)
    } else {
      window.alert(`${email} is not valid or empty`)
    }  
  }