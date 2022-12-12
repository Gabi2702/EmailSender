const postgres = require('../db')

const User = postgres.define('user', {
    // Model attributes are defined here
    id: {
        type: postgres.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Email: {
      type:  postgres.Sequelize.STRING,
    //   allowNull: false
    },
    Password: {
      type:  postgres.Sequelize.STRING
      // allowNull defaults to true
    },
  })

// User.sync({force:true})

module.exports = User