import Cms from './cms.model';

export default {
    async test (req, res) {
        try {
          console.log(req);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
}