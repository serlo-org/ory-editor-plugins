/* eslint-disable no-alert, prefer-reflect, default-case, react/display-name */
import LinkIcon from 'material-ui/svg-icons/content/link'
import React, { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import { ToolbarButton } from 'ory-editor-plugins-slate/lib/helpers'
import Plugin from 'ory-editor-plugins-slate/lib/plugins/Plugin'
import Link from './node'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { Data } from 'slate'
import type { Props } from 'ory-editor-plugins-slate/lib/plugins/props'
import Portal from 'react-portal'
import { darkBlack } from 'material-ui/styles/colors'

export const A = 'NEWLINK/NEWLINK'

class Button extends Component {
	state = {
		open: false,
		href: '',
		title: '',
		hadLinks: false
	}

	props: Props

	input: Component<*, *, *>

		onRef = (component: Component<*, *, *>) => {
			if (!component && true) {
				return null
			}

			const e = component.querySelector('input')
			if (e) {
				e.focus()
			}
		}

	onClick = e => {
		e.preventDefault()

		const { editorState, onChange } = this.props

		const hasLinks = editorState.inlines.some(
			(inline: any) => inline.type === A
		)

		if (hasLinks) {
			const newState = editorState
				.transform()
				.unwrapInline(A)
				.apply()
			onChange(newState)
		} 
		else {
			if (editorState.isExpanded){
				const newState = this.props.editorState
					.transform()
					.wrapInline({
						type: A, 
						data: { href: ' '}
					})
					.collapseToEnd()
					.focus()
					.apply()
				this.props.onChange(newState)
			}
			else{
				const newState = this.props.editorState
					.transform()
					.insertText(' ')
					.extend(-1)
					.wrapInline({
						type: A,
						data: { href: '' }
					})
					.collapseToEnd()
					.focus()
					.apply()

				this.props.onChange(newState)

			}
		}	
	}

	onHrefChange = e => {
		this.setState({ href: e.target.value })
	}

	onTitleChange = e => {
		this.setState({ title: e.target.value })
	}

	render() {
		const { editorState } = this.props

		const hasLinks = editorState.inlines.some(
			(inline: any) => inline.type === A
		)
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<span>
					<ToolbarButton
						onClick={this.onClick}
						isActive={hasLinks}
						icon={<LinkIcon />}
					/>
				</span>
			</MuiThemeProvider>
		)
	}
}

export default class LinkPlugin extends Plugin {
	name = 'newLink'

	nodes = { [A]: Link }

	hoverButtons = [Button]
	toolbarButtons = [Button]

	deserialize = (el, next) => {
		switch (el.tagName.toLowerCase()) {
			case 'newlink':
				return {
					kind: 'inline',
					type: A,
					nodes: next(el.childNodes),
					data: Data.create({
						href: (el.attrs.find(({ name }) => name === 'href') || {
							value: ''
						}).value
					})
				}
		}
	}

	serialize = (
		object: { type: string, kind: string, data: any },
		children: any[]
	) => {
		if (object.kind !== 'inline') {
			return
		}
		switch (object.type) {
			case A:
				return <newlink href={object.data.get('href')}>{children}</newlink>
		}
	}
}
