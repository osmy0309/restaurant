export default interface ModelState<T> {
  value: T;
  status: "idle" | "loading" | "succeeded" | "failed";
}
