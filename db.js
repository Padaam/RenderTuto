const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'cloud_vxqr', // Database name
  'clouduser', // User
  'kNq3d4MtxlQd6paXaDvtzxqdfaJESuiG', // Password
  {
    host: 'dpg-ck9d0kn0vg2c73d2mpqg-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
