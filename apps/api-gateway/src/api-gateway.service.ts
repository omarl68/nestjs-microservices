import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
  SendHello1(client): Observable<string> {
    return client.send({ cmd: 'hello-service-1' }, {});
  }
  sendHello2(client): Observable<string> {
    return client.send({ cmd: 'hello-service-2' }, {});
  }
  SumService1(client, calculateInput): Observable<number> {
    return client.send({ cmd: 'sum-service-1' }, calculateInput);
  }
  SumService2(client, calculateInput): Observable<number> {
    return client.send({ cmd: 'sum-service-2' }, calculateInput);
  }
}
