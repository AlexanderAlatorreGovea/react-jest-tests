import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render same text passed into title prop", () => {
    //title="todo" is a prop
    render(<Header title="todo" />);
    const h1Element = screen.getByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
  });
});

//this will get the h1 as getElementByRole h1 exists
//Here we are getting the heading h1 and we are getting
//by the test "todo" to specify the heading
// it("should render same text passed into title prop", () => {
//   render(<Header title="todo" />);
//   const h1Element = screen.getByRole("heading", {
//     name: "todo",
//   });
//   expect(h1Element).toBeInTheDocument();
// });

// it("should render same text passed into title prop", () => {
//   render(<Header title="todo" />);
//   const h1Element = screen.getByTitle("Header", {
//     name: "todo",
//   });
//   expect(h1Element).toBeInTheDocument();
// });

// //findBy is asynchronous so you need async await
// it("should render same text passed into title prop", async () => {
//   render(<Header title="todo" />);
//   const h1Element = await screen.findByText(/todo/i);
//   expect(h1Element).toBeInTheDocument();
// });

// //QueryBy
// it("should render same text passed into title prop", async () => {
//   render(<Header title="todo" />);
//   const h1Element = screen.queryByText(/dogs/i);
//   expect(h1Element).not.toBeInTheDocument();
// });

// //get all by
// it("should render same text passed into title prop", async () => {
//   render(<Header title="todo" />);
//   const headingElements = screen.queryAllByRole("heading");
//   expect(headingElements.length).toBe(2);
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading");
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading", { name: /todo/i });
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByTitle("Header");
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h2Element = screen.getByTestId("header-2");
//     expect(h2Element).toBeInTheDocument();
// });

// // WITH FINDBY

// it('should render same text passed into title prop', async () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = await screen.findByText(/todo/i);
//     expect(h1Element).toBeInTheDocument();
// });

// // WITH QUERYBY

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = screen.queryByText(/dogs/i);
//     expect(h1Element).not.toBeInTheDocument
// });

// // WITH GETALLBY

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Elements = screen.getAllByText(/todo/i);
//     expect(h1Elements.length).toBe(1);
// });
