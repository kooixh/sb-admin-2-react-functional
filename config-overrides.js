const { override, addWebpackAlias, adjustStyleLoaders } = require('customize-cra');
const path = require('path');

module.exports = {
    webpack: override(
        addWebpackAlias({
            '@app': path.resolve(__dirname, 'src'),
        }),
        adjustStyleLoaders((rules) => {
            if (rules.test && rules.test.toString().includes('sass')) {
                rules.use.push({
                    loader: 'sass-resources-loader',
                    options: {
                        sourceMap: true,
                        resources: ['./src/styles/styleguide/default/index.scss'],
                    },
                });
            }
        })
    ),
};
