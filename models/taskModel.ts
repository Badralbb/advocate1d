import mongoose, { model, models, Schema } from "mongoose";
export type TaskType = {
  id: string;
  taskName: string;
  isDone: boolean;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
};
const schema = new Schema<TaskType>({
  id: String,
  taskName: { type: String, required: true },
  isDone: { type: Boolean, default: false },
  priority: { type: Number, required: true },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});
export const Task = mongoose.models.task || model("task", schema);
