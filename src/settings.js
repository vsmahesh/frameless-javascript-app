import { Logger } from "./libs/logger";
import { ComponentModule } from "./components";

ComponentModule.init();
Logger.setName("Settings.js");
document.addEventListener("readystatechange", () => {
  // Do something for the settings page
  Logger.log("Settings page is ready!");
});
