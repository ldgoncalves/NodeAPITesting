module.exports = (express) => {
    var router = express.Router();

    router.get('/', function(req, res){
        res.json({api: 'Welcome'});
    });

    router.get('/status', function(req, res){
        res.json({healthy: true });
    });

    router.get('/v1', function(req, res){
        res.json({hello: 'world'});
    });
    

    router.get('/user/:id', function(req, res){
        res.json({user: {id: req.params.id }});
    });

    return router;
};