const { generateText, validateInput, createElement } = require( '../util.js' )

describe( 'Pruebas de salida de datos', () => {
  test( 'Salida con datos', () => {
    const text = generateText( 'Daniel', 30 )
    expect( text ).toBe( 'Daniel (30 years old)' )
  } )

  test( 'Salida con datos vacios', () => {
    const text = generateText( '', null )
    expect( text ).toBe( ' (null years old)' )
  } )

  test( 'Salida sin datos', () => {
    const text = generateText()
    expect( text ).toBe( 'undefined (undefined years old)' )
  } )
} )

describe( 'Crear elementos HTML', () => {
  test( 'Crear elemento P', () => {
    const { tagName, textContent, className } = createElement( 'p', 'Hello world', 'hello-world' )
    expect( tagName ).toBe( 'P' )
    expect( textContent ).toBe( 'Hello world' )
    expect( className ).toBe( 'hello-world' )
  } )
} )

describe( 'Validar un input', () => {
  test( 'Validar input con texto vacio', () => {
    const isValid = validateInput( '', true, true )
    expect( isValid ).toBe( false )
  } )

  test( 'Validar input con texto vacio', () => {
    const isValid = validateInput( '       ', true, true )
    expect( isValid ).toBe( false )
  } )

  test( 'Validar input con texto vacio', () => {
    const isValid = validateInput( 'Algo', true, true )
    expect( isValid ).toBe( false )
  } )

  test( 'Validar input con texto vacio', () => {
    const isValid = validateInput( 'Algo', false, false )
    expect( isValid ).toBe( true )
  } )
} )