import Home from './home.model';
import Aboutus from './aboutus.model';
import Contactus from './contactus.model';

export default {
    async getHomeData (req, res) {
        try {
          const data = await Home.findOne({});
          if(!data)
          return res.status(404).json({error: "No Data Found"});
          return res.status(200).json(data);
          
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },
    async postHomeData (req, res ){ 
        try {
           const homeData =  await Home.findByIdAndUpdate({_id: req.body.id}, {$set : {home : req.body.home }});
           if(!homeData)
           return res.status(404).json({error : "Some Error in Process"});
           return res.status(200).json({Success :"Data changed :) "  })

        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },
    async getAboutusData (req, res) {
        try {
          const aboutusData = await Aboutus.findOne({});
          if(!aboutusData)
          return res.status(404).json({error: "No Data Found"});
          return res.status(200).json(aboutusData);
          
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },
    async postAboutusData (req, res ){ 
        try {
           const aboutusDatapost =  await Aboutus.findByIdAndUpdate({_id: req.body.id}, {$set : {aboutus : req.body.aboutus }});
           if(!aboutusDatapost)
           return res.status(404).json({error : "Some Error in Process"});
           return res.status(200).json({Success :"Data changed :) "  })

        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },
    async getContactusData (req, res) {
        try {
          const contactusData = await Contactus.findOne({});
          if(!contactusData)
          return res.status(404).json({error: "No Data Found"});
          return res.status(200).json(contactusData);
          
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },
    async postContactusData (req, res ){ 
        try {
           const contactusDataPost =  await Contactus.findByIdAndUpdate({_id: req.body.id}, {$set : {contactus : req.body.contactus }});
           if(!contactusDataPost)
           return res.status(404).json({error : "Some Error in Process"});
           return res.status(200).json({Success :"Data changed :) "  })

        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },
}