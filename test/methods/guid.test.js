import { guid } from '../../index'

test('test generate guid', () => {
  expect(typeof guid()).toBe('string')
})

test('test generate guid is different', () => {
  let guid1 = guid()
  let guid2 = guid()
  expect(guid1 === guid2).toBe(false)
})
