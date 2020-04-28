const Logger = {};
/**
 * @description Set logger name
 * @param name Name of the logger
 */
Logger.setName = (name) => {
  this.Name = name;
};
/**
 * @description Log messages to console
 * @param messages Messages to be logged
 */
Logger.log = (...messages) => {
  console.log(`[${this.Name}]`, ...messages);
};

export { Logger };
