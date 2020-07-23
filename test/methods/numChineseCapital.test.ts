import { numChineseCapital } from '../../index'

test('test num to Chinese Capital', () => {
  expect(numChineseCapital(0)).toBe('零')
  expect(numChineseCapital(111.1)).toBe('壹佰壹拾壹元壹角')
  expect(numChineseCapital(111.11)).toBe('壹佰壹拾壹元壹角壹分')
  expect(numChineseCapital(111)).toBe('壹佰壹拾壹元整')
  expect(numChineseCapital(11111111.11)).toBe('壹仟壹佰壹拾壹万壹仟壹佰壹拾壹元壹角壹分')
  expect(numChineseCapital('0.111')).toBe('壹角壹分')
  expect(numChineseCapital('')).toBe('')
  expect(numChineseCapital(undefined)).toBe('')
})