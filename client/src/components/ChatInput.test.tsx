import '@testing-library/jest-dom';

import { render, screen, fireEvent } from "@testing-library/react";
import ChatInput from "./ChatInput";
import { ChatContext } from "../context/ChatContext";
import "@testing-library/jest-dom";

describe("ChatInput", () => {
  const mockAddMessage = jest.fn();

  const mockContextValue = {
    messages: [], 
    addMessage: mockAddMessage,
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
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
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
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    const sendButton = screen.getByRole("button", { name: /send/i });
    fireEvent.change(inputElement, { target: { value: "Test message" } });
    fireEvent.click(sendButton);
    expect(inputElement.value).toBe("");
  });
});
