import { BASE_URL } from "../constants";
import { IPipeline } from "./types";

/**
 * @description simulate get call to API.
 * @returns {promise}
 */
export async function getPipeline(): Promise<IPipeline> {
  const response = await fetch(BASE_URL, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await response.json();
}
