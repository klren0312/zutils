import { toIndexOf } from '../../index'

test('test the toIndexOf methods success', () => {
  let arr: any[] = ['a', 11, 22]
  let item: string = 'a'
  expect(toIndexOf(arr, item)).toBe(true)
})

test('test the toIndexOf methods items not array', () => {
  let arr: string = 'test'
  let item: string = 'a'
  expect(toIndexOf(arr, item)).toBe(false)
})

test('test the toIndexOf methods items do not have item', () => {
  let arr: any[] = []
  let item: string = 'a'
  expect(toIndexOf(arr, item)).toBe(false)
})
