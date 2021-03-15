import {
  EdgifyServiceClient,
  PredictionRequest,
  GroundTruthRequest,
  Prediction,
  GroundTruth,
  Image
} from './../Prediction';
import { AnalyticsServiceClient, CreateAnalyticsEventRequest } from '../Analytics';
import { SamplesServiceClient, DeleteSampleRequest } from './../Samples';

const getGRPCUrl = (host, port) => {
  const pageProtocol = window.location.protocol;
  return `${pageProtocol}\\\\${host}:${port}`;
};

export class EdgifySDK {
  client: EdgifyServiceClient
  analytics_client: AnalyticsServiceClient
  samples_client: SamplesServiceClient

  constructor(host, port) {
    const channel = getGRPCUrl(host, port)
    this.client = new EdgifyServiceClient(channel);
    this.analytics_client = new AnalyticsServiceClient(channel);
    this.samples_client = new SamplesServiceClient(channel);
  }

  getPrediction(source: string | null = null): Promise<Prediction | undefined> {
    return new Promise((resolve, reject) => {
      const req = new PredictionRequest();
      if (source) {
        const image = new Image();
        image.setImage(source);
        req.setImage(image);
      }
      this.client.getPrediction(req, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(
            res.getPrediction(),
          );
        }
      });
    });
  }

  createGroundTruth(prediction: Prediction, label: string, source: string = ''): Promise<void> {
    return new Promise((resolve, reject) => {
      const req = new GroundTruthRequest();
      const gt = new GroundTruth();
      gt.setPrediction(Prediction);
      gt.setLabel(label);
      if (source) {
        gt.setSource(source);
      }
      req.setGroundTruth(gt);
      this.client.createGroundTruth(req, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    })
  }

  deleteSample(uuid: string): Promise<void> | void{
    if (!uuid) {
      return;
    }
    const req = new DeleteSampleRequest();
    req.setUuid(uuid);
    return new Promise((resolve, reject) => {
      this.samples_client.deleteSample(req, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  startCustomerTransaction(): Promise<void> {
    const req = new CreateAnalyticsEventRequest();
    req.setName('TransactionCustomerStart');
    return new Promise((resolve, reject) => {
      this.analytics_client.CreateEvent(req, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  endCustomerTransaction(): Promise<void> {
    const req = new CreateAnalyticsEventRequest();
    req.setName('TransactionCustomerEnd');
    return new Promise((resolve, reject) => {
      this.analytics_client.CreateEvent(req, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}