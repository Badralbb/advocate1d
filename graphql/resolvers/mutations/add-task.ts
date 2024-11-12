import { Task } from "@/models/taskModel";

export const AddTask = async (
  _: unknown,
  {
    isDone,
    taskName,
    priority,
  }: { isDone: boolean; taskName: string; priority: number }
) => {
  try {
    const newTask = await Task.create({
      isDone,
      taskName,
      priority,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return newTask;
  } catch (err) {
    console.log(err);
    return err;
  }
};
