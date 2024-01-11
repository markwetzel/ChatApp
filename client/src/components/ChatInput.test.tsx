import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import ChatInput from "./ChatInput";
import { ChatContext } from "../context/ChatContext";
import "@testing-library/jest-dom";

describe("ChatInput", () => {
  const mockAddMessage = jest.fn();

  const mockContextValue = {
    messages: [],
    addMessage: mockAddMessage,
    users: [],
    addUser: () => {},
  };

  beforeEach(() => {
    render(
      <ChatContext.Provider value={mockContextValue}>
        <ChatInput />
      </ChatContext.Provider>
    );
  });

  test("renders input element", () => {
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("allows typing in the input", () => {
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Hello, world!" } });
    expect(inputElement.value).toBe("Hello, world!");
  });

  test("sends message on Enter key press", () => {
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "New message" } });
    fireEvent.keyDown(inputElement, { key: "Enter" });
    expect(mockAddMessage).toHaveBeenCalledWith("New message");
  });

  test("sends message on Send button click", () => {
    const inputElement = screen.getByRole("textbox");
    const sendButton = screen.getByRole("button", { name: /send/i });
    fireEvent.change(inputElement, { target: { value: "Another message" } });
    fireEvent.click(sendButton);
    expect(mockAddMessage).toHaveBeenCalledWith("Another message");
  });

  test("clears input after message sent", () => {
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    const sendButton = screen.getByRole("button", { name: /send/i });
    fireEvent.change(inputElement, { target: { value: "Test message" } });
    fireEvent.click(sendButton);
    expect(inputElement.value).toBe("");
  });

  test("send button is only enabled if the text input is 'sendable'", () => {
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    const sendButton = screen.getByRole("button", { name: /send/i });

    // Initially, the button should be disabled because the input is empty
    expect(sendButton).toBeDisabled();

    // Typing a valid message should enable the button
    fireEvent.change(inputElement, { target: { value: "Valid message" } });
    expect(sendButton).toBeEnabled();

    // Clearing the input (making it non-sendable) should disable the button again
    fireEvent.change(inputElement, { target: { value: "" } });
    expect(sendButton).toBeDisabled();
  });
});
