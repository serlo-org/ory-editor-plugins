import React from 'react'
import uuid from 'uuid'

// You are obviously not limited to material-ui, but we really enjoy
// the material-ui icons!
import InfoIcon from 'material-ui-icons/Info'

const InfoboxPlugin = ({ children }) => (
    <div className="ory-editor-plugins-infobox">
        { children }
    </div>
)

export default ({ defaultPlugin }) => ({
    Component: InfoboxPlugin,
    IconComponent: <InfoIcon />,
    name: 'schul-cloud/layout/infobox',
    version: '1.0.0',
    text: 'Infobox',

    createInitialChildren: () => ({
        id: uuid(),
        rows: [{
            id: uuid(),
            cells: [{
            content: { plugin: defaultPlugin, state: defaultPlugin.createInitialState() },
            id: uuid(),
            }]
        }]
    })
})