import React from "react";
import { mount } from "enzyme";
import { authors, newCourse, courses } from "../../../tools/mockData";
import { ManageCourse } from "./ManageCourse.jsx";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    // Passed from react router in real app, so just subbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.jsx,
    // or even wrap with React Router, depending on whether I
    // need to test React Router behavior.
    history: {},
    saveCourse: jest.fn(),
    loadCourses: jest.fn(),
    loadAuthors: jest.fn(),
    course: newCourse,
    match: {},
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageCourse {...props} />);
}

// it("sets error when attempting to save an empty title field", () => {
//   const wrapper = render();
//   wrapper.find("form").simulate("submit");
//   const error = wrapper.find(".alert").first();
//   expect(error.text()).toBe("Title is required!");
// });
