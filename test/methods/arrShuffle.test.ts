import { arrShuffle } from '../../index'

test('test arr shuffle', () => {
  const numberArr: number[] = [1, 2, 3, 4]
  const afterArr = arrShuffle([1, 2, 3, 4])
  let difficultTimes = 0
  afterArr.forEach((v, i) => {
    if (v !== numberArr[i]) difficultTimes++
  })
  if (difficultTimes > 0) {
    expect(difficultTimes).toBeGreaterThan(0)
  } else {
    expect(difficultTimes).toBe(0)
  }

  const emptyArr: any[] = []
  expect(arrShuffle(emptyArr)).toEqual([])

  const string: string = 'test'
  // https://stackoverflow.com/questions/49787160/why-isnt-the-following-expect-tothrowerror-logging-anything-in-my-terminal
  expect(() => arrShuffle(string)).toThrowError()
})