//

const EventEmitter = require('events');

const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]); 
var convert = new EventEmitter.EventEmitter(); 



function convertBuffer() {
    console.log('Buffer Converted')

}

function literateBuffer() {
  for (const value of buf.values()) {
    nums = value
    console.log(nums)
  }
  convertBuffer()
}

literateBuffer()


