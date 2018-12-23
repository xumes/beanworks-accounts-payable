const session = require('express-session');
const MemoryStore = require('session-memory-store')(session);

module.exports = {
  secret: 'HRYAG&@##@haga!!!VANHACK',
  cookie: { path: '/', httpOnly: true, secure: true, maxAge: null },
  resave: true,
  proxy: true,
  saveUninitialized: true,
  store: new MemoryStore({
    checkPeriod: 86400000, // prune expired entries every 24h
  }),
};