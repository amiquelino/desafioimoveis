import Interest from '../Interest'
describe("Interest entities", ( ) => {
  it("is an Object", ( ) => {
    const interest = new Interest( 1390, 10, 11.5 )
    expect( interest ).toBeInstanceOf( Object )
  })

  describe("#constructor(value, period, rate): ", ( ) => {
    it("Value should be major than zero.", ( ) => {
      expect(( ) => new Interest(null, 10, 11.5 )).toThrow( )
    })

    it("value: error message should be", ( ) => {
      expect(( ) => new Interest(0, 10, 11.5 )).toThrowError( "value should be major than zero" )
    })

    it("period should not be null", ( ) => {
      expect(( ) => new Interest(1390, null, 11.5 )).toThrow( )
    })

    it("period: error message should be", ( ) => {
      expect(( ) => new Interest(1390, -1, 11.5 )).toThrowError( "period should be major than zero" )
    })

    it("rate should not be null", ( ) => {
      expect(( ) => new Interest(1390, 10, null )).toThrow( )
    })

    it("rate: error message should be", ( ) => {
      expect(( ) => new Interest(1390, 10, 0.1 )).toThrowError( "rate should be between 0.5 & 100" )
    })
  })

  it("compound()", ( ) => {
    const interest = new Interest( 1390, 10, 11.5 )
    expect(interest.compound()).toEqual(4128.23)
  })
})
