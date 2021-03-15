// package: edgify
// file: samples.proto

import * as samples_pb from "./samples_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SamplesServiceGetSamples = {
  readonly methodName: string;
  readonly service: typeof SamplesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof samples_pb.GetSamplesRequest;
  readonly responseType: typeof samples_pb.GetSamplesResponse;
};

type SamplesServiceAddSample = {
  readonly methodName: string;
  readonly service: typeof SamplesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof samples_pb.AddSampleRequest;
  readonly responseType: typeof samples_pb.AddSampleResponse;
};

type SamplesServiceUpdateSample = {
  readonly methodName: string;
  readonly service: typeof SamplesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof samples_pb.UpdateSampleRequest;
  readonly responseType: typeof samples_pb.UpdateSampleResponse;
};

type SamplesServiceSync = {
  readonly methodName: string;
  readonly service: typeof SamplesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof samples_pb.SyncRequest;
  readonly responseType: typeof samples_pb.SyncResponse;
};

type SamplesServiceDeleteAllSamples = {
  readonly methodName: string;
  readonly service: typeof SamplesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof samples_pb.DeleteAllSamplesRequest;
  readonly responseType: typeof samples_pb.DeleteAllSamplesResponse;
};

type SamplesServiceDeleteSamples = {
  readonly methodName: string;
  readonly service: typeof SamplesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof samples_pb.DeleteSamplesRequest;
  readonly responseType: typeof samples_pb.DeleteSamplesResponse;
};

type SamplesServiceDeleteSample = {
  readonly methodName: string;
  readonly service: typeof SamplesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof samples_pb.DeleteSampleRequest;
  readonly responseType: typeof samples_pb.DeleteSampleResponse;
};

export class SamplesService {
  static readonly serviceName: string;
  static readonly GetSamples: SamplesServiceGetSamples;
  static readonly AddSample: SamplesServiceAddSample;
  static readonly UpdateSample: SamplesServiceUpdateSample;
  static readonly Sync: SamplesServiceSync;
  static readonly DeleteAllSamples: SamplesServiceDeleteAllSamples;
  static readonly DeleteSamples: SamplesServiceDeleteSamples;
  static readonly DeleteSample: SamplesServiceDeleteSample;
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

export class SamplesServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getSamples(
    requestMessage: samples_pb.GetSamplesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: samples_pb.GetSamplesResponse|null) => void
  ): UnaryResponse;
  getSamples(
    requestMessage: samples_pb.GetSamplesRequest,
    callback: (error: ServiceError|null, responseMessage: samples_pb.GetSamplesResponse|null) => void
  ): UnaryResponse;
  addSample(
    requestMessage: samples_pb.AddSampleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: samples_pb.AddSampleResponse|null) => void
  ): UnaryResponse;
  addSample(
    requestMessage: samples_pb.AddSampleRequest,
    callback: (error: ServiceError|null, responseMessage: samples_pb.AddSampleResponse|null) => void
  ): UnaryResponse;
  updateSample(
    requestMessage: samples_pb.UpdateSampleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: samples_pb.UpdateSampleResponse|null) => void
  ): UnaryResponse;
  updateSample(
    requestMessage: samples_pb.UpdateSampleRequest,
    callback: (error: ServiceError|null, responseMessage: samples_pb.UpdateSampleResponse|null) => void
  ): UnaryResponse;
  sync(
    requestMessage: samples_pb.SyncRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: samples_pb.SyncResponse|null) => void
  ): UnaryResponse;
  sync(
    requestMessage: samples_pb.SyncRequest,
    callback: (error: ServiceError|null, responseMessage: samples_pb.SyncResponse|null) => void
  ): UnaryResponse;
  deleteAllSamples(
    requestMessage: samples_pb.DeleteAllSamplesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: samples_pb.DeleteAllSamplesResponse|null) => void
  ): UnaryResponse;
  deleteAllSamples(
    requestMessage: samples_pb.DeleteAllSamplesRequest,
    callback: (error: ServiceError|null, responseMessage: samples_pb.DeleteAllSamplesResponse|null) => void
  ): UnaryResponse;
  deleteSamples(
    requestMessage: samples_pb.DeleteSamplesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: samples_pb.DeleteSamplesResponse|null) => void
  ): UnaryResponse;
  deleteSamples(
    requestMessage: samples_pb.DeleteSamplesRequest,
    callback: (error: ServiceError|null, responseMessage: samples_pb.DeleteSamplesResponse|null) => void
  ): UnaryResponse;
  deleteSample(
    requestMessage: samples_pb.DeleteSampleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: samples_pb.DeleteSampleResponse|null) => void
  ): UnaryResponse;
  deleteSample(
    requestMessage: samples_pb.DeleteSampleRequest,
    callback: (error: ServiceError|null, responseMessage: samples_pb.DeleteSampleResponse|null) => void
  ): UnaryResponse;
}

