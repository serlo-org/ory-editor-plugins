import { anchorRendererPlugin } from '@serlo/editor-plugin-anchor-renderer'
import { blockquoteRendererPlugin } from '@serlo/editor-plugin-blockquote-renderer'
import { equationsRendererPlugin } from '@serlo/editor-plugin-equations-renderer'
import { geogebraRendererPlugin } from '@serlo/editor-plugin-geogebra-renderer'
import { h5pRendererPlugin } from '@serlo/editor-plugin-h5p-renderer'
import { heHeadingRendererPlugin } from '@serlo/editor-plugin-he-heading-renderer'
import { heMarkdownRendererPlugin } from '@serlo/editor-plugin-he-markdown-renderer'
import { heTitleRendererPlugin } from '@serlo/editor-plugin-he-title-renderer'
import { highlightRendererPlugin } from '@serlo/editor-plugin-highlight-renderer'
import { hintRendererPlugin } from '@serlo/editor-plugin-hint-renderer'
import { createImageRendererPlugin } from '@serlo/editor-plugin-image-renderer'
import { injectionRendererPlugin } from '@serlo/editor-plugin-injection-renderer'
import { inputExerciseRendererPlugin } from '@serlo/editor-plugin-input-exercise-renderer'
import { licenseRendererPlugin } from '@serlo/editor-plugin-license-renderer'
import { matchingExerciseRendererPlugin } from '@serlo/editor-plugin-matching-exercise-renderer'
import { scMcExerciseRendererPlugin } from '@serlo/editor-plugin-sc-mc-exercise-renderer'
import { solutionRendererPlugin } from '@serlo/editor-plugin-solution-renderer'
import { spoilerRendererPlugin } from '@serlo/editor-plugin-spoiler-renderer'
import { stepByStepRendererPlugin } from '@serlo/editor-plugin-step-by-step-renderer'
import { tableRendererPlugin } from '@serlo/editor-plugin-table-renderer'
import { textRendererPlugin } from '@serlo/editor-plugin-text-renderer'
import {
  createPluginFactory,
  Plugin,
  RendererPluginRegistry
} from '@serlo/editor-plugins-registry'

const imageRendererPlugin = createImageRendererPlugin()

const registry: RendererPluginRegistry = {
  [Plugin.Anchor]: anchorRendererPlugin,
  [Plugin.Blockquote]: blockquoteRendererPlugin,
  [Plugin.Equations]: equationsRendererPlugin,
  [Plugin.Geogebra]: geogebraRendererPlugin,
  [Plugin.H5p]: h5pRendererPlugin,
  [Plugin.HeTitle]: heTitleRendererPlugin,
  [Plugin.HeMarkdown]: heMarkdownRendererPlugin,
  [Plugin.HeHeading]: heHeadingRendererPlugin,
  [Plugin.Highlight]: highlightRendererPlugin,
  [Plugin.Hint]: hintRendererPlugin,
  [Plugin.Image]: imageRendererPlugin,
  [Plugin.Injection]: injectionRendererPlugin,
  [Plugin.InputExercise]: inputExerciseRendererPlugin,
  [Plugin.License]: licenseRendererPlugin,
  [Plugin.MatchingExercise]: matchingExerciseRendererPlugin,
  [Plugin.ScMcExercise]: scMcExerciseRendererPlugin,
  [Plugin.Solution]: solutionRendererPlugin,
  [Plugin.Spoiler]: spoilerRendererPlugin,
  [Plugin.StepByStep]: stepByStepRendererPlugin,
  [Plugin.Table]: tableRendererPlugin,
  [Plugin.Text]: textRendererPlugin
}

export const createRendererPlugins = createPluginFactory(registry)
