let MESSAGE = readline()
                .split('')
                .map(a => '0000000'.concat(a.charCodeAt(0).toString(2)).slice(-7))
                .join('')
                .match(/(.)\1*/g)
                .map(a => (a[0] === '1' ?'0 ': '00 ') + '0'.repeat(a.length) )
                .join(' ')
console.log(MESSAGE);