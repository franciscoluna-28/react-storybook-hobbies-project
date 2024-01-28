import { renderHook, waitFor } from "@testing-library/react";
import { useFetchActivities } from "./useFetchActivities";

describe("useFetchActitivities", () => {
  it("should fetch activities", async () => {
    const { result } = renderHook(() => useFetchActivities("busywork"));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.activities.length).toBe(3);
    });
  });
});
