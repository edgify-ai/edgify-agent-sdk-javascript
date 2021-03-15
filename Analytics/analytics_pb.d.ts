// package: edgify
// file: analytics.proto

import * as jspb from "google-protobuf";

export class CreateAnalyticsEventRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAnalyticsEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAnalyticsEventRequest): CreateAnalyticsEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAnalyticsEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAnalyticsEventRequest;
  static deserializeBinaryFromReader(message: CreateAnalyticsEventRequest, reader: jspb.BinaryReader): CreateAnalyticsEventRequest;
}

export namespace CreateAnalyticsEventRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateAnalyticsEventResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAnalyticsEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAnalyticsEventResponse): CreateAnalyticsEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAnalyticsEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAnalyticsEventResponse;
  static deserializeBinaryFromReader(message: CreateAnalyticsEventResponse, reader: jspb.BinaryReader): CreateAnalyticsEventResponse;
}

export namespace CreateAnalyticsEventResponse {
  export type AsObject = {
  }
}

