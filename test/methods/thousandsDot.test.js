import {thousandsDot} from '../../index'

test('test thousandsDot', () => {
  expect(thousandsDot(1000000000)).toEqual('1,000,000,000')
})

test('test not number', () => {
  expect(thousandsDot('test')).toBe('0')
})
