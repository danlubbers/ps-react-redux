import React from "react";
import CourseForm from "./CourseForm.jsx";
import { shallow } from "enzyme";

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
  return shallow(<CourseForm {...props} />);
}

it("renders form and a header", () => {
  const wrapper = renderCourseForm();
  // console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

it("labels save buttons as 'Save' when not saving", () => {
  const wrapper = renderCourseForm();
  // console.log(wrapper.debug());
  expect(wrapper.find("button").text()).toBe("Save");
});

it("labels save buttons as 'Save' when saving", () => {
  const wrapper = renderCourseForm({ saving: true });
  // console.log(wrapper.debug());
  expect(wrapper.find("button").text()).toBe("Saving...");
});
