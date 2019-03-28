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

describe("addBounty()", () => {
  it("returns correct state with no arguments", () => {
    expect(tableReducer(undefined, addBounty())).toEqual(
      createState({ bountyLog: [createBounty()] })
    );
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
      createState({ bountyLog: [bounty] })
    );
  });
});
