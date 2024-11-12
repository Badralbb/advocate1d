import { Task } from "@/models/taskModel";

export const getAllTasks = async () => {
  try {
    const allTasks = await Task.find();
    return allTasks;
  } catch (err) {
    return err;
  }
};
