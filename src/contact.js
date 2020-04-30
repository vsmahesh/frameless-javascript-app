import { Logger } from "./libs/logger";
import { ComponentModule } from "./components";

ComponentModule.init();
Logger.setName("Contact");
document.addEventListener("readystatechange", () => {
  // Do something for the contact page
  Logger.log("Contact page is ready!");
});
