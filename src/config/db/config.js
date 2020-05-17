module.exports = {
  "development": {
    "username": "abcd",
    "password": "abcd",
    "database": "commentsuniverse",
    "host": process.env.HOST_DATABASE,
    "dialect": "mysql"
  },
  "test": {
    "username": "teste",
    "password": null,
    "database": "commentsuniverse_test",
    "host": process.env.HOST_DATABASE,
    "dialect": "mysql"
  }
};
