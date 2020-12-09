import * as React from "react";
import { render } from "../utils/test-utils";
import ProgressBar from "../components/ProgressBar";

import { NonEmptyArray, Step } from "../utils/types";
import MultiStep from "../index";
import { Test, Test2, Test3, Test4 } from "../test_components/mock";
import { wait } from "@testing-library/react";
import { ctx, FormContext } from "../contexts/FormContext";

const stepNames = ["one", "two", "three", "four"];
const maxPosition = 4;
const currentPosition = 0;
const providerProps = { stepNames, currentPosition, maxPosition };

describe("ProgressBar", () => {
    it("renders to the user", async () => {
        const x = render(<ProgressBar />, { providerProps });
        expect(x).toMatchInlineSnapshot(`
            Object {
              "asFragment": [Function],
              "baseElement": <body>
                <div>
                  <div
                    class="progress-container"
                  >
                    <div
                      class="progress-step"
                      style="width: 20%;"
                    >
                      <div
                        class="step-wrapper"
                      >
                        <div
                          class="step-idx first current"
                        >
                          1
                        </div>
                        <div
                          class="step-label"
                        >
                          one
                        </div>
                      </div>
                    </div>
                    <div
                      class="progress-step"
                      style="width: 20%;"
                    >
                      <div
                        class="step-wrapper"
                      >
                        <div
                          class="step-idx uncomplete"
                        >
                          2
                        </div>
                        <div
                          class="step-label"
                        >
                          two
                        </div>
                      </div>
                    </div>
                    <div
                      class="progress-step"
                      style="width: 20%;"
                    >
                      <div
                        class="step-wrapper"
                      >
                        <div
                          class="step-idx uncomplete"
                        >
                          3
                        </div>
                        <div
                          class="step-label"
                        >
                          three
                        </div>
                      </div>
                    </div>
                    <div
                      class="progress-step"
                      style="width: 20%;"
                    >
                      <div
                        class="step-wrapper"
                      >
                        <div
                          class="step-idx uncomplete"
                        >
                          4
                        </div>
                        <div
                          class="step-label"
                        >
                          four
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </body>,
              "container": <div>
                <div
                  class="progress-container"
                >
                  <div
                    class="progress-step"
                    style="width: 20%;"
                  >
                    <div
                      class="step-wrapper"
                    >
                      <div
                        class="step-idx first current"
                      >
                        1
                      </div>
                      <div
                        class="step-label"
                      >
                        one
                      </div>
                    </div>
                  </div>
                  <div
                    class="progress-step"
                    style="width: 20%;"
                  >
                    <div
                      class="step-wrapper"
                    >
                      <div
                        class="step-idx uncomplete"
                      >
                        2
                      </div>
                      <div
                        class="step-label"
                      >
                        two
                      </div>
                    </div>
                  </div>
                  <div
                    class="progress-step"
                    style="width: 20%;"
                  >
                    <div
                      class="step-wrapper"
                    >
                      <div
                        class="step-idx uncomplete"
                      >
                        3
                      </div>
                      <div
                        class="step-label"
                      >
                        three
                      </div>
                    </div>
                  </div>
                  <div
                    class="progress-step"
                    style="width: 20%;"
                  >
                    <div
                      class="step-wrapper"
                    >
                      <div
                        class="step-idx uncomplete"
                      >
                        4
                      </div>
                      <div
                        class="step-label"
                      >
                        four
                      </div>
                    </div>
                  </div>
                </div>
              </div>,
              "debug": [Function],
              "findAllByAltText": [Function],
              "findAllByDisplayValue": [Function],
              "findAllByLabelText": [Function],
              "findAllByPlaceholderText": [Function],
              "findAllByRole": [Function],
              "findAllByTestId": [Function],
              "findAllByText": [Function],
              "findAllByTitle": [Function],
              "findByAltText": [Function],
              "findByDisplayValue": [Function],
              "findByLabelText": [Function],
              "findByPlaceholderText": [Function],
              "findByRole": [Function],
              "findByTestId": [Function],
              "findByText": [Function],
              "findByTitle": [Function],
              "getAllByAltText": [Function],
              "getAllByDisplayValue": [Function],
              "getAllByLabelText": [Function],
              "getAllByPlaceholderText": [Function],
              "getAllByRole": [Function],
              "getAllByTestId": [Function],
              "getAllByText": [Function],
              "getAllByTitle": [Function],
              "getByAltText": [Function],
              "getByDisplayValue": [Function],
              "getByLabelText": [Function],
              "getByPlaceholderText": [Function],
              "getByRole": [Function],
              "getByTestId": [Function],
              "getByText": [Function],
              "getByTitle": [Function],
              "queryAllByAltText": [Function],
              "queryAllByDisplayValue": [Function],
              "queryAllByLabelText": [Function],
              "queryAllByPlaceholderText": [Function],
              "queryAllByRole": [Function],
              "queryAllByTestId": [Function],
              "queryAllByText": [Function],
              "queryAllByTitle": [Function],
              "queryByAltText": [Function],
              "queryByDisplayValue": [Function],
              "queryByLabelText": [Function],
              "queryByPlaceholderText": [Function],
              "queryByRole": [Function],
              "queryByTestId": [Function],
              "queryByText": [Function],
              "queryByTitle": [Function],
              "rerender": [Function],
              "unmount": [Function],
            }
        `);
    });
});
