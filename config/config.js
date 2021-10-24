const assignKey = (query) => {
  let obj = {};
  obj[config.apiKeyName] = config.apiKeyValue;
  return Object.assign(query, obj);
};

const logPort = (port) => {
  return () =>
    console.log(
      `[\x1b[34mSERVER\x1b[37m] Listening on port: \x1b[36m${port} 🤖 \x1b[37m`
    );
};

const config = {
  apiUrl: process.env.API_URL,
  apiKeyName: process.env.API_KEY_NAME,
  apiKeyValue: process.env.API_KEY_VALUE,
  port: process.env.PORT || 3000,
  assignKey: assignKey,
};

module.exports = {
  config,
  assignKey,
  logPort,
};
