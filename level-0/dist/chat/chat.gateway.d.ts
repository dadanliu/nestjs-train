import { Server, Socket } from 'socket.io';
export declare class ChatGateWay {
    socket: Socket;
    constructor();
    server: Server;
    afterInit(server: any): void;
    handleConnection(socket: any): void;
    handleDisconnect(socket: any): void;
    AddMessage(message: string): void;
}
