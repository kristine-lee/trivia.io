// import { render, screen } from '@testing-library/react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Quiz from './Quiz';
import Question from './Question';

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

//mockAPI
it("renders questions", async () => {
  const fakeQuestion = {
    question: "what's the capital of the US?",
    correct: "Washington D.C.",
    incorrect: ["New York", "Seattle", "Chicago"]
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeQuestion)
    })
  );
  await act(async () => {
    render(<Question question={fakeQuestion} />, container);
  });

  expect(container.textContent).toContain(fakeQuestion.question);
  global.fetch.mockRestore();
})
