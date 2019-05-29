import {debounce} from '../../index'
jest.useFakeTimers()

test('test debounce', () => {
  const test: Function = jest.fn()
  const debounced: Function = debounce(test, 1000)
  debounced()
  debounced()
  debounced()
  jest.runAllTimers()
  expect(test).toHaveBeenCalledTimes(1)
  debounced()
  jest.runAllTimers()
  expect(test).toHaveBeenCalledTimes(2)
})