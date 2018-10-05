const postcss = require('postcss');
const path = require('path');

// Webpack loader that prefixes rule selectors with an attribute.
// The purpose is to scope them in the context of this attribute.
module.exports = postcss.plugin('postcss-rule-scope', function(options) {
    if (!options || !options.metaFileRoot) {
        throw new Error('No path to meta file is specified');
    }

    const prefix = require(path.join(options.metaFileRoot, 'postcss-rule-scope-meta.js')).prefix;

    return function(css) {
        css.walkRules(function(rule) {
            // One selector can be composed by multiple comma separated 'parts'.
            // Each 'part' must be prefixed with the custom attribute (prefix).
            rule.selector = rule.selector.split(',')
                .map(function(part) {
                    if (part.indexOf(':root') !== -1) {
                        return `${part.replace(':root', `[${prefix}]`)}`;
                    }

                    return `[${prefix}] ${part}`;
                })
                .join();
        });
    };
});