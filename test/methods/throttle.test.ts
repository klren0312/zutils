import {throttle} from '../../index'

jest.useFakeTimers()

test('test throttle', () => {
  Date.now = jest.fn()
    .mockImplementationOnce(() => 1000)
    .mockImplementationOnce(() => 2002)
    .mockImplementationOnce(() => 2004)
    .mockImplementationOnce(() => 2024)
    .mockImplementationOnce(() => 3003)
  const test: Function = jest.fn()
  const throttled: Function = throttle(test, 1000)
  throttled()
  throttled()
  throttled()
  throttled()
  throttled()
  throttled()
  throttled()
  jest.runAllTimers()
  expect(test).toBeCalled()
  expect(test).toBeCalledTimes(4)
})