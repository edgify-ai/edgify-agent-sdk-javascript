// package: edgify
// file: analytics.proto

var analytics_pb = require("./analytics_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AnalyticsService = (function () {
  function AnalyticsService() {}
  AnalyticsService.serviceName = "edgify.AnalyticsService";
  return AnalyticsService;
}());

AnalyticsService.CreateEvent = {
  methodName: "CreateEvent",
  service: AnalyticsService,
  requestStream: false,
  responseStream: false,
  requestType: analytics_pb.CreateAnalyticsEventRequest,
  responseType: analytics_pb.CreateAnalyticsEventResponse
};

exports.AnalyticsService = AnalyticsService;

function AnalyticsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AnalyticsServiceClient.prototype.createEvent = function createEvent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AnalyticsService.CreateEvent, {
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

exports.AnalyticsServiceClient = AnalyticsServiceClient;

