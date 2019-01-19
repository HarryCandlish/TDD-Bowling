const game = require('../game')

test('test setup working', function () {
    expect(true).toBeTruthy()
  })

test('score a gutterball frame', function (){
    const frame = [0,0]
    const expected = 0
    const actual = game.scoreFrame(frame)
    expect(actual).toBe(expected)
})

test('score a normal frame', function (){
    const frame = [2,3]
    const expected = [5]
    const actual = game.scoreFrame(frame)
    expect(actual).toBe(expected)
})


  


  