import React from 'react';
import uuid from 'uuid';

// You are obviously not limited to material-ui, but we really enjoy
// the material-ui svg icons!
//import CropSquare from 'material-ui/svg-icons/image/crop-square'
import InfoIcon from 'material-ui-icons/Info';

const InfoboxPlugin = ({ children }) => React.createElement(
    'div',
    { className: 'ory-editor-plugins-infobox' },
    children
);

export default (({ defaultPlugin }) => ({
    Component: InfoboxPlugin,
    IconComponent: React.createElement(InfoIcon, null),
    name: 'example/layout/infobox',
    version: '0.0.1',
    text: 'A proper infobox',

    createInitialChildren: () => ({
        id: uuid(),
        rows: [{
            id: uuid(),
            cells: [{
                content: { plugin: defaultPlugin, state: defaultPlugin.createInitialState() },
                id: uuid()
            }]
        }]
    })
}));
//# sourceMappingURL=index.js.map