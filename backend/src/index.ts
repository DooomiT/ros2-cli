import express from 'express';
import bodyParser from 'body-parser';
import {readYAML} from './utils/readYAML';
import {writeYAML} from './utils/writeYAML';

const app = express();
app.use(bodyParser.json());
const port = 3000;
const configPath = '../config.yml';

app.get('/config', async function(req:any, res:any) {
  const data = await readYAML(configPath, true);
  res.json(data);
});

app.post('/config', async function(req:any, res:any) {
  const data = await readYAML(configPath, true);
  const receivedData = req.body;
  const mergedData = Object.assign(data, receivedData);
  await writeYAML(mergedData, configPath);
});

app.post('/run', function(req:any, res:any) {

});

app.post('/build', function(req:any, res:any) {

});

app.get('/logs', function(req:any, res:any) {

});

app.listen(port);
