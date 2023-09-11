class App_error extends Error {
  constructor(message, code) {
    super();
    (this.message = message), (this.code = code);
  }
}

module.exports = App_error;
