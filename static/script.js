// script.js

var socket = io()

$('#chat form').on('submit', function () {
  var $this = $(this)
  console.log($this)
  var $input = $this.find('input')
  console.log($input)
  var text = $input.val()
  console.log(text)
  socket.emit('chat', text)
  $input.val('')
  return false
})
