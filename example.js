import { EdgifySDK } from "./";

const example = async () => {
  const sdk = new EdgifySDK('127.0.0.1', 8080);

  const prediction = await sdk.getPrediction();

  const { certain, uuid, predictionsList } = prediction.toObject();
  if (certain) {
    console.log('using Autobuy');
  }

  console.log('Uuid: ', uuid);
  console.log('Predictions: ', predictionsList);

  // after the transaction create the ground truth
  const label = 'banana';
  const source = 'RegularMenuSelection';

  await sdk.createGroundTruth(prediction, label, source);

  // if you need to delete a sample
  sdk.deleteSample(uuid);

  // inform edgify on transaction start
  await sdk.startCustomerTransaction();

  // inform edgify on transaction end
  await sdk.endCustomerTransaction();
}