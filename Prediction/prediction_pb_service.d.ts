// package: edgify
// file: prediction.proto

import * as prediction_pb from "./prediction_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EdgifyServiceGetPrediction = {
  readonly methodName: string;
  readonly service: typeof EdgifyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prediction_pb.PredictionRequest;
  readonly responseType: typeof prediction_pb.PredictionResponse;
};

type EdgifyServiceCreateGroundTruth = {
  readonly methodName: string;
  readonly service: typeof EdgifyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prediction_pb.GroundTruthRequest;
  readonly responseType: typeof prediction_pb.GroundTruthResponse;
};

type EdgifyServiceGetCurrentModelDeployment = {
  readonly methodName: string;
  readonly service: typeof EdgifyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof prediction_pb.GetCurrentModelDeploymentRequest;
  readonly responseType: typeof prediction_pb.GetCurrentModelDeploymentResponse;
};

export class EdgifyService {
  static readonly serviceName: string;
  static readonly GetPrediction: EdgifyServiceGetPrediction;
  static readonly CreateGroundTruth: EdgifyServiceCreateGroundTruth;
  static readonly GetCurrentModelDeployment: EdgifyServiceGetCurrentModelDeployment;
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

export class EdgifyServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getPrediction(
    requestMessage: prediction_pb.PredictionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prediction_pb.PredictionResponse|null) => void
  ): UnaryResponse;
  getPrediction(
    requestMessage: prediction_pb.PredictionRequest,
    callback: (error: ServiceError|null, responseMessage: prediction_pb.PredictionResponse|null) => void
  ): UnaryResponse;
  createGroundTruth(
    requestMessage: prediction_pb.GroundTruthRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prediction_pb.GroundTruthResponse|null) => void
  ): UnaryResponse;
  createGroundTruth(
    requestMessage: prediction_pb.GroundTruthRequest,
    callback: (error: ServiceError|null, responseMessage: prediction_pb.GroundTruthResponse|null) => void
  ): UnaryResponse;
  getCurrentModelDeployment(
    requestMessage: prediction_pb.GetCurrentModelDeploymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: prediction_pb.GetCurrentModelDeploymentResponse|null) => void
  ): UnaryResponse;
  getCurrentModelDeployment(
    requestMessage: prediction_pb.GetCurrentModelDeploymentRequest,
    callback: (error: ServiceError|null, responseMessage: prediction_pb.GetCurrentModelDeploymentResponse|null) => void
  ): UnaryResponse;
}

