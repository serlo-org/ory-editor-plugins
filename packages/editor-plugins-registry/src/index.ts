import { Plugin as P, RendererPlugin } from '@splish-me/editor'
import * as R from 'ramda'

export enum Plugin {
  Anchor = '@serlo-org/anchor',
  Blockquote = '@serlo-org/blockquote',
  Equations = '@serlo-org/equations',
  Geogebra = '@serlo-org/geogebra',
  H5p = '@serlo-org/h5p',
  HeTitle = '@serlo/editor-plugin-he-title',
  HeMarkdown = '@serlo/editor-plugin-he-markdown',
  HeHeading = '@serlo/editor-plugin-he-heading',
  Highlight = '@serlo-org/highlight',
  Hint = '@serlo-org/hint',
  Image = '@splish-me/image',
  Injection = '@serlo-org/injection',
  InputExercise = '@serlo-org/input-exercise',
  License = '@serlo-org/license',
  MatchingExercise = '@serlo-org/matching-exercise',
  ScMcExercise = '@serlo-org/sc-mc-exercise',
  Solution = '@serlo-org/solution',
  Spoiler = '@serlo-org/spoiler',
  StepByStep = '@serlo-org/step-by-step',
  Table = '@serlo-org/table',
  Text = '@splish-me/slate',
}

const defaultPlugins = [
  Plugin.Text,
  Plugin.Image,
  Plugin.Spoiler,
  Plugin.Injection,
  Plugin.Anchor,
  Plugin.Blockquote,
  Plugin.Geogebra,
  Plugin.Table,
  Plugin.H5p
]

const newPlugins = [
  Plugin.HeTitle,

  Plugin.HeMarkdown,

  Plugin.HeHeading,
  Plugin.Highlight,
  Plugin.Equations,
  Plugin.InputExercise,
  Plugin.License,
  Plugin.MatchingExercise,
  Plugin.StepByStep
]

const exercisePlugins = [Plugin.Solution, Plugin.Hint, Plugin.ScMcExercise]

export const createPluginFactory = (
  pluginRegistry: PluginRegistry
) => editableType => {
  const plugins = choosePlugins(editableType)
  return R.pick(plugins, pluginRegistry)
}

function choosePlugins(type: string) {
  if (type === 'text-exercise' || type === 'grouped-text-exercise') {
    return [...defaultPlugins, ...exercisePlugins]
  }

  if (type === 'all') {
    return [...defaultPlugins, ...exercisePlugins, ...newPlugins]
  }

  return defaultPlugins
}

export type PluginRegistry = EditorPluginRegistry | RendererPluginRegistry

export type EditorPluginRegistry = Record<Plugin, P<any>>
export type RendererPluginRegistry = Record<Plugin, RendererPlugin<any>>
