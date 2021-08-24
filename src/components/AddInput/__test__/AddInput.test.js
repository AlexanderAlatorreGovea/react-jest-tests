import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

//since we don't care what setTodos is we can 
//just mock the function with jest.fn();
//since this is not an integrationtest
const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(
        <AddInput 
            todos={[]} 
            setTodos={mockedSetTodo} 
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  //trigger the type event 
  it("should be able to type into input", () => {
    render(
        <AddInput  
            todos={[]} 
            setTodos={mockedSetTodo} 
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
        target: {
            value: "Go Grocery Shopping"
        }
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  it("should have empty input when add btn is clicke", () => {
    render(
        <AddInput 
            todos={[]} 
            setTodos={mockedSetTodo} 
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {
        name: /add/i
    })
    fireEvent.change(inputElement, {
        target: {
            value: "Go Grocery Shopping"
        }
    });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });



//   it("should be able to type into input", () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     fireEvent.click(inputElement);
//     fireEvent.change(inputElement, {
//       target: { value: "Go Grocery Shopping" },
//     });
//     expect(inputElement.value).toBe("Go Grocery Shopping");
//   });

//   it("should be able to type into input", () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     fireEvent.click(inputElement);
//     fireEvent.change(inputElement, {
//       target: { value: "Go Grocery Shopping" },
//     });
//     const buttonElement = screen.getByRole("button", { name: /Add/i });
//     fireEvent.click(buttonElement);
//     expect(mockedSetTodo).toBeCalled();
//   });

//   it("should have empty input when add button is cliked", () => {
//     render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
//     fireEvent.change(inputElement, {
//       target: { value: "Go Grocery Shopping" },
//     });
//     const buttonElement = screen.getByRole("button", { name: /Add/i });
//     fireEvent.click(buttonElement);
//     expect(inputElement.value).toBe("");
//   });
});
