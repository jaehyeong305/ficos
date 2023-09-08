/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // NOTE(hajae): webpack 설정으로 scss에서는 kebab, tsx에서는 camel case를 사용가능
    webpack: (config) => {
        const rules = config.module.rules
            .find((rule) => typeof rule.oneOf === 'object').oneOf.filter((rule) => Array.isArray(rule.use));
        rules.forEach((rule) => {
            rule.use.forEach((moduleLoader) => {
                if (
                    moduleLoader.loader !== undefined
                    && moduleLoader.loader.includes('css-loader')
                    && typeof moduleLoader.options.modules === 'object'
                    ) {
                    moduleLoader.options = {
                        ...moduleLoader.options,
                        modules: {
                            ...moduleLoader.options.modules,
                            // This is where we allow camelCase class names
                            exportLocalsConvention: 'camelCase'
                        }
                    };
                }
            });
        });
        return config;
    }
}

module.exports = nextConfig
