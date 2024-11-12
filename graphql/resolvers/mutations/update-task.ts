import { Task } from "@/models/taskModel";

export const updateTask = async (
  _: unknown,
  {
    isDone,
    id,
    taskName,
    priority,
  }: { isDone: Boolean; id: string; taskName: string; priority: number }
) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      { _id: id },
      {
        isDone,
        taskName,
        priority,
        updatedAt: new Date(),
      }
    );
    console.log(updatedTask);
    return updatedTask;
  } catch (err) {
    return err;
  }
};
