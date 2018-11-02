import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import Home from './api/resources/cms/home.model';
import Contactus from './api/resources/cms/contactus.model';
import Aboutus from './api/resources/cms/aboutus.model';
import {
  connect
} from './config/db';
import {
  restRouter
} from './api';
const app = express();

app.use(cors());

const PORT = 8000;

//mongodb connection
connect();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(logger('dev'));




app.use('/api', restRouter);



Home.findOne({}).then(
  (homeData) => {
    if (homeData == null){
      Home.create({ home: 'test' }).then(data => {
        if (data) {
          console.log(data);
        } else {
          console.log('Saving process error');
        }
      });
    }
    else {
    console.log('app working fine');
    }
  },
);

Contactus.findOne({}).then(
  (contactusData) => {
    if (contactusData == null){
      Contactus.create({ contactus : 'test' }).then(data => {
        if (data) {
          console.log(data);
        } else {
          console.log('Saving process error');
        }
      });
    }
    else {
    console.log('app working fine');
    }
  },
);
Aboutus.findOne({}).then(
  (aboutusData) => {
    if (aboutusData == null){
      Aboutus.create({ aboutus : 'test' }).then(data => {
        if (data) {
          console.log(data);
        } else {
          console.log('Saving process error');
        }
      });
    }
    else {
    console.log('app working fine');
    }
  },
);





app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});


app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});