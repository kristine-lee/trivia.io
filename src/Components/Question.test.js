import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Question from './Question'

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("selects answers",  () => {
  const handlechange = jest.fn();
  act(() => {
    render(<Question handlechange={handlechange} />)
  })

  const button = document.querySelector("[data-testid=toggle]");
  expect(button.innerHTML).toBe("Turn on");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
})

//if you don't pick an answer you get an alert
//if you pick a wrong answer you get bad things
