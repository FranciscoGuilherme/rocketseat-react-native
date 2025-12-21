import React from "react"
import { render, screen, fireEvent } from "@testing-library/react-native"
import { Button } from "@/components/Button"

describe("Componente Button", () => {
  it("deve renderizar o botão com o título correto", () => {
    render(<Button title="Entrar" />)
    const buttonText = screen.getByText("Entrar")
    expect(buttonText).toBeTruthy()
  })

  it("chama onPress quando o botão é pressionado", () => {
    const handlePress = jest.fn()
    const { getByRole } = render(
      <Button title="Entrar" onPress={handlePress} />,
    )
    const button = getByRole("button")
    fireEvent.press(button)
    expect(handlePress).toHaveBeenCalledTimes(1)
  })

  it("deve ter acessibilidade correta", () => {
    render(<Button title="Entrar" accessibilityLabel="Botão de entrar" />)
    const button = screen.getByLabelText("Botão de entrar")
    expect(button).toBeTruthy()
  })
})
