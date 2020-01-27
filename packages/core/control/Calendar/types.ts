import Shared from '@flow-ui/whale/types'
import { Moment } from 'moment'
import { CSSProperties } from 'react'
import FieldTypes from '../../misc/hocs/Field/types'

declare namespace CalendarTypes {

    type GridType = 'year' | 'month' | 'day'
    type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de'

    interface Props extends Shared.AllProps {
        /**
         * Type for Calendar
         * @default day
         */
        type?: GridType
        /**
         * Property value could be a string
         * if you pass format property aswell
         * otherwise value should be instance of Date
         */
        value?: Moment | Date
        defaultValue?: Moment | Date
        /**
         * Min datetime that could be selected
         */
        minValue?: Moment | Date
        /**
         * Max datetime that could be selected
         */
        maxValue?: Moment | Date
        /**
         * Callback function will with Date object
         */
        onChange?: (moment: Moment) => void
        /**
         * @default ru
         */
        locale?: Locale
        /**
         * Hide today button
         */
        hideToday?: boolean
    }

    interface DateGridProps {
        attributes: any
        hideToday: boolean
        value: Moment
        minValue: Moment
        maxValue: Moment
        onChange: (date: Moment) => void
        styles: Shared.FlowStyles<Overrides>
        type: GridType
    }
    
    interface DateGridCalendarProps {
        value: Moment
        tmp: Moment
        minValue: Moment
        maxValue: Moment
        active: Moment
        onClick?: () => void
        style?: CSSProperties
        styles: Shared.FlowStyles<Overrides>
    }

    interface DateGridTitleProps {
        value: Moment
        minValue: Moment
        maxValue: Moment
        gridType: GridType
        onNext: () => void
        onPrevious: () => void
        onGridTypeChange: (type: GridType) => void
        styles: Shared.FlowStyles<Overrides>
    }

    interface Overrides {
        dateGrind: void
        weekDay: void
        title: void
        gridBlock: {
            isActive: Boolean
            isCurrent: boolean
            isDisabled: boolean
            isCurrentMonth: boolean
        }
    }
}

export default CalendarTypes