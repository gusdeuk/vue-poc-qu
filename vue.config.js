module.exports = {
    css: {
        // this stuff is to enable css modules
        // requireModuleExtension: true
    },
    chainWebpack: config => {
        // set app title
        config.plugin('html').tap(args => {
            args[0].title = 'Test Planet App';
            return args;
        });
    }
};
