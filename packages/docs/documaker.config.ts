import homePage from '.'

export default {
    name: 'FlowUI',
    git: 'https://github.com/abr-tech/FlowUI',
    themes: [],
    homePage,
    pages: {
        order: {
            About: ['Getting started','Theming','Overrides','Props', 'Icons', 'Bundle'],
            Content: [],
            Layout: [],
            Control: [],
            Util: []
        },
        types: [
            'Props',
            'Overrides'
        ],
        separatedTypes: [
            'All',
            'AllEvents',
            'Attributes',
            'Core',
            'Colors',
            'Border',
            'Padding',
            'Layout',
            'Self',
            'Flow',
            'Flex',
            'Grid'
        ],
    }
}