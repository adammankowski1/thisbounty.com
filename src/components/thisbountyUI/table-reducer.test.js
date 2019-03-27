import { reducer } from "../table-reducer";

const createBounty = ({
  name = "",
  description = "",
  funded = false,
  flags = []
} = {}) => ({
  name,
  description,
  funded,
  flags
});

const createState = ({
  bountyLog = [],
  currentBounty = createBounty()
} = {}) => ({
  bountyLog,
  currentBounty
});

describe("ThisBounty", () => {
  it("returns default state with no arguments", () => {
    expect(reducer).toBe(createState());
  });
});
