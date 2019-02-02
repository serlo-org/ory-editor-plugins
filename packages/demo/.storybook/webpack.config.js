module.exports = (_baseConfig, _env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        [
          require.resolve('babel-preset-react-app'),
          { flow: false, typescript: true }
        ]
      ],
      plugins: [
        [
          require.resolve('babel-plugin-module-resolver'),
          {
            alias: {
              '@serlo/editor-plugins': '@serlo/editor-plugins/src',
              '@serlo/editor-plugins-registry':
                '@serlo/editor-plugins-registry/src',
              '@serlo/editor-plugins-renderer':
                '@serlo/editor-plugins-renderer/src',
              '@serlo/editor-plugin-anchor': '@serlo/editor-plugin-anchor/src',
              '@serlo/editor-plugin-anchor-renderer':
                '@serlo/editor-plugin-anchor-renderer/src',
              '@serlo/editor-plugin-blockquote':
                '@serlo/editor-plugin-blockquote/src',
              '@serlo/editor-plugin-blockquote-renderer':
                '@serlo/editor-plugin-blockquote-renderer/src',
              '@serlo/editor-plugin-equations':
                '@serlo/editor-plugin-equations/src',
              '@serlo/editor-plugin-equations-renderer':
                '@serlo/editor-plugin-equations-renderer/src',
              '@serlo/editor-plugin-geogebra':
                '@serlo/editor-plugin-geogebra/src',
              '@serlo/editor-plugin-geogebra-renderer':
                '@serlo/editor-plugin-geogebra-renderer/src',
              '@serlo/editor-plugin-h5p': '@serlo/editor-plugin-h5p/src',
              '@serlo/editor-plugin-h5p-renderer':
                '@serlo/editor-plugin-h5p-renderer/src',
              '@serlo/editor-plugin-he-heading':
                '@serlo/editor-plugin-he-heading/src',
              '@serlo/editor-plugin-he-heading-renderer':
                '@serlo/editor-plugin-he-heading-renderer/src',
              '@serlo/editor-plugin-he-markdown':
                '@serlo/editor-plugin-he-markdown/src',
              '@serlo/editor-plugin-he-markdown-renderer':
                '@serlo/editor-plugin-he-markdown-renderer/src',
              '@serlo/editor-plugin-he-title':
                '@serlo/editor-plugin-he-title/src',
              '@serlo/editor-plugin-he-title-renderer':
                '@serlo/editor-plugin-he-title-renderer/src',
              '@serlo/editor-plugin-highlight':
                '@serlo/editor-plugin-highlight/src',
              '@serlo/editor-plugin-highlight-renderer':
                '@serlo/editor-plugin-highlight-renderer/src',
              '@serlo/editor-plugin-hint': '@serlo/editor-plugin-hint/src',
              '@serlo/editor-plugin-hint-renderer':
                '@serlo/editor-plugin-hint-renderer/src',
              '@serlo/editor-plugin-image': '@serlo/editor-plugin-image/src',
              '@serlo/editor-plugin-image-renderer':
                '@serlo/editor-plugin-image-renderer/src',
              '@serlo/editor-plugin-injection':
                '@serlo/editor-plugin-injection/src',
              '@serlo/editor-plugin-injection-renderer':
                '@serlo/editor-plugin-injection-renderer/src',
              '@serlo/editor-plugin-input-exercise':
                '@serlo/editor-plugin-input-exercise/src',
              '@serlo/editor-plugin-input-exercise-renderer':
                '@serlo/editor-plugin-input-exercise-renderer/src',
              '@serlo/editor-plugin-license':
                '@serlo/editor-plugin-license/src',
              '@serlo/editor-plugin-license-renderer':
                '@serlo/editor-plugin-license-renderer/src',
              '@serlo/editor-plugin-matching-exercise':
                '@serlo/editor-plugin-matching-exercise/src',
              '@serlo/editor-plugin-matching-exercise-renderer':
                '@serlo/editor-plugin-matching-exercise-renderer/src',
              '@serlo/editor-plugin-sc-mc-exercise':
                '@serlo/editor-plugin-sc-mc-exercise/src',
              '@serlo/editor-plugin-sc-mc-exercise-renderer':
                '@serlo/editor-plugin-sc-mc-exercise-renderer/src',
              '@serlo/editor-plugin-solution':
                '@serlo/editor-plugin-solution/src',
              '@serlo/editor-plugin-solution-renderer':
                '@serlo/editor-plugin-solution-renderer/src',
              '@serlo/editor-plugin-spoiler':
                '@serlo/editor-plugin-spoiler/src',
              '@serlo/editor-plugin-spoiler-renderer':
                '@serlo/editor-plugin-spoiler-renderer/src',
              '@serlo/editor-plugin-step-by-step':
                '@serlo/editor-plugin-step-by-step/src',
              '@serlo/editor-plugin-step-by-step-renderer':
                '@serlo/editor-plugin-step-by-step-renderer/src',
              '@serlo/editor-plugin-table': '@serlo/editor-plugin-table/src',
              '@serlo/editor-plugin-table-renderer':
                '@serlo/editor-plugin-table-renderer/src',
              '@serlo/editor-plugin-text': '@serlo/editor-plugin-text/src',
              '@serlo/editor-plugin-text-renderer':
                '@serlo/editor-plugin-text-renderer/src',
              '@serlo/editor-ui': '@serlo/editor-ui/src',
              '@serlo/html-renderer': '@serlo/html-renderer/src',
              '@serlo/storybook-helpers': '@serlo/storybook-helpers/src'
            }
          }
        ]
      ]
    }
  })
  defaultConfig.resolve.extensions.push('.ts', '.tsx')
  defaultConfig.externals = [require('webpack-require-http')]

  return defaultConfig
}
