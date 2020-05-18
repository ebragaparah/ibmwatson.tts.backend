const fs = require('fs');
const path = require('path');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
import Comment from '../models/Comment';

class AudioInterface {
  authenticate() {
    const key = 'd99uMRLmMgR8UjbWirUZ-aSpnHpWfLFDlA-tkGnHGJYc';
      
    this.textToSpeech = new TextToSpeechV1({
      authenticator: new IamAuthenticator({ apikey: key }),
      url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/1e4bd698-3859-48dc-96f5-7ea149e71d79'
    });
  }
    
  synthesize(req, res) {
    this.authenticate();

    Comment.findOne({ where: { id: req.params.id } })
      .then(comment => {
        const format = 'mp3';      
        const synthesizeParams = {
          text: comment.dataValues.content,
          accept: `audio/${format}`,
          voice: 'pt-BR_IsabelaV3Voice',
        };
       
        this.textToSpeech.synthesize(synthesizeParams)
          .then(response => {   
            const publicPath = path.join(__dirname, '../../../public');
            const name = req.params.id;
            const filePath = path.join(publicPath, `${name}.${format}`);

            response
              .result
              .pipe(fs.createWriteStream(filePath));
          
            res.json({status: 201, messsage: `${name}.${format} file created`});
          })
          .catch(err => {
            console.log('Error: ', err);
          });
      });
  }
}

export default AudioInterface;
