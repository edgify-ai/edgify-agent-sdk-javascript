// package: edgify
// file: samples.proto

var samples_pb = require("./samples_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SamplesService = (function () {
  function SamplesService() {}
  SamplesService.serviceName = "edgify.SamplesService";
  return SamplesService;
}());

SamplesService.GetSamples = {
  methodName: "GetSamples",
  service: SamplesService,
  requestStream: false,
  responseStream: false,
  requestType: samples_pb.GetSamplesRequest,
  responseType: samples_pb.GetSamplesResponse
};

SamplesService.AddSample = {
  methodName: "AddSample",
  service: SamplesService,
  requestStream: false,
  responseStream: false,
  requestType: samples_pb.AddSampleRequest,
  responseType: samples_pb.AddSampleResponse
};

SamplesService.UpdateSample = {
  methodName: "UpdateSample",
  service: SamplesService,
  requestStream: false,
  responseStream: false,
  requestType: samples_pb.UpdateSampleRequest,
  responseType: samples_pb.UpdateSampleResponse
};

SamplesService.Sync = {
  methodName: "Sync",
  service: SamplesService,
  requestStream: false,
  responseStream: false,
  requestType: samples_pb.SyncRequest,
  responseType: samples_pb.SyncResponse
};

SamplesService.DeleteAllSamples = {
  methodName: "DeleteAllSamples",
  service: SamplesService,
  requestStream: false,
  responseStream: false,
  requestType: samples_pb.DeleteAllSamplesRequest,
  responseType: samples_pb.DeleteAllSamplesResponse
};

SamplesService.DeleteSamples = {
  methodName: "DeleteSamples",
  service: SamplesService,
  requestStream: false,
  responseStream: false,
  requestType: samples_pb.DeleteSamplesRequest,
  responseType: samples_pb.DeleteSamplesResponse
};

SamplesService.DeleteSample = {
  methodName: "DeleteSample",
  service: SamplesService,
  requestStream: false,
  responseStream: false,
  requestType: samples_pb.DeleteSampleRequest,
  responseType: samples_pb.DeleteSampleResponse
};

exports.SamplesService = SamplesService;

function SamplesServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SamplesServiceClient.prototype.getSamples = function getSamples(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SamplesService.GetSamples, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SamplesServiceClient.prototype.addSample = function addSample(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SamplesService.AddSample, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SamplesServiceClient.prototype.updateSample = function updateSample(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SamplesService.UpdateSample, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SamplesServiceClient.prototype.sync = function sync(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SamplesService.Sync, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SamplesServiceClient.prototype.deleteAllSamples = function deleteAllSamples(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SamplesService.DeleteAllSamples, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SamplesServiceClient.prototype.deleteSamples = function deleteSamples(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SamplesService.DeleteSamples, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SamplesServiceClient.prototype.deleteSample = function deleteSample(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SamplesService.DeleteSample, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.SamplesServiceClient = SamplesServiceClient;

