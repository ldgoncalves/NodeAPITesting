module.exports = express => {
    const router = express.Router();

    router.get('/users', (req, res) => {
        res.json({
            healthy: true
        });
    });

    return router;
};

//# sourceMappingURL=user-compiled.js.map

//# sourceMappingURL=user-compiled-compiled.js.map