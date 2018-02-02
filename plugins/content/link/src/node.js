import React, { Component }from 'react'

import type { Props } from 'ory-editor-plugins-slate/lib/plugins/props'
import Portal from 'react-portal'
import {darkBlack} from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import position from 'selection-position'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

class Link extends Component {
	state = {
		href: '',
		title: ''
	}

	props: Props

	onHrefChange = e => {
		const { node } = this.props
		const { data } = node
		this.setState({ href: e.target.value })
		if (data.get('isPortal')){
			this.renderHref(e.target.value)
		}
	}

	onTitleChange = e => {
		this.setState({ title: e.target.value })
	}

	renderHref = newHref => {
		const { editor, node } = this.props
		const { key } = node
		const { data } = node

		const next = editor
			.getState()
			.transform()
			.setNodeByKey(key, {
				data: {
					href: newHref,
					isPortal: data.get('isPortal')
				}
			})	
			.apply()

		editor.onChange(next)
	}

	handleOpen = portal => {
		const textfield = portal.firstChild
		const { top } = position()
		textfield.style.opacity= 1
		textfield.style.top = `${top + window.scrollY - textfield.offsetHeight}px`
		textfield.style.left = `${document.body.clientWidth / 2 - textfield.offsetWidth / 2}px`
	}

	handleClose = () => {
		this.setState({ open: false })
		const{ editor, state } = this.props

		const newState = state
			.transform()
			.focus()
			.apply()
		window.setTimeout(() => editor.onChange(newState), 1)
	}

	handleSubmit = () => {
		const {title, href} = this.state
		const {editor, node} = this.props
		const {onChange, focus}	= editor
		const { key } = node

		if (!href) {
			this.handleClose()
			return
		}

		const newState = this.props.state
			.transform()
			.insertText(title)
			.extend(-title.length)
			.setNodeByKey(key,{
				data: { 
					href: href,
					isPortal: true	
				}
			})
			.focus()
			.collapseToEnd()
			.apply()

		window.setTimeout(() => onChange(newState), 1)
		window.setTimeout(() => focus(), 100)
		return
	}

	focusTextField = () => {
		setTimeout (() => {
			this.input && this.input.focus()
		}, 0)
	}

	focuReference = input => {
		if (input) this.input = input
	}

	render(){
		const { node, state, attributes, children } = this.props
		const { data } = node
		const hasLinks = state.isFocused && state.selection.hasEdgeIn(node)

		switch (data.get('isPortal')){
			case true:
				const href = data.get('href')

				return (
					<span {...attributes} >
						<Portal isOpened={hasLinks} onOpen={this.handleOpen}>    
							<MuiThemeProvider muiTheme={getMuiTheme()}>
								<div 
									className="ory-prevent-blur ory-plugins-content-slate-inline-toolbar"
									style={{ 
										display: 'inline-block',        
										border: `${darkBlack} 1px solid`,
										borderRadius: '4px 4px 0',      
										backgroundColor: darkBlack,     
										padding: '0 12px'               
									}}>        

									<div >          
										<TextField
											floatingLabelText="URL"
											hintText="http://example.com/my/link.html"
											inputStyle={{color: 'white'}}
											floatingLabelStyle={{color: 'white'}}
											hintStyle={{ color: 'grey' }}
											style={{ width: '600px'}}
											value={this.state.href}
											onChange={this.onHrefChange}
										/>
									</div>
								</div>
							</MuiThemeProvider>
						</Portal>

						<a href={href}>
							{children}
						</a>

				</span>)
				break;	
				
			case false:

				const	actions = [
					<FlatButton
						key="0"
						label="Cancel"
						primary
						onTouchTap={this.handleClose}
					/>,
					<FlatButton
						key="1"
						label="Submit"
						primary
						onTouchTap={this.handleSubmit}
					/>
				]

				return (
					<MuiThemeProvider muiTheme={getMuiTheme()}>
						<span>
							<span>
								<Dialog
									className="ory-prevent-blur"
									title="Create a link"
									modal={false}
									open={true}
									actions={[actions]}
								>
									{this.state.wasExpanded ? null : (
										<div>
											<TextField
												hintText="Link title"
												onChange={this.onTitleChange}
												value={this.state.title}
											/>
										</div>
									)}

									<div ref={this.onRef}>
										<TextField
											hintText="http://example.com/my/link.html"
											onChange={this.onHrefChange}
											value={this.state.href}
										/>
									</div>
								</Dialog>
							</span>
						</span>
					</MuiThemeProvider>
				)
		}
	}
}

export default Link
