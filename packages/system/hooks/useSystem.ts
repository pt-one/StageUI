/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import useTheme from './useTheme'
import propsResolvers from '../props'
import createVariant, { Variant } from '../utils/createVariant'
import isFunction from '../utils/isFunction'
import { AllEventProps, AllProps, AttributeProps } from '../props/types'

export interface Options {
  focus?: 'always' | 'tabOnly' | 'never'
  label?: string
  theme?: Stage.Theme
}

export type StyleProps = {
  all: Stage.JSS[]
  container: Stage.JSS[]
  content: Stage.JSS[]

  style: Stage.JSS[]
  margin: Stage.JSS[]
  flex: Stage.JSS[]
  grid: Stage.JSS[]

  padding: Stage.JSS[]
  color: Stage.JSS[]
  border: Stage.JSS[]
  layout: Stage.JSS[]
}

export type ClassStateDefinition = Record<string, string | boolean | undefined> | void
export type ClassesSchemaDefinition = Record<string, ClassStateDefinition>

export type FunctionClassDefinition<ClassState extends Exclude<ClassStateDefinition, void>> = (
  variant: Variant<ClassState>,
  state: ClassState,
) => Stage.JSS

export type OverridesClassesDefinition<ClassesSchema extends ClassesSchemaDefinition> = {
  [ClassName in keyof ClassesSchema]?:
    | FunctionClassDefinition<Exclude<ClassesSchema[ClassName], void>>
    | Stage.JSS
}

export type PropOverrides<ClassesSchema extends ClassesSchemaDefinition> =
  | ((theme: Stage.Theme, styleProps: StyleProps) => OverridesClassesDefinition<ClassesSchema>)
  | OverridesClassesDefinition<ClassesSchema>

export type ThemeOverrides<Props, ClassesSchema extends ClassesSchemaDefinition> =
  | ((props: Props, styleProps: StyleProps) => OverridesClassesDefinition<ClassesSchema>)
  | OverridesClassesDefinition<ClassesSchema>

