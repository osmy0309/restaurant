export interface ListState<T> {
  value: Array<T>;
  status: "idle" | "loading" | "succeeded" | "failed";
}
