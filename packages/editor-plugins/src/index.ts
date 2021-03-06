import { createAlphabetSortPlugin } from '@serlo/editor-plugin-alphabet-sort'
import { anchorPlugin } from '@serlo/editor-plugin-anchor'
import { blockquotePlugin } from '@serlo/editor-plugin-blockquote'
import { equationsPlugin } from '@serlo/editor-plugin-equations'
import { geogebraPlugin } from '@serlo/editor-plugin-geogebra'
import { h5pPlugin } from '@serlo/editor-plugin-h5p'
import { highlightPlugin } from '@serlo/editor-plugin-highlight'
import { hintPlugin } from '@serlo/editor-plugin-hint'
import { injectionPlugin } from '@serlo/editor-plugin-injection'
import { inputExercisePlugin } from '@serlo/editor-plugin-input-exercise'
import { licensePlugin } from '@serlo/editor-plugin-license'
import { matchingExercisePlugin } from '@serlo/editor-plugin-matching-exercise'
import { scMcExercisePlugin } from '@serlo/editor-plugin-sc-mc-exercise'
import { solutionPlugin } from '@serlo/editor-plugin-solution'
import { spoilerPlugin } from '@serlo/editor-plugin-spoiler'
import { stepByStepPlugin } from '@serlo/editor-plugin-step-by-step'
import { tablePlugin } from '@serlo/editor-plugin-table'
import { createImagePlugin, UploadConfig } from '@serlo/editor-plugin-image'
import { textPlugin } from '@serlo/editor-plugin-text'
import {
  createPluginFactory,
  EditorPluginRegistry,
  Plugin
} from '@serlo/editor-plugins-registry'

const uploadConfig: UploadConfig = {
  url: 'https://de.serlo.org/attachment/upload',
  paramName: 'attachment[file]',
  maxFileSize: 2 * 1024 * 1024,
  allowedExtensions: ['gif', 'jpg', 'jpeg', 'png', 'svg'],
  getAdditionalFields: () => {
    return {
      type: 'file',
      csrf: ((window as unknown) as { csrf: string }).csrf
    }
  },
  getStateFromResponse: (response: { files: Array<{ location: string }> }) => {
    return {
      src: response.files[0].location
    }
  }
}

const alphabetSortPlugin = createAlphabetSortPlugin({ upload: uploadConfig })
const imagePlugin = createImagePlugin({
  upload: uploadConfig
})

const registry: EditorPluginRegistry = {
  [Plugin.AlphabetSort]: alphabetSortPlugin,
  [Plugin.Anchor]: anchorPlugin,
  [Plugin.Blockquote]: blockquotePlugin,
  [Plugin.Equations]: equationsPlugin,
  [Plugin.Geogebra]: geogebraPlugin,
  [Plugin.H5p]: h5pPlugin,
  [Plugin.Highlight]: highlightPlugin,
  [Plugin.Hint]: hintPlugin,
  [Plugin.Image]: imagePlugin,
  [Plugin.Injection]: injectionPlugin,
  [Plugin.InputExercise]: inputExercisePlugin,
  [Plugin.License]: licensePlugin,
  [Plugin.MatchingExercise]: matchingExercisePlugin,
  [Plugin.ScMcExercise]: scMcExercisePlugin,
  [Plugin.Solution]: solutionPlugin,
  [Plugin.Spoiler]: spoilerPlugin,
  [Plugin.StepByStep]: stepByStepPlugin,
  [Plugin.Table]: tablePlugin,
  [Plugin.Text]: textPlugin
}

export const createEditorPlugins = createPluginFactory(registry)

export const defaultPlugin = Plugin.Text
