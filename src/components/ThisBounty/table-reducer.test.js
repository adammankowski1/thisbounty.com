import { tableReducer } from "../ThisBounty/table-reducer";

const createBounty = ({
  id = 0,
  name = "",
  description = "",
  funded = false,
  tags = []
} = {}) => ({
  id,
  name,
  description,
  funded,
  tags
});

const createState = ({
  bountyLog = [],
  currentBounty = createBounty()
} = {}) => ({
  bountyLog,
  currentBounty
});

describe("tableReducer()", () => {
  it("returns default state with no arguments", () => {
    expect(tableReducer()).toEqual(createState());
  });
});
