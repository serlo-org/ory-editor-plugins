import * as React from 'react'
import { ContactCardRenderer } from './contact-card.renderer'
import { PluginRendererProps } from '@splish-me/editor'
import { styled } from '@serlo/editor-ui'

export const SortContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  alignSelf: 'center'
})
export class AlphabetSortRenderer extends React.Component<
  PluginRendererProps<AlphabetSortProps>
> {
  public render() {
    return (
      <SortContainer>
        {this.props.state.contacts
          ? this.props.state.contacts.map((contact, index) => {
              return (
                <ContactCardRenderer
                  key={index}
                  contact={contact}
                  renderName={() => {
                    return <strong>{contact.name}</strong>
                  }}
                  renderProfileImage={() => contact.src}
                />
              )
            })
          : null}
      </SortContainer>
    )
  }
}

export interface AlphabetSortProps {
  contacts?: ContactProps[]
}

export interface ContactProps {
  name?: string
  workingArea?: string
  typeOfContact?: string
  contactInfo?: string
  altTypeOfContact?: string
  src?: string
}
