import React, { Component }from 'react'
import type { Props } from 'ory-editor-plugins-slate/lib/plugins/props'
import Portal from 'react-portal'
import {darkBlack} from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

class Link extends React.Component {
	state = {
 	  href: '',
		title: ''
	}

	props: Props

	onHrefChange = e => {
		this.setState({ href: e.target.value })
	}

	onTitleChange = e => {
		this.setState({ title: e.target.value })
	}

	handleOpen = portal => {
		const textfield = portal.firstChild
		const { top } = position()
		textfield.style.opacity= 1
		textfield.style.top = `${top + window.scrollY - textfield.offsetHeight}px`
		textfield.style.left= `${document.body.clientWidth / 2 -
		textfield. offset Width / 2} px`
	}
	
	render(){
		const { node, state, attributes, children } = this.props
		const { data } = node
		const href = data.get('href')
		const hasLinks = state.isFocused && state.selection.hasEdgeIn(node)

		return (
			<span {...attributes} >
				<Portal isOpened={hasLinks} onOpen{this.handleOpen}>    
					<MuiThemeProvider muitheme={getMuiTheme()}>
						<div>        
							<div       
								className="ory-prevent-blur ory-plugins-slate-inline-toolbar"
								style={{ 
									display: 'inline-block',        
									border: `${darkBlack} 1px solid`,
									borderRadius: '4px 4px 0',      
									backgroundColor: darkBlack,     
									padding: '0 12px'               
								}}       
							>
								<TextField
									hintText="Link title"
									onChange={this.onTitleChange}
									value={this.state.title}
								/>
							</div>
							<div >          
								<TextField
									hintText="http://example.com/my/link.html"
									onChange={this.onHrefChange}
									value={this.state.href}
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
