import {throttle} from '../../index'

jest.useFakeTimers()

test('test throttle', () => {
  Date.now = jest.fn()
    .mockImplementationOnce(() => 0)
    .mockImplementationOnce(() => 2004)
    .mockImplementationOnce(() => 4024)
    .mockImplementationOnce(() => 6003)
    .mockImplementationOnce(() => 8002)
  const test: Function = jest.fn()
  const throttled: Function = throttle(test, 1000)
  throttled()
  throttled()
  throttled()
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