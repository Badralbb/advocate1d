import { AddTask } from "@/graphql/resolvers/mutations/add-task";

jest.mock("models/taskModel", () => ({
  Task: {
    create: jest
      .fn()
      .mockResolvedValueOnce({
        taskName: "todo",
        priority: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
        isDone: false,
      })
      .mockRejectedValueOnce(new Error("Error")),
  },
}));

describe("addTask", () => {
  const mockData = {
    taskName: "todo",
    priority: 500,
    createdAt: new Date(),
    updatedAt: new Date(),
    isDone: false,
  };
  it("create a new Task", async () => {
    const result = await AddTask({}, mockData);
    expect(result).toEqual(mockData);
    expect(result).toBeDefined();
  });
  it("should throw error", async () => {
    const result = await AddTask({}, mockData);
    expect(result).toEqual(new Error("Error"));
  });
});
