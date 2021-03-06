import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe("Todo", () => {
  it("should render same text passed into title prop", async () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {
      name: /Add/i,
    });
    fireEvent.change(inputElement, {
      target: {
        value: "Go Grocery Shopping",
      },
    });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    tasks.forEach((task) => {
      fireEvent.change(inputElement, { target: { value: task } });
      fireEvent.click(buttonElement);
    });
  };

  it("should render multiple items", () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping", "Pet my cat", "Wash my hands"]);
    const divElement = screen.getAllByTestId("task-container");

    expect(divElement.length).toBe(3);
  });

  //className not present in the todo item
  it("should not have completed class when initially rendered", () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping"]);
    const divElement = screen.getByText(/Go Grocery Shopping/i);

    expect(divElement).not.toHaveClass("todo-item-active");
  });

  //className should be present in the todo item
  it("should have completed class when clicked", () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping"]);
    const divElement = screen.getByText(/Go Grocery Shopping/i);

    expect(divElement).not.toHaveClass("todo-item-active");
  });
});

// const addTask = (tasks) => {
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     const buttonElement = screen.getByRole("button", { name: /Add/i} );
//     tasks.forEach((task) => {
//         fireEvent.change(inputElement, { target: { value: task } });
//         fireEvent.click(buttonElement);
//     })
// }

// it('should be able to type into input', () => {
//     render(
//         <MockTodo />
//     );
//     addTask(["Go Grocery Shopping"])
//     const divElement = screen.getByText(/Go Grocery Shopping/i);
//     expect(divElement).toBeInTheDocument()
// });

// it('should render multiple items', () => {
//     render(
//         <MockTodo />
//     );
//     addTask(["Go Grocery Shopping", "Go Grocery Shopping", "Go Grocery Shopping"])
//     const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
//     expect(divElements.length).toBe(3)
// });

// it('task should not have complete class when initally rendered', () => {
//     render(
//         <MockTodo />
//     );
//     addTask(["Go Grocery Shopping"])
//     const divElement = screen.getByText(/Go Grocery Shopping/i);
//     expect(divElement).not.toHaveClass("todo-item-active")
// });

// it('task should have complete class when clicked', () => {
//     render(
//         <MockTodo />
//     );
//     addTask(["Go Grocery Shopping"])
//     const divElement = screen.getByText(/Go Grocery Shopping/i);
//     fireEvent.click(divElement)
//     expect(divElement).toHaveClass("todo-item-active")
// });