export type ClassesDefinition<ClassesSchema extends ClassesSchemaDefinition> = {
  [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends void
    ? Stage.JSS
    : FunctionClassDefinition<Exclude<ClassesSchema[ClassName], void>>
}

export type FunctionClass<ClassSchema extends ClassStateDefinition> = (
  state: ClassSchema,
) => Stage.JSS

export type Classes<ClassesSchema extends ClassesSchemaDefinition> = {
  [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends void
    ? Stage.JSS
    : FunctionClass<ClassesSchema[ClassName]>
}

export type CreateClasses<ClassesSchema extends ClassesSchemaDefinition, Props> = (
  theme: Stage.Theme,
  props: Props,
  styleProps: StyleProps,
) => ClassesDefinition<ClassesSchema>

export type ComponentData<
  Props extends Record<string, any>,
  ClassesSchema extends ClassesSchemaDefinition,
> = {
  classes: Classes<ClassesSchema>
  attributes: Pick<Props, keyof AttributeProps>
  events: Pick<Props, Stage.FilterStartingWith<keyof Props, 'on'>>
  styleProps: StyleProps
}

let IS_MOUSE_DOWN = false
let PAGE_FOCUS = false

window.addEventListener('mousedown', () => {
  IS_MOUSE_DOWN = true
})
window.addEventListener('mouseup', () => {
  IS_MOUSE_DOWN = false
})
window.addEventListener('focus', () => {
  PAGE_FOCUS = true
})

function useSystem<
  Props extends Omit<
    AllProps<Element, ClassesSchema>,
    keyof Omit<
      AllEventProps<Element>,
      'onFocus' | 'onBlur' | 'onKeyPress' | 'onClick' | 'onKeyDown' | 'onEsc' | 'onEnter'
    >
  >,
  ClassesSchema extends ClassesSchemaDefinition,
  Element extends HTMLElement,
>(
  name: string,
  props: Props,
  createClasses: Stage.CreateClasses<ClassesSchema, Props>,
  options: Options = {},
) {
  const currentTheme = useTheme()
  const { focus = 'always', label = name, theme = currentTheme } = options

  const data = {
    classes: {},
    attributes: {},
    events: {},
    styleProps: {
      all: [],
      container: [],
      content: [],

      style: [],
      margin: [],
      flex: [],
      grid: [],

      padding: [],
      color: [],
      border: [],
      layout: [],
    } as StyleProps,
  } as ComponentData<Props, ClassesSchema>

  Object.keys(props).forEach((key) => {
    // Check *on* events
    if (key[0] === 'o' && key[1] === 'n') {
      // @ts-ignore
      data.events[key] = props[key]
    }
    if (Object.prototype.hasOwnProperty.call(propsResolvers, key)) {
      propsResolvers[key](props, data, theme)
    }
  })

  // Override default focus styles
  data.events.onFocus = (event: React.FocusEvent<Element>) => {
    event.stopPropagation()
    if (!PAGE_FOCUS) {
      if ((focus === 'tabOnly' && !IS_MOUSE_DOWN) || focus === 'always') {
        event.target.className += ' focused'
      }
    }
    PAGE_FOCUS = false

    props.onFocus?.(event)
  }

  // Override default focus styles
  data.events.onBlur = (event: React.FocusEvent<Element>) => {
    event.stopPropagation()
    event.target.className = event.target.className.replace(' focused', '')
    props.onBlur?.(event)
  }

  // Additional key handlers
  data.events.onKeyDown = (event: React.KeyboardEvent<Element>) => {
    if (event.key === 'Enter' && props.onEnter) {
      props.onEnter?.(event)
    }
    if (event.key === 'Esc' && props.onEsc) {
      props.onEsc?.(event)
    }
    props.onKeyDown?.(event)
  }

  // Cursor must be pointer if interactive
  if (props.onClick) {
    data.styleProps.container.push({
      cursor: 'pointer',
      userSelect: 'none',
    })
  }

  data.styleProps.container = data.styleProps.container.concat(
    data.styleProps.margin,
    data.styleProps.flex,
    data.styleProps.grid,
    data.styleProps.style,
  )
  data.styleProps.content = data.styleProps.content.concat(
    data.styleProps.padding,
    data.styleProps.color,
    data.styleProps.border,
    data.styleProps.layout,
  )
  data.styleProps.all = data.styleProps.all.concat(
    data.styleProps.container,
    data.styleProps.content,
  )

  const themeOverrides = theme.overrides[name as keyof typeof theme.overrides] as ThemeOverrides<
    Props,
    ClassesSchema
  >
  const propsOverrides = props.overrides

  const componentClasses: ClassesDefinition<ClassesSchema> = createClasses(
    theme,
    props,
    data.styleProps,
  )

  const themeOverrideClasses: OverridesClassesDefinition<ClassesSchema> = isFunction(themeOverrides)
    ? themeOverrides(props, data.styleProps)
    : themeOverrides || {}

  const propsOverrideClasses: OverridesClassesDefinition<ClassesSchema> = isFunction(propsOverrides)
    ? propsOverrides(theme, data.styleProps)
    : propsOverrides || {}

  Object.keys(componentClasses).forEach((key) => {
    const classLabel = { label: `${label}-${key}` }

    // @ts-ignore
    data.classes[key] = isFunction(componentClasses[key])
      ? // @ts-ignore
        (state) => {
          const variant = createVariant(state)
          return [
            classLabel,
            (componentClasses[key] as Function)?.(variant, state),
            isFunction(themeOverrideClasses[key])
              ? (themeOverrideClasses[key] as Function)(variant, state)
              : themeOverrideClasses[key],
            isFunction(propsOverrideClasses[key])
              ? (propsOverrideClasses[key] as Function)(variant, state)
              : propsOverrideClasses[key],
          ] as Stage.JSS
        }
      : [classLabel, componentClasses[key], themeOverrideClasses[key], propsOverrideClasses[key]]
  })

  return data
}

export default useSystem