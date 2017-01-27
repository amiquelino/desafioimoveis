class Interest {
  constructor( value , period, rate ) {
    if ( !value )
      throw new Error( "value should not be null!" )

    if ( !period )
      throw new Error( "period should not be null!" )

    if ( !rate )
        throw new Error( "rate should not be null!" )

    this.value = value
    this.period = period
    this.rate = rate
  }

  compound( ){
    const futureValue = parseFloat((this.value * Math.pow(1 + (this.rate/100), this.period)).toFixed(2))
    return futureValue
  }
}
export default Interest
