// package: edgify
// file: analytics.proto

import * as analytics_pb from "./analytics_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AnalyticsServiceCreateEvent = {
  readonly methodName: string;
  readonly service: typeof AnalyticsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof analytics_pb.CreateAnalyticsEventRequest;
  readonly responseType: typeof analytics_pb.CreateAnalyticsEventResponse;
};

export class AnalyticsService {
  static readonly serviceName: string;
  static readonly CreateEvent: AnalyticsServiceCreateEvent;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AnalyticsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createEvent(
    requestMessage: analytics_pb.CreateAnalyticsEventRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: analytics_pb.CreateAnalyticsEventResponse|null) => void
  ): UnaryResponse;
  createEvent(
    requestMessage: analytics_pb.CreateAnalyticsEventRequest,
    callback: (error: ServiceError|null, responseMessage: analytics_pb.CreateAnalyticsEventResponse|null) => void
  ): UnaryResponse;
}

