iOSIndexTemplateStore = {
  templatePath: `${__dirname}/../../templates/ios/index.hb`,
  usedPartials: [
    {
      path: `${__dirname}/../../partials/shared/generated_header.hb`,
      name: 'generatedHeader'
    },
    {
      path: `${__dirname}/../../partials/shared/use_strict.hb`,
      name: 'useStrict'
    },
    {
      path: `${__dirname}/../../partials/shared/require.hb`,
      name: 'require'
    },
    {
      path: `${__dirname}/../../partials/shared/register_component.hb`,
      name: 'registerComponent'
    }
  ],
  usedComponents: [
    {
      source: `${__dirname}/../../components/ios/templates/index/index.js`,
      style: `${__dirname}/../../components/ios/templates/index/styles.js`,
      destinationFolder: 'components/ios/templates/index'
    },
    {
      source: `${__dirname}/../../components/ios/text/paragraph/paragraph.js`,
      style: `${__dirname}/../../components/ios/text/paragraph/styles.js`,
      destinationFolder: 'components/ios/text/paragraph'
    }
  ],
  templateData: {
    year: new Date().getFullYear()
  },
  outputDataFilePath: '/components/ios/templates/index/default_props.json'
};

module.exports = iOSIndexTemplateStore;
