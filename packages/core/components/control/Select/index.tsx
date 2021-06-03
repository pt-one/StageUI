/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Drop, ScrollView } from '@stage-ui/core'
import { ChevronDown, Close } from '@stage-ui/icons'
import DropTypes from '@stage-ui/core/components/layout/Drop/types'
import Field from '@stage-ui/core/components/basic/Field'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef, useState } from 'react'
import additionalClasses from '@stage-ui/core/components/basic/Field/styles'
import styles from './styles'
import Types from './types'

const Select: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {
  const {
    decoration = 'outline',
    size = 'm',
    shape = 'rounded',
    tabIndex = 0,
    maxScrollHeight = '16rem',
    keepOpen = false,
    disabled = false,
    openOnFocus = true,
    emptyText = '-',
  } = props

  /**
   * References
   */
  const fieldRef = useRef<HTMLDivElement>(null)
  const dropRef = useRef<DropTypes.Ref>(null)
  /**
   * Drop will show only
   * if isOpen === true
   * and values.length > 0
   */
  const [isOpen, setOpen] = useState(false)
  /**
   * Value need for search
   */
  const [searchQuery, setSearchQuery] = useState('')
  /**
   * Store of selected values
   */
  const [values, setValues] = useState<Types.Option[]>([])
  /**
   * This options will be shown in drop
   */
  const options = props.options.filter((option) => {
    // Filter only unselected values
    if (values.find((o) => o.value === option.value) && props.multiselect) {
      return false
    }
    // Filter only matching search
    if (searchQuery && !RegExp(searchQuery.toUpperCase()).exec(option.text.toUpperCase())) {
      return false
    }
    return true
  })

  const { classes, attributes, events } = useSystem('Select', props, styles, {
    additionalClasses: additionalClasses as Stage.CreateAdditionalClasses<Types.Styles, Types.Props>,
  })

  /**
   * Object for variant styles
   */
  const styleState: Types.StyleState = {
    decoration,
    shape,
    size,
    isOpen,
  }
  /**
   * Component did mount
   */
  useEffect(() => {
    if (props.defaultValues) {
      setValues(props.defaultValues)
    }
  }, [])

  /**
   * Component will receive value
   */
  useEffect(() => {
    if (props.values) {
      setValues(props.values)
    }
  }, [props.values])

  /**
   * Update drop position after
   * field changing his height
   */
  useEffect(() => {
    if (isOpen) {
      dropRef.current?.updatePosition()
    }
  }, [values])

  /*
   * Keyboard control
   * TODO: handle keyboard control
   */
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    props.onKeyDown?.(event)
  }

  /**
   * Open and close select drop
   */
  function toggleOpen(e?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e?.stopPropagation()
    if (!isOpen && disabled) {
      return
    }
    setOpen(!isOpen)
  }

  /**
   * Call when ever values change
   * support controlled and uncontrolled
   * second arg need if you need filter values by search
   */
  function onChange(allValues: Types.Option[], value?: Types.Option, search = '') {
    setSearchQuery(search)
    props.onSearch?.(value?.text ?? search)
    if (props.values === undefined) {
      setValues(allValues)
    }
    props.onChange?.(allValues, value)
  }

  /**
   * Setting values
   */
  function setOption(value: Types.Option) {
    if (props.multiselect) {
      onChange(values.concat(value), value)
    } else {
      onChange([value], value)
    }
    if (!keepOpen) {
      setOpen(false)
    }
  }

  /**
   * Unsetting values
   */
  function unsetOption(value: Types.Option) {
    onChange(
      values.filter((v) => v.value !== value.value),
      value,
    )
  }

  /**
   * Clears values
   * also can set filter for search
   */
  function clearValues(search = '') {
    onChange([], undefined, search)
  }

  useImperativeHandle(ref, () => ({
    ...fieldRef,
    isOpen,
    options,
    values,
    toggleOpen,
  }))

  return (
    <>
      <Field
        classes={classes}
        ref={fieldRef}
        size={size}
        classesState={styleState}
        disabled={disabled}
        shape={shape}
        decoration={decoration}
        clearable={disabled ? false : props.clearable && values.length > 0}
        onClear={() => clearValues()}
        attributes={{ ...attributes, tabIndex }}
        events={{
          ...events,
          onClick: (e: React.MouseEvent<HTMLInputElement>) => {
            e.preventDefault()
            if (openOnFocus) {
              setOpen(true)
            }
            events.onClick?.(e)
          },
          onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e),
        }}
        rightChild={
          props.rightChild !== undefined ? (
            props.rightChild
          ) : (
            <ChevronDown
              alignSelf="center"
              size={size}
              style={{
                transition: 'transform 0.25s',
                transform: `scale(1.5) rotate(${isOpen ? '90deg' : 0})`,
              }}
              color={(c) => (isOpen ? c.primary : c.light)}
              onClick={(e) => {
                e.preventDefault()
                toggleOpen(e)
              }}
            />
          )
        }
      >
        <div css={classes.selected}>
          {props.multiselect &&
            values.map((option) => (
              <div css={classes.tag(styleState)} key={option.value}>
                {option.text}
                {!disabled && (
                  <Close
                    size={size}
                    css={classes.tagRemove(styleState)}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      unsetOption(option)
                    }}
                  />
                )}
              </div>
            ))}
          <input
            size={5}
            disabled={disabled || !props.searchable}
            css={classes.input({
              disableEvents: !props.searchable,
              searchMode: searchQuery !== '',
              multiselect: !!props.multiselect,
            })}
            placeholder={!props.multiselect || values.length === 0 ? props.placeholder : ''}
            value={(!props.multiselect && values[0]?.text) || searchQuery}
            onChange={(e) => {
              if (!isOpen) {
                setOpen(true)
              }
              if (props.multiselect) {
                props.onSearch?.(e.target.value)
                setSearchQuery(e.target.value)
              } else {
                clearValues(e.target.value)
              }
            }}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              if (openOnFocus) {
                setOpen(true)
              }
            }}
          />
        </div>
      </Field>
      <Drop
        visible={isOpen}
        ref={dropRef}
        animation={
          props.animation || {
            type: 'slide',
            duration: 100,
            reverse: true,
          }
        }
        onClickOutside={(e, outTarget) => {
          if (outTarget) {
            // @ts-ignore
            setOpen(false)
          }
        }}
        stretchWidth
        target={fieldRef}
      >
        <div css={classes.drop(styleState)}>
          <ScrollView size="xs" css={{ maxHeight: maxScrollHeight }} sendFlowScollEvent={false}>
            {options.map((option) => (
              <div
                css={classes.dropItem({ ...styleState, selected: values.includes(option) })}
                key={option.value}
                onClick={(e) => {
                  e.preventDefault()
                  setOption(option)
                }}
              >
                {option.text}
              </div>
            ))}
            {options.length === 0 && (
              <div css={classes.emptyConteiner(styleState)}>
                <div css={classes.emptyText(styleState)}>{emptyText}</div>
              </div>
            )}
          </ScrollView>
        </div>
      </Drop>
    </>
  )
}

export default forwardRef(Select)
