import { getValues, findValue } from "../values"

describe("getValues()", ( ) => {

  it("is a function", ( ) => {
    expect( getValues ).toBeInstanceOf( Function )
  })

  it("should return values", ( ) => {
    expect(getValues()).toMatchSnapshot()
  })
})

describe("findValue(key)", ( ) => {
  it("should be function", () => {
    expect(findValue).toBeInstanceOf(Function)
  })

  it("key should not be null", ( ) => {
    expect(findValue).toThrow( )
  })

  it("error message should be", ( ) => {
    expect(findValue).toThrowError( "key should not be null!" )
  })

  it("should return value by key", ( ) => {
      expect(findValue('RJ')).toMatchSnapshot()
  })
})
