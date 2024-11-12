import { AddTask } from "@/graphql/resolvers/mutations/add-task";
import { updateTask } from "@/graphql/resolvers/mutations/update-task";

jest.mock("models/taskModel", () => ({
  Task: {
    findByIdAndUpdate: jest
      .fn()
      .mockResolvedValueOnce({
        id: "1",
        taskName: "todo2",
        priority: 100,

        isDone: true,
      })
      .mockRejectedValueOnce(new Error("Error")),
  },
}));

describe("udpate task", () => {
  const mockData = {
    id: "1",
    taskName: "todo2",
    priority: 100,

    isDone: true,
  };
  it("should update task successfully", async () => {
    const result = await updateTask({}, mockData);
    expect(result).toEqual(mockData);
    expect(result).toBeDefined();
  });
  it("should throw an error", async () => {
    const result = await updateTask({}, mockData);
    expect(result).toEqual(new Error("Error"));
  });
});
