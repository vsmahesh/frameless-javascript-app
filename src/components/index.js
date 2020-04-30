import { PageHeader } from "./header/header";
import { Navigation } from "./navigation/navigation";
export class ComponentModule {
  static init() {
    let NeverUsedComponents = [PageHeader, Navigation];
  }
}
