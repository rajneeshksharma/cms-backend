import Cms from './cms.model';

export default {
    async getdata (req, res) {
        try {

          const data = await Cms.find({});

          if(!data)
          return res.status(404).json({error: "No Data Found"});
          return res.status(200).json(data);
          
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
}