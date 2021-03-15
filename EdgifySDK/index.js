"use strict";
exports.__esModule = true;
exports.EdgifySDK = void 0;
var Prediction_1 = require("./../Prediction");
var Analytics_1 = require("../Analytics");
var Samples_1 = require("./../Samples");
var getGRPCUrl = function (host, port) {
    var pageProtocol = window.location.protocol;
    return pageProtocol + "\\\\" + host + ":" + port;
};
var EdgifySDK = /** @class */ (function () {
    function EdgifySDK(host, port) {
        var channel = getGRPCUrl(host, port);
        this.client = new Prediction_1.EdgifyServiceClient(channel);
        this.analytics_client = new Analytics_1.AnalyticsServiceClient(channel);
        this.samples_client = new Samples_1.SamplesServiceClient(channel);
    }
    EdgifySDK.prototype.getPrediction = function (source) {
        var _this = this;
        if (source === void 0) { source = null; }
        return new Promise(function (resolve, reject) {
            var req = new Prediction_1.PredictionRequest();
            if (source) {
                var image = new Prediction_1.Image();
                image.setImage(source);
                req.setImage(image);
            }
            _this.client.getPrediction(req, function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.getPrediction());
                }
            });
        });
    };
    EdgifySDK.prototype.createGroundTruth = function (prediction, label, source) {
        var _this = this;
        if (source === void 0) { source = ''; }
        return new Promise(function (resolve, reject) {
            var req = new Prediction_1.GroundTruthRequest();
            var gt = new Prediction_1.GroundTruth();
            gt.setPrediction(Prediction_1.Prediction);
            gt.setLabel(label);
            if (source) {
                gt.setSource(source);
            }
            req.setGroundTruth(gt);
            _this.client.createGroundTruth(req, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    EdgifySDK.prototype.deleteSample = function (uuid) {
        var _this = this;
        if (!uuid) {
            return;
        }
        var req = new Samples_1.DeleteSampleRequest();
        req.setUuid(uuid);
        return new Promise(function (resolve, reject) {
            _this.samples_client.deleteSample(req, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    EdgifySDK.prototype.StartCustomerTransaction = function () {
        var _this = this;
        var req = new Analytics_1.CreateAnalyticsEventRequest();
        req.setName('TransactionCustomerStart');
        return new Promise(function (resolve, reject) {
            _this.analytics_client.CreateEvent(req, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    EdgifySDK.prototype.EndCustomerTransaction = function () {
        var _this = this;
        var req = new Analytics_1.CreateAnalyticsEventRequest();
        req.setName('TransactionCustomerEnd');
        return new Promise(function (resolve, reject) {
            _this.analytics_client.CreateEvent(req, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    return EdgifySDK;
}());
exports.EdgifySDK = EdgifySDK;
