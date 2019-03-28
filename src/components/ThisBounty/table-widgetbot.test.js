import { widgetbot } from "../ThisBounty/table-widgetbot";

describe("<WidgetBot />", () => {
  it("imports with no errors", () => {
    expect(widgetbot()).toBeDefined();
  });
});
