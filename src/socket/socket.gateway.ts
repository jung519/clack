import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class SocketGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any) {
    console.log('^message')
    console.log('payload => ', payload)
    // console.log('client => ', client)
    client.emit('message', payload)
  }
  
  @SubscribeMessage('testSocket')
  test(client: any, payload: any) {
    console.log('testSocket')
    console.log('payload => ', payload)
    // console.log('client => ', client)
    client.emit('testSocket', payload)
  }

  @SubscribeMessage('join')
  join(client: any, payload: any) {
    console.log('join')
    console.log('payload => ', payload)
    client.emit(payload)    
  }

  @SubscribeMessage('leave')
  leave(client: any, payload: any) {
    console.log('leave')
    console.log('payload => ', payload)
    client.leave(payload)
    client.emit(payload)
  }
}
