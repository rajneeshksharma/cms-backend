import CmsPage from './cmsPage.model';


export default {
    async getCmsData (req, res) {
        try {
          const data = await CmsPage.findOne({slug : req.query.slug});
          if(!data)
          return res.status(404).json({error: "No Data Found"});
          return res.status(200).json(data);
          
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },
    async postCmsData (req, res ){ 
        try {
           const Data =  await CmsPage.findByIdAndUpdate({_id: req.body.id}, {$set : {content : req.body.content}});
           if(!Data)
           return res.status(404).json({error : "Some Error in Process"});
           return res.status(200).json({Success :"Data changed :) "  })

        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
}