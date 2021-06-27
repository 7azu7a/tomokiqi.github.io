import { render } from "@testing-library/react";
import Index from "pages/index";

describe("Index", () => {
  it("render", () => {
    const { debug } = render(
      <Index blogList={{ contents: [], totalCount: 0, offset: 0, limit: 0 }} />
    );
    debug();
  });
});
