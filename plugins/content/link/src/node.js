import React, { Component }from 'react'
import type { Props } from 'ory-editor-plugins-slate/lib/plugins/props'
import Portal from 'react-portal'
import {darkBlack} from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import position from 'selection-position'

class Link extends React.Component {
	state = {
 	  href: '',
		title: ''
	}

	props: Props

	onHrefChange = e => {
		this.setState({ href: e.target.value })
		this.renderHref(e.target.value)
	}

	onTitleChange = e => {
		this.setState({ title: e.target.value })
		this.renderTitle(e.target.value)
	}

	renderHref = newHref => {
		const{ editor, node } = this.props
		const { key } = node

		const next = editor
			.getState()
			.transform()
			.setNodeByKey(key, {
				data: {
					href: newHref,
				}
			})	
			.apply()

		editor.onChange(next)
	}

	renderTitle = newTitle => {
		const{ editor, node } = this.props
		const { key } = node

		const next = editor
			.getState()
			.transform()
			.setNodeByKey(key, {
				data: {
					title: newTitle,
					inline: this.state.inline
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
	
	render(){
		const { node, state, attributes, children } = this.props
		const { data } = node
		const href = data.get('href')
		const hasLinks = state.isFocused && state.selection.hasEdgeIn(node)

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
							<div>
								<TextField
									floatingLabelText="Link Title"
									hintText="Link title"
									inputStyle={{color: 'white'}}
									floatingLabelStyle={{color: 'white'}}
									hintStyle={{ color: 'grey' }}
									style={{ width: '600px'}}
									value={this.state.title}
									onChange={this.onTitleChange}
								/>
							</div>
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
			</span>


		)
	}
}
export default Link
