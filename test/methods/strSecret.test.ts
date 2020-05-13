import {strSecret} from '../../index'

test('test strSecret use string, length > 8', () => {
  expect(strSecret('1234567890')).toEqual('1234********7890')
})

test('test strSecret use string, length > 4 and length < 8', () => {
  expect(strSecret('1234567')).toEqual('12****67')
})

test('test strSecret use string, length <= 4', () => {
  expect(strSecret('1234')).toEqual('1234')
})

test('test strSecret use number, length > 8', () => {
  expect(strSecret(1234567890)).toEqual('1234********7890')
})

test('test strSecret use number, length > 4 and length < 8', () => {
  expect(strSecret(12347)).toEqual('12****47')
})

test('test strSecret use number, length <= 4', () => {
  expect(strSecret(1234)).toEqual('1234')
})
