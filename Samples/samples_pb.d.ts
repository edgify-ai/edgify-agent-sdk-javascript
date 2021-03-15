// package: edgify
// file: samples.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetSamplesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSamplesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSamplesRequest): GetSamplesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSamplesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSamplesRequest;
  static deserializeBinaryFromReader(message: GetSamplesRequest, reader: jspb.BinaryReader): GetSamplesRequest;
}

export namespace GetSamplesRequest {
  export type AsObject = {
  }
}

export class GetSamplesResponse extends jspb.Message {
  clearSamplesList(): void;
  getSamplesList(): Array<DataSample>;
  setSamplesList(value: Array<DataSample>): void;
  addSamples(value?: DataSample, index?: number): DataSample;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSamplesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSamplesResponse): GetSamplesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSamplesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSamplesResponse;
  static deserializeBinaryFromReader(message: GetSamplesResponse, reader: jspb.BinaryReader): GetSamplesResponse;
}

export namespace GetSamplesResponse {
  export type AsObject = {
    samplesList: Array<DataSample.AsObject>,
  }
}

export class UpdateSampleRequest extends jspb.Message {
  hasSample(): boolean;
  clearSample(): void;
  getSample(): DataSample | undefined;
  setSample(value?: DataSample): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSampleRequest): UpdateSampleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSampleRequest;
  static deserializeBinaryFromReader(message: UpdateSampleRequest, reader: jspb.BinaryReader): UpdateSampleRequest;
}

export namespace UpdateSampleRequest {
  export type AsObject = {
    sample?: DataSample.AsObject,
  }
}

export class UpdateSampleResponse extends jspb.Message {
  hasSample(): boolean;
  clearSample(): void;
  getSample(): DataSample | undefined;
  setSample(value?: DataSample): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSampleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSampleResponse): UpdateSampleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSampleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSampleResponse;
  static deserializeBinaryFromReader(message: UpdateSampleResponse, reader: jspb.BinaryReader): UpdateSampleResponse;
}

export namespace UpdateSampleResponse {
  export type AsObject = {
    sample?: DataSample.AsObject,
  }
}

export class AddSampleRequest extends jspb.Message {
  hasSample(): boolean;
  clearSample(): void;
  getSample(): DataSample | undefined;
  setSample(value?: DataSample): void;

  getFile(): Uint8Array | string;
  getFile_asU8(): Uint8Array;
  getFile_asB64(): string;
  setFile(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSampleRequest): AddSampleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddSampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSampleRequest;
  static deserializeBinaryFromReader(message: AddSampleRequest, reader: jspb.BinaryReader): AddSampleRequest;
}

export namespace AddSampleRequest {
  export type AsObject = {
    sample?: DataSample.AsObject,
    file: Uint8Array | string,
  }
}

export class AddSampleResponse extends jspb.Message {
  hasSample(): boolean;
  clearSample(): void;
  getSample(): DataSample | undefined;
  setSample(value?: DataSample): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSampleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddSampleResponse): AddSampleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddSampleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSampleResponse;
  static deserializeBinaryFromReader(message: AddSampleResponse, reader: jspb.BinaryReader): AddSampleResponse;
}

export namespace AddSampleResponse {
  export type AsObject = {
    sample?: DataSample.AsObject,
  }
}

export class DataSample extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getLabel(): string;
  setLabel(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getOpened(): boolean;
  setOpened(value: boolean): void;

  getDatasetType(): string;
  setDatasetType(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSample.AsObject;
  static toObject(includeInstance: boolean, msg: DataSample): DataSample.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataSample, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSample;
  static deserializeBinaryFromReader(message: DataSample, reader: jspb.BinaryReader): DataSample;
}

export namespace DataSample {
  export type AsObject = {
    uuid: string,
    path: string,
    label: string,
    size: number,
    opened: boolean,
    datasetType: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    groupId: string,
  }
}

export class SyncRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SyncRequest): SyncRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncRequest;
  static deserializeBinaryFromReader(message: SyncRequest, reader: jspb.BinaryReader): SyncRequest;
}

export namespace SyncRequest {
  export type AsObject = {
  }
}

export class SyncResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SyncResponse): SyncResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncResponse;
  static deserializeBinaryFromReader(message: SyncResponse, reader: jspb.BinaryReader): SyncResponse;
}

export namespace SyncResponse {
  export type AsObject = {
  }
}

export class DeleteAllSamplesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllSamplesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllSamplesRequest): DeleteAllSamplesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAllSamplesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllSamplesRequest;
  static deserializeBinaryFromReader(message: DeleteAllSamplesRequest, reader: jspb.BinaryReader): DeleteAllSamplesRequest;
}

export namespace DeleteAllSamplesRequest {
  export type AsObject = {
  }
}

export class DeleteAllSamplesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAllSamplesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAllSamplesResponse): DeleteAllSamplesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAllSamplesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAllSamplesResponse;
  static deserializeBinaryFromReader(message: DeleteAllSamplesResponse, reader: jspb.BinaryReader): DeleteAllSamplesResponse;
}

export namespace DeleteAllSamplesResponse {
  export type AsObject = {
  }
}

export class DeleteSamplesRequest extends jspb.Message {
  clearUuidsList(): void;
  getUuidsList(): Array<string>;
  setUuidsList(value: Array<string>): void;
  addUuids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSamplesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSamplesRequest): DeleteSamplesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSamplesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSamplesRequest;
  static deserializeBinaryFromReader(message: DeleteSamplesRequest, reader: jspb.BinaryReader): DeleteSamplesRequest;
}

export namespace DeleteSamplesRequest {
  export type AsObject = {
    uuidsList: Array<string>,
  }
}

export class DeleteSampleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSampleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSampleResponse): DeleteSampleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSampleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSampleResponse;
  static deserializeBinaryFromReader(message: DeleteSampleResponse, reader: jspb.BinaryReader): DeleteSampleResponse;
}

export namespace DeleteSampleResponse {
  export type AsObject = {
  }
}

export class DeleteSampleRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSampleRequest): DeleteSampleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSampleRequest;
  static deserializeBinaryFromReader(message: DeleteSampleRequest, reader: jspb.BinaryReader): DeleteSampleRequest;
}

export namespace DeleteSampleRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class DeleteSamplesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSamplesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSamplesResponse): DeleteSamplesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSamplesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSamplesResponse;
  static deserializeBinaryFromReader(message: DeleteSamplesResponse, reader: jspb.BinaryReader): DeleteSamplesResponse;
}

export namespace DeleteSamplesResponse {
  export type AsObject = {
  }
}

