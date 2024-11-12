import { getAllTasks } from "@/graphql/resolvers/queries/get-all-tasks";
import { getDoneTasksLists } from "@/graphql/resolvers/queries/get-done-tasks-lists";

jest.mock("models/taskModel", () => ({
  Task: {
    find: jest
      .fn()
      .mockResolvedValueOnce([
        {
          taskName: "mock1",
          priority: 1,
          isDone: true,
        },
        {
          taskName: "mock2",
          priority: 2,
          isDone: true,
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
      isDone: true,
    },
    {
      taskName: "mock2",
      priority: 2,
      isDone: true,
    },
  ];
  it("to get all tasks", async () => {
    const result = await getDoneTasksLists();
    expect(result).toEqual(mockdata);
    expect(result).toBeDefined();
  });
  it("throw new error", async () => {
    const result = await getDoneTasksLists();
    expect(result).toEqual(new Error("Error"));
  });
});
