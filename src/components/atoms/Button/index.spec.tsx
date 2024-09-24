import { render, screen, fireEvent, RenderResult } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
  let renderResult: RenderResult
  let handleClick: jest.Mock

  beforeEach(() => {
    handleClick = jest.fn()
    renderResult = render(
      <Button variant="primary" onClick={handleClick}>
        Button
      </Button>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('버튼 클릭 시 onClick이 호출', () => {
    fireEvent.click(screen.getByText('Button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})