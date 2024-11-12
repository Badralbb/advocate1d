import { getAllTasks } from "@/graphql/resolvers/queries/get-all-tasks";

jest.mock("models/taskModel", () => ({
  Task: {
    find: jest
      .fn()
      .mockResolvedValueOnce([
        {
          taskName: "mock1",
          priority: 1,
          isDone: false,
        },
        {
          taskName: "mock2",
          priority: 2,
          isDone: false,
        },
      ])
      .mockRejectedValueOnce(new Error("Error")),
  },
}));

describe("all tasks", () => {
  const mockdata = [
    {
      taskName: "mock1",
      priority: 1,
      isDone: false,
    },
    {
      taskName: "mock2",
      priority: 2,
      isDone: false,
    },
  ];
  it("to get all tasks", async () => {
    const result = await getAllTasks();
    expect(result).toEqual(mockdata);
    expect(result).toHaveLength(mockdata.length);
    expect(result).toBeDefined();
  });
  it("throw new error", async () => {
    const result = await getAllTasks();
    expect(result).toEqual(new Error("Error"));
  });
});
