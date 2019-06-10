exports.handler = function (event, context, callback) {

  // send mail here

  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
}