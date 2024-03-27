import { WsResponse } from '@nestjs/websockets';
export declare class ChatGateWay {
    server: any;
    onEvent(client: any, message: any): WsResponse<string>;
}
