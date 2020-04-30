const Logger = { name: undefined };
/**
 * @description Set logger name
 * @param name Name of the logger
 */
Logger.setName = (name) => {
  Logger.name = name;
};
/**
 * @description Log messages to console
 * @param messages Messages to be logged
 */
Logger.log = (...messages) => {
  console.log(`[${Logger.name}]`, ...messages);
};

export { Logger };
