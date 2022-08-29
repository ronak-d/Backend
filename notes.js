// nodeman is an 3rd party npm package => kind of npm start for express
// and you must have install it globally on machine.

// methods:
// GET => Getting data from server
// Post => add some data to server
// Put / Patch => Update some data on the server
// Delete => remove some data from the server

// diff between eg() and eg, inside app.use();

// eg() => invokes function where eg passes an function as in terms of object and
// has more precedent weightage then function invocations.

// app.use(eg) => ussed when to access middleware -> middlewares are function .
//      -> we directly passes function without invocation.
//      -> .use is from express use this syntax to pass and run middleware first.