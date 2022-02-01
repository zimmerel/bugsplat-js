export interface CrashResponse {
  status: "success" | "fail";
  current_server_time: number;
  message: string;
  url: string;
  crash_id: number;
}

export interface BugSplatResponse {
  error?: Error | null;
  response?: CrashResponse;
  original: Error | string;
}

export function validateCrashResponse(
  response: unknown
): response is CrashResponse {
  if (!response || typeof response !== "object") {
    return false;
  }
  const validators = [
    response["status"] === "success" || response["status"] === "fail",
    typeof response["current_server_time"] === "number",
    typeof response["message"] === "string",
    typeof response["url"] === "string",
    typeof response["crash_id"] === "number",
  ];

  return validators.every(Boolean);
}
