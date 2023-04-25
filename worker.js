// this.addEventListener(
// 	'message',
// 	function (e) {
// 		this.postMessage('You said: ' + e.data)
// 	},
// 	false
// )

// this.addEventListener(
// 	'message',
// 	function (e) {
// 		var data = e.data
// 		switch (data.cmd) {
// 			case 'start':
// 				this.postMessage('WORKER STARTED: ' + data.msg)
// 				break
// 			case 'stop':
// 				this.postMessage('WORKER STOPPED: ' + data.msg)
// 				this.close() // Terminates the worker.
// 				break
// 			default:
// 				this.postMessage('Unknown command: ' + data.msg)
// 		}
// 	},
// 	false
// )

var i = 1

function timeCount() {
	i++
	postMessage(i)
	setTimeout(timeCount, 500)
}

timeCount()
