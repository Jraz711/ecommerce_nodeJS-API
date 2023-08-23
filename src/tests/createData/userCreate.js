const User = require("../../models/User")

const userCreate = async () => {

  const user = {
    firstName: "Gabriel",
    lastName: "Martinez",
    email: "Gabriel@ACADEMLO.com",
    password: "admin",
    phone: "+1809"
  }

  await User.create(user)

}

module.exports = userCreate