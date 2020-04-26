import React from "react";
import CourseForm from "./CourseForm.jsx";
import { cleanup, render } from "react-testing-library";

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  // this merges the defaultProps with the existing arguments data
  const props = { ...defaultProps, ...args };
  // Enzyme renders a shallow copy then passes dowsn that data through props on the CourseForm
  return render(<CourseForm {...props} />);
}

it("should render Add Course Header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it("should label save button as 'Save' when not saving.", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("should label save button as 'Saving...' when saving.", () => {
  const { getByText, debug } = renderCourseForm({ saving: true });
  // debug();
  getByText("Saving...");
});
