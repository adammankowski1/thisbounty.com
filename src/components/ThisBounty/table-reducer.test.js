import { tableReducer, addBounty } from "../ThisBounty/table-reducer";

const createBounty = ({
  id = "",
  name = "",
  description = "",
  funded = false,
  tags = [],
  timeStamp = 0
} = {}) => ({
  id,
  name,
  description,
  funded,
  tags,
  timeStamp
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

// As a website visitor, I want to add a bounty, so that I can hire freelancers
// As a malicious user, I cannot inject code to exploit user browser.

describe("addBounty()", () => {
  it("returns correct state with no arguments", () => {
    expect(tableReducer(undefined, addBounty())).toEqual(createState());
  });

  it("returns correct state with all arguments", () => {
    const bounty = createBounty({
      id: "id",
      name: "test",
      description: "test",
      funded: true,
      tags: ["paid", "endorsed", "github", "progress"],
      timeStamp: 1
    });

    expect(tableReducer(undefined, addBounty(bounty))).toEqual(
      createState({ currentBounty: bounty })
    );
  });
});
