import { guid } from '../../index'

test('test generate guid', () => {
  expect(typeof guid()).toBe('string')
})

test('test generate guid is different', () => {
  let guid1: string = guid()
  let guid2: string = guid()
  expect(guid1 === guid2).toBe(false)
})
