var stompClient = null;

function connect() {
    const socket = new SockJS('/hello');
    stompClient = Stomp.over(socket);
    stompClient.connect(
        {},
        function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/greetings', function (greeting) {
                }
            );
        }
    );
}

function disconnect() {
    stompClient.disconnect();
    console.log("Disconnected");
}

function sendName(name) {
    stompClient.send("/app/hello", {}, JSON.stringify({name}));
}
