class Interest {
  constructor( value , period, rate ) {
    if ( !value  || value <= 0)
      throw new Error( "value should be major than zero." )

    if ( !period || period <= 0 )
      throw new Error( "period should be major than zero" )

    if ( !rate || rate < 0.5|| rate > 100 )
        throw new Error( "rate should be between 0.5 & 100" )

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
