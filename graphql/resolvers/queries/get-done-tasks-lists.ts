import { Task } from "@/models/taskModel";

export const getDoneTasksLists = async () => {
  try {
    const doneTasks = await Task.find({ isDone: true });
    return doneTasks;
  } catch (err) {
    return err;
  }
};
