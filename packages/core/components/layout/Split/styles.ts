import Types from './types'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  return {
    test: {},
    container: (variant) => [
      {
        display: 'flex',
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
      },
      variant({
        vertical: {
          flexDirection: 'column',
        },
      }),
    ],
  }
}

export default createClasses
