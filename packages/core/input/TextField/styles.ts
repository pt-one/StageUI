import useFlow from '../../misc/hooks/useFlow';
import useStyleProps from '../../misc/hooks/useStyleProps';
import callProp from '../../misc/utils/callProp';
import TextFieldTypes from './types';
import variant from '../../misc/utils/variant';
import css from '@emotion/css';

export default (props: TextFieldTypes.Props) => {
    const { size = 'medium', multiline, decoration = 'outline' } = props;
    const { theme } = useFlow();
    const styleProps = useStyleProps(props);

    const multilineAdditionalPadding = variant(size, {
        'medium': '.25rem',
        'large': '.25rem',
        'xlarge': '.5rem'
    })

    const isLabelOutside = ['outline', 'filled'].includes(decoration) && !(size === 'xlarge');

    return {
        input: (underOverlay) => [
            {
                outline: 0,
                padding: 0,
                margin: 0,
                border: 'none',
                backgroundImage: 'none',
                backgroundColor: 'transparent',
                resize: 'vertical',
                boxShadow: 'none',
                color: 'inherit',
                font: 'inherit',
                cursor: 'inherit',
                '&::placeholder': {
                    color: theme.color.light.css()
                }
            },
            multiline && decoration != 'underline' && {
                padding: multilineAdditionalPadding
            },
            multiline && !isLabelOutside && !underOverlay && {
                paddingTop: 0
            },
            underOverlay && {
                opacity: '0'
            }],

        insideLabelStyles: {
            marginLeft: multilineAdditionalPadding,
            marginTop: multilineAdditionalPadding
        }

    }
}