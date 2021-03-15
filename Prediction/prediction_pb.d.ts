// package: edgify
// file: prediction.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PredictionItem extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<string>;
  setDataList(value: Array<string>): void;
  addData(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionItem.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionItem): PredictionItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PredictionItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionItem;
  static deserializeBinaryFromReader(message: PredictionItem, reader: jspb.BinaryReader): PredictionItem;
}

export namespace PredictionItem {
  export type AsObject = {
    dataList: Array<string>,
  }
}

export class Prediction extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getDuration(): number;
  setDuration(value: number): void;

  getPredictedAt(): string;
  setPredictedAt(value: string): void;

  getModelId(): number;
  setModelId(value: number): void;

  clearPredictionsList(): void;
  getPredictionsList(): Array<PredictionItem>;
  setPredictionsList(value: Array<PredictionItem>): void;
  addPredictions(value?: PredictionItem, index?: number): PredictionItem;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): Image | undefined;
  setImage(value?: Image): void;

  getSource(): string;
  setSource(value: string): void;

  getCertain(): boolean;
  setCertain(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Prediction.AsObject;
  static toObject(includeInstance: boolean, msg: Prediction): Prediction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Prediction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Prediction;
  static deserializeBinaryFromReader(message: Prediction, reader: jspb.BinaryReader): Prediction;
}

export namespace Prediction {
  export type AsObject = {
    uuid: string,
    duration: number,
    predictedAt: string,
    modelId: number,
    predictionsList: Array<PredictionItem.AsObject>,
    image?: Image.AsObject,
    source: string,
    certain: boolean,
  }
}

export class Image extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    uuid: string,
    image: Uint8Array | string,
    groupId: string,
  }
}

export class ModelDeployment extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getModelId(): number;
  setModelId(value: number): void;

  getModelPath(): string;
  setModelPath(value: string): void;

  getConfigPath(): string;
  setConfigPath(value: string): void;

  getVerified(): boolean;
  setVerified(value: boolean): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelDeployment.AsObject;
  static toObject(includeInstance: boolean, msg: ModelDeployment): ModelDeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModelDeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelDeployment;
  static deserializeBinaryFromReader(message: ModelDeployment, reader: jspb.BinaryReader): ModelDeployment;
}

export namespace ModelDeployment {
  export type AsObject = {
    id: number,
    modelId: number,
    modelPath: string,
    configPath: string,
    verified: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GroundTruth extends jspb.Message {
  hasPrediction(): boolean;
  clearPrediction(): void;
  getPrediction(): Prediction | undefined;
  setPrediction(value?: Prediction): void;

  getLabel(): string;
  setLabel(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroundTruth.AsObject;
  static toObject(includeInstance: boolean, msg: GroundTruth): GroundTruth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroundTruth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroundTruth;
  static deserializeBinaryFromReader(message: GroundTruth, reader: jspb.BinaryReader): GroundTruth;
}

export namespace GroundTruth {
  export type AsObject = {
    prediction?: Prediction.AsObject,
    label: string,
    source: string,
  }
}

export class PredictionRequest extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): Image | undefined;
  setImage(value?: Image): void;

  getWithoutprediction(): boolean;
  setWithoutprediction(value: boolean): void;

  getSource(): string;
  setSource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionRequest): PredictionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionRequest;
  static deserializeBinaryFromReader(message: PredictionRequest, reader: jspb.BinaryReader): PredictionRequest;
}

export namespace PredictionRequest {
  export type AsObject = {
    image?: Image.AsObject,
    withoutprediction: boolean,
    source: string,
  }
}

export class PredictionResponse extends jspb.Message {
  hasPrediction(): boolean;
  clearPrediction(): void;
  getPrediction(): Prediction | undefined;
  setPrediction(value?: Prediction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PredictionResponse): PredictionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PredictionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictionResponse;
  static deserializeBinaryFromReader(message: PredictionResponse, reader: jspb.BinaryReader): PredictionResponse;
}

export namespace PredictionResponse {
  export type AsObject = {
    prediction?: Prediction.AsObject,
  }
}

export class GroundTruthRequest extends jspb.Message {
  hasGroundTruth(): boolean;
  clearGroundTruth(): void;
  getGroundTruth(): GroundTruth | undefined;
  setGroundTruth(value?: GroundTruth): void;

  getSource(): string;
  setSource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroundTruthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GroundTruthRequest): GroundTruthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroundTruthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroundTruthRequest;
  static deserializeBinaryFromReader(message: GroundTruthRequest, reader: jspb.BinaryReader): GroundTruthRequest;
}

export namespace GroundTruthRequest {
  export type AsObject = {
    groundTruth?: GroundTruth.AsObject,
    source: string,
  }
}

export class GroundTruthResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroundTruthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GroundTruthResponse): GroundTruthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroundTruthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroundTruthResponse;
  static deserializeBinaryFromReader(message: GroundTruthResponse, reader: jspb.BinaryReader): GroundTruthResponse;
}

export namespace GroundTruthResponse {
  export type AsObject = {
  }
}

export class GetCurrentModelDeploymentRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentModelDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentModelDeploymentRequest): GetCurrentModelDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentModelDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentModelDeploymentRequest;
  static deserializeBinaryFromReader(message: GetCurrentModelDeploymentRequest, reader: jspb.BinaryReader): GetCurrentModelDeploymentRequest;
}

export namespace GetCurrentModelDeploymentRequest {
  export type AsObject = {
  }
}

export class GetCurrentModelDeploymentResponse extends jspb.Message {
  hasModelDeployment(): boolean;
  clearModelDeployment(): void;
  getModelDeployment(): ModelDeployment | undefined;
  setModelDeployment(value?: ModelDeployment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentModelDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentModelDeploymentResponse): GetCurrentModelDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentModelDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentModelDeploymentResponse;
  static deserializeBinaryFromReader(message: GetCurrentModelDeploymentResponse, reader: jspb.BinaryReader): GetCurrentModelDeploymentResponse;
}

export namespace GetCurrentModelDeploymentResponse {
  export type AsObject = {
    modelDeployment?: ModelDeployment.AsObject,
  }
}

