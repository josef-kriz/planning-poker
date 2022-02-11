"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameListener = void 0;
function gameListener(socket) {
    setInterval(() => {
        socket.emit('users', [
            {
                "userID": "hezDKPc6AbzW0tDJAAAH",
                "username": "Josef"
            },
            {
                "userID": "o9tZSQlFV6zVx6_LAAAJ",
                "username": "Tsvetina"
            }
        ]);
    }, 10000);
}
exports.gameListener = gameListener;
