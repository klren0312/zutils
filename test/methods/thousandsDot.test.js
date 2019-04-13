import {thousandsDot} from '../../index'

test('test thousandsDot', () => {
  expect(thousandsDot(1000000000)).toEqual('1,000,000,000')
})