import { createAlovaMockAdapter } from "@alova/mock";
import { mockV1 } from "./v1";
import { axiosMockResponse } from "@alova/adapter-axios";

const MockAdapter = createAlovaMockAdapter(mockV1, {
  delay: 1000,
  mockRequestLogger: true,
  ...axiosMockResponse,
});

export default MockAdapter;
