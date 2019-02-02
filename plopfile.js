module.exports = function(plop) {
  plop.setPartial(
    'prettierCommand',
    () =>
      'prettier --write \\"{{__tests__,src}/**/*,*}.{js,jsx,ts,tsx,css,scss,sass,less,json,md,markdown,yaml,yml}\\"'
  )

  plop.setGenerator('plugin', {
    description: 'create a renderer entry for a plugin',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'plugin name: '
      }
    ],
    actions: function(data) {
      const createPattern = (entry, negativeLookahead, terminatingString) => {
        return new RegExp(
          `(${entry}([\\s\\S](?!(${negativeLookahead})|${terminatingString}))*)`,
          'mi'
        )
      }

      const alphabeticExclusionPattern = rawName => {
        const name = rawName.toLowerCase()
        let parts = []
        for (let i = 0; i < name.length; i++) {
          if (!/[a-y]/.test(name.charAt(i))) {
            continue
          }
          const followingChar = String.fromCharCode(name.charCodeAt(i) + 1)
          parts = [...parts, `${name.substr(0, i)}[${followingChar}-z]`]
        }
        return `(${parts.join('|')}|${name}\\w*)`
      }

      const packageNamePattern = `@serlo\\/editor-([^p]|plugin-${alphabeticExclusionPattern(
        data.name
      )})`

      const copyTemplateActions = [
        {
          type: 'addMany',
          destination: 'plugins/{{dashCase name}}/',
          base: 'plop-template/foobar/',
          templateFiles: '**/*'
        },
        {
          type: 'addMany',
          destination: 'plugins/{{dashCase name}}-renderer/',
          base: 'plop-template/foobar-renderer/',
          templateFiles: '**/*'
        }
      ]

      const nameConfigActions = [
        {
          type: 'modify',
          path: 'tsconfig.json',
          pattern: createPattern('"paths":\\s*?\\{', packageNamePattern, '\\}'),
          template:
            '$1"@serlo/editor-plugin-{{dashCase name}}": ["plugins/{{dashCase name}}/src"],\n"@serlo/editor-plugin-{{dashCase name}}-renderer": ["plugins/{{dashCase name}}-renderer/src"],\n'
        },
        {
          type: 'modify',
          path: 'packages/demo/.storybook/webpack.config.js',
          pattern: createPattern('alias:\\s*?\\{', packageNamePattern, '\\}'),
          template: `$1'@serlo/editor-plugin-{{dashCase name}}': '@serlo/editor-plugin-{{dashCase name}}/src',\n'@serlo/editor-plugin-{{dashCase name}}-renderer':'@serlo/editor-plugin-{{dashCase name}}-renderer/src',\n`
        }
      ]
      const editorPluginsActions = [
        {
          type: 'modify',
          path: 'packages/editor-plugins/src/index.ts',
          pattern: createPattern('', `import.*${packageNamePattern}`, '\n[^i]'),
          template:
            "$1\nimport { {{camelCase name}}Plugin } from '@serlo/editor-plugin-{{dashCase name}}'"
        },
        {
          type: 'modify',
          path: 'packages/editor-plugins/src/index.ts',
          pattern: createPattern(
            'createPluginFactory\\(\\{\\n',
            `\\[Plugin\\.${alphabeticExclusionPattern(data.name)}`,
            '\\}'
          ),
          template:
            '$1[Plugin.{{properCase name}}]: {{camelCase name}}Plugin,\n'
        },
        {
          type: 'modify',
          path: 'packages/editor-plugins/package.json',
          pattern: createPattern(
            '"dependencies":\\s*?\\{',
            packageNamePattern,
            '\\}'
          ),
          template: '$1"@serlo/editor-plugin-{{dashCase name}}": "0.0.0",\n'
        }
      ]

      const rendererPluginsActions = [
        {
          type: 'modify',
          path: 'packages/editor-plugins-renderer/src/index.ts',
          pattern: createPattern('', `import.*${packageNamePattern}`, '\n[^i]'),
          template:
            "$1\nimport { {{camelCase name}}RendererPlugin } from '@serlo/editor-plugin-{{dashCase name}}'"
        },
        {
          type: 'modify',
          path: 'packages/editor-plugins-renderer/src/index.ts',
          pattern: createPattern(
            'createPluginFactory\\(\\{\\n',
            `\\[Plugin\\.${alphabeticExclusionPattern(data.name)}`,
            `\\}`
          ),
          template:
            '$1[Plugin.{{properCase name}}]: {{camelCase name}}RendererPlugin,\n'
        },
        {
          type: 'modify',
          path: 'packages/editor-plugins-renderer/package.json',
          pattern: createPattern(
            '"dependencies":\\s*?\\{',
            packageNamePattern,
            '\\{'
          ),
          template: '$1"@serlo/editor-plugin-{{dashCase name}}": "0.0.0",\n'
        }
      ]

      const pluginsRegistryActions = [
        {
          type: 'modify',
          path: 'packages/editor-plugins-registry/src/index.ts',
          pattern: createPattern(
            'export enum Plugin \\{\\n',
            `\\n\\s*${alphabeticExclusionPattern(data.name)}`,
            '\\}'
          ),
          template: "$1,\n{{properCase name}} = '{{dashCase name}}'"
        },
        {
          type: 'modify',
          path: 'packages/editor-plugins-registry/src/index.ts',
          pattern: createPattern(
            'newPlugins = \\[',
            `Plugin\\.${alphabeticExclusionPattern(data.name)}`,
            '\\]'
          ),
          template: '$1\nPlugin.{{properCase name}},'
        }
      ]

      return [].concat(
        copyTemplateActions,
        nameConfigActions,
        editorPluginsActions,
        rendererPluginsActions,
        pluginsRegistryActions
      )
    }
  })
}
