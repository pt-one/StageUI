
import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles'
import Types from './types'

type GetCoord = (tr: ClientRect, td: ClientRect) => string

let sharedZIndex = 300

const Drop: RefForwardingComponent<Types.Ref, Types.Props> = (props, ref) => {

    const { children, target: targetRef, onClickOutside, spacing = 0, align,
        justify, stretchHeight, stretchWidth, visible, followCursor } = props
        
    const { cs, attributes, events } = useComponent('Drop', { props, styles, styleProps: { container: ['self']} })

    const dropRef = useRef<HTMLDivElement>(null)
    const [visibleState, setVisibleState] = useState(visible || true)

    let getTopCoord: GetCoord = (tr) => toStyle(tr.bottom + spacing)
    let getLeftCoord: GetCoord = (tr, dr) => toStyle((tr.left + tr.width / 2) - dr.width / 2)

    const setHorizontalPosition = () => {
        switch (justify) {
            case 'start':
                getLeftCoord = (tr) => toStyle(tr.left)
                break
            case 'center':
                getLeftCoord = (tr, dr) => toStyle((tr.left + tr.width / 2) - dr.width / 2)
                break
            case 'end':
                getLeftCoord = (tr, dr) => toStyle(tr.right - dr.width)
                break
            case 'start-outside':
                getLeftCoord = (tr) => toStyle(tr.left - tr.width)
                break
            case 'end-outside':
                getLeftCoord = (tr) => toStyle(tr.left + tr.width)
                break
        }
    }

    const setVerticalPosition = () => {
        switch (justify) {
            case 'end':
                getTopCoord = (tr) => toStyle(tr.top)
                break
            case 'center':
                getTopCoord = (tr, dr) => toStyle((tr.top + tr.height / 2) - dr.height / 2)
                break
            case 'start':
                getTopCoord = (tr, dr) => toStyle(tr.bottom - dr.height)
                break
            case 'start-outside':
                getTopCoord = (tr) => toStyle(tr.top - tr.height)
                break
        }
    }

    switch (align) {
        case 'top':
            getTopCoord = (tr, dr) => toStyle(tr.top - dr.height - spacing)
            setHorizontalPosition()
            break
        case 'bottom':
            getTopCoord = (tr) => toStyle(tr.bottom + spacing)
            setHorizontalPosition()
            break
        case 'left':
            getLeftCoord = (tr, dr) => toStyle(tr.left - dr.width - spacing)
            setVerticalPosition()
            break
        case 'right':
            getLeftCoord = (tr) => toStyle(tr.right + spacing)
            setVerticalPosition()
            break
    }
    /**
     * Support controlled component
     */
    useEffect(() => {
        if (visible !== undefined) {
            setVisibleState(visible)
        }
    }, [visible])

    useEffect(() => {
        if (visibleState) {
            const rect = (stretchHeight || stretchWidth) ? targetRef?.current?.getBoundingClientRect() : null
            const style = rect && dropRef.current?.style

            if (style) {
                style.visibility = 'hidden'
                if (stretchHeight) style.height = toStyle(rect.height)
                if (stretchWidth) style.width = toStyle(rect.width)
            }
            sharedZIndex++
            
            if (followCursor) {
                window.addEventListener('mousemove', updateFollowCursor)

            } else {
                updatePosition()
                document.addEventListener('scroll', updatePosition, true)
                document.addEventListener('onflowscroll', updatePosition, true)
                document.addEventListener('mouseup', handleClickOutside)
                window.addEventListener('resize', updatePosition)
            }
        }
        return () => {
            if (followCursor) {
                window.removeEventListener('mousemove', updateFollowCursor)
            } else {
                document.removeEventListener('scroll', updatePosition, true)
                document.removeEventListener('onflowscroll', updatePosition, true)
                document.removeEventListener('mouseup', handleClickOutside)
                window.removeEventListener('resize', updatePosition)
            }
        }
    }, [visibleState, followCursor])

    function handleClickOutside(event: MouseEvent) {
        if (onClickOutside && !dropRef?.current?.contains(event.target as Node)) {
            onClickOutside(event, !targetRef?.current?.contains(event.target))
        }
    }

    function updatePosition() {
        if (targetRef?.current && dropRef?.current) {
            const tr: ClientRect = targetRef.current.getBoundingClientRect()
            const dr: ClientRect = dropRef.current.getBoundingClientRect()
            const style = dropRef.current.style

            style.visibility = ''
            style.top = getTopCoord(tr, dr)
            style.left = getLeftCoord(tr, dr)
        }
    }
    function updateFollowCursor(e: MouseEvent) {
        if (dropRef?.current) {
            const style = dropRef.current.style

            style.visibility = ''
            style.top = e.clientY + 'px'
            style.left = e.clientX + 'px'
        }
    }
    
    function setVisible(state: boolean) {
        if (visible !== undefined) {
            console.warn('Do not use setVisibe on controlled <Drop/> component')
            return
        }
        setVisibleState(state)
    }

    useImperativeHandle(ref, () => ({
        ...dropRef.current,
        updatePosition,
        setVisible
    }))

    /**
     * zIndex magic stuff
     */
    const [clicks, click] = useState(0)
    const zIndex = useMemo(() => sharedZIndex, [visibleState, clicks])

    if (visibleState === false) {
        return null
    }
    
    return ReactDOM.createPortal(
        <div
            {...attributes}
            {...events.all}
            onClick={(e) => {
                click(clicks+1)
                props.onClick?.(e)
            }}
            ref={dropRef}
            css={cs.container}
            style={{
                top: 0,
                left: 0,
                zIndex,
                visibility: 'hidden',
                pointerEvents: followCursor && 'none',
                ...attributes.style
            }as React.CSSProperties}
            children={children}
        />,
        document.body
    )
}

function toStyle(value: number) {
    return value.toString() + 'px'
}

export default forwardRef(Drop)
