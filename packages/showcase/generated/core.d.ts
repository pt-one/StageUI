declare module 'misc/utils/createID' {
	 const _default: () => string;
	export default _default;

}
declare module 'misc/hooks/useSharedObject' {
	 const useMemoEffect: <T>(createObject: () => T) => T | null;
	export default useMemoEffect;

}
declare module 'misc/utils/callProp' {
	 const _default: <P, L>(prop: P, lib: L) => Exclude<P, Function>;
	export default _default;

}
declare module 'misc/icons/types' {
	 namespace IconsetTypes {
	    type Filled = {
	        activity: React.ReactElement;
	        alertCircle: React.ReactElement;
	        alertTriangle: React.ReactElement;
	        archive: React.ReactElement;
	        arrowBack: React.ReactElement;
	        arrowCircleDown: React.ReactElement;
	        arrowCircleLeft: React.ReactElement;
	        arrowCircleRight: React.ReactElement;
	        arrowCircleUp: React.ReactElement;
	        arrowDown: React.ReactElement;
	        arrowDownward: React.ReactElement;
	        arrowForward: React.ReactElement;
	        arrowIosBack: React.ReactElement;
	        arrowIosDownward: React.ReactElement;
	        arrowIosForward: React.ReactElement;
	        arrowIosUpward: React.ReactElement;
	        arrowLeft: React.ReactElement;
	        arrowRight: React.ReactElement;
	        arrowUp: React.ReactElement;
	        arrowUpward: React.ReactElement;
	        arrowheadDown: React.ReactElement;
	        arrowheadLeft: React.ReactElement;
	        arrowheadRight: React.ReactElement;
	        arrowheadUp: React.ReactElement;
	        at: React.ReactElement;
	        attach2: React.ReactElement;
	        attach: React.ReactElement;
	        award: React.ReactElement;
	        backspace: React.ReactElement;
	        barChart2: React.ReactElement;
	        barChart: React.ReactElement;
	        battery: React.ReactElement;
	        behance: React.ReactElement;
	        bellOff: React.ReactElement;
	        bell: React.ReactElement;
	        bluetooth: React.ReactElement;
	        bookOpen: React.ReactElement;
	        book: React.ReactElement;
	        bookmark: React.ReactElement;
	        briefcase: React.ReactElement;
	        browser: React.ReactElement;
	        brush: React.ReactElement;
	        bulb: React.ReactElement;
	        calendar: React.ReactElement;
	        camera: React.ReactElement;
	        car: React.ReactElement;
	        cast: React.ReactElement;
	        charging: React.ReactElement;
	        checkmarkCircle2: React.ReactElement;
	        checkmarkCircle: React.ReactElement;
	        checkmarkSquare2: React.ReactElement;
	        checkmarkSquare: React.ReactElement;
	        checkmark: React.ReactElement;
	        chevronDown: React.ReactElement;
	        chevronLeft: React.ReactElement;
	        chevronRight: React.ReactElement;
	        chevronUp: React.ReactElement;
	        clipboard: React.ReactElement;
	        clock: React.ReactElement;
	        closeCircle: React.ReactElement;
	        closeSquare: React.ReactElement;
	        close: React.ReactElement;
	        cloudDownload: React.ReactElement;
	        cloudUpload: React.ReactElement;
	        codeDownload: React.ReactElement;
	        code: React.ReactElement;
	        collapse: React.ReactElement;
	        colorPalette: React.ReactElement;
	        colorPicker: React.ReactElement;
	        compass: React.ReactElement;
	        copy: React.ReactElement;
	        cornerDownLeft: React.ReactElement;
	        cornerDownRight: React.ReactElement;
	        cornerLeftDown: React.ReactElement;
	        cornerLeftUp: React.ReactElement;
	        cornerRightDown: React.ReactElement;
	        cornerRightUp: React.ReactElement;
	        cornerUpLeft: React.ReactElement;
	        cornerUpRight: React.ReactElement;
	        creditCard: React.ReactElement;
	        crop: React.ReactElement;
	        cube: React.ReactElement;
	        diagonalArrowLeftDown: React.ReactElement;
	        diagonalArrowLeftUp: React.ReactElement;
	        diagonalArrowRightDown: React.ReactElement;
	        diagonalArrowRightUp: React.ReactElement;
	        doneAll: React.ReactElement;
	        download: React.ReactElement;
	        dropletOff: React.ReactElement;
	        droplet: React.ReactElement;
	        edit2: React.ReactElement;
	        edit: React.ReactElement;
	        email: React.ReactElement;
	        expand: React.ReactElement;
	        externalLink: React.ReactElement;
	        eyeOff2: React.ReactElement;
	        eyeOff: React.ReactElement;
	        eye: React.ReactElement;
	        facebook: React.ReactElement;
	        fileAdd: React.ReactElement;
	        fileRemove: React.ReactElement;
	        fileText: React.ReactElement;
	        file: React.ReactElement;
	        film: React.ReactElement;
	        flag: React.ReactElement;
	        flashOff: React.ReactElement;
	        flash: React.ReactElement;
	        flip2: React.ReactElement;
	        flip: React.ReactElement;
	        folderAdd: React.ReactElement;
	        folderRemove: React.ReactElement;
	        folder: React.ReactElement;
	        funnel: React.ReactElement;
	        gift: React.ReactElement;
	        github: React.ReactElement;
	        globe2: React.ReactElement;
	        globe3: React.ReactElement;
	        globe: React.ReactElement;
	        google: React.ReactElement;
	        grid: React.ReactElement;
	        hardDrive: React.ReactElement;
	        hash: React.ReactElement;
	        headphones: React.ReactElement;
	        heart: React.ReactElement;
	        home: React.ReactElement;
	        image2: React.ReactElement;
	        image: React.ReactElement;
	        inbox: React.ReactElement;
	        info: React.ReactElement;
	        keypad: React.ReactElement;
	        layers: React.ReactElement;
	        layout: React.ReactElement;
	        link2: React.ReactElement;
	        link: React.ReactElement;
	        linkedin: React.ReactElement;
	        list: React.ReactElement;
	        lock: React.ReactElement;
	        logIn: React.ReactElement;
	        logOut: React.ReactElement;
	        map: React.ReactElement;
	        maximize: React.ReactElement;
	        menu2: React.ReactElement;
	        menuArrow: React.ReactElement;
	        menu: React.ReactElement;
	        messageCircle: React.ReactElement;
	        messageSquare: React.ReactElement;
	        micOff: React.ReactElement;
	        mic: React.ReactElement;
	        minimize: React.ReactElement;
	        minusCircle: React.ReactElement;
	        minusSquare: React.ReactElement;
	        minus: React.ReactElement;
	        monitor: React.ReactElement;
	        moon: React.ReactElement;
	        moreHorizontal: React.ReactElement;
	        moreVertical: React.ReactElement;
	        move: React.ReactElement;
	        music: React.ReactElement;
	        navigation2: React.ReactElement;
	        navigation: React.ReactElement;
	        npm: React.ReactElement;
	        options2: React.ReactElement;
	        options: React.ReactElement;
	        pantone: React.ReactElement;
	        paperPlane: React.ReactElement;
	        pauseCircle: React.ReactElement;
	        people: React.ReactElement;
	        percent: React.ReactElement;
	        personAdd: React.ReactElement;
	        personDelete: React.ReactElement;
	        personDone: React.ReactElement;
	        personRemove: React.ReactElement;
	        person: React.ReactElement;
	        phoneCall: React.ReactElement;
	        phoneMissed: React.ReactElement;
	        phoneOff: React.ReactElement;
	        phone: React.ReactElement;
	        pieChart2: React.ReactElement;
	        pieChart: React.ReactElement;
	        pin: React.ReactElement;
	        playCircle: React.ReactElement;
	        plusCircle: React.ReactElement;
	        plusSquare: React.ReactElement;
	        plus: React.ReactElement;
	        power: React.ReactElement;
	        pricetags: React.ReactElement;
	        printer: React.ReactElement;
	        questionMarkCircle: React.ReactElement;
	        questionMark: React.ReactElement;
	        radioButtonOff: React.ReactElement;
	        radioButtonOn: React.ReactElement;
	        radio: React.ReactElement;
	        recording: React.ReactElement;
	        refresh: React.ReactElement;
	        repeat: React.ReactElement;
	        rewindLeft: React.ReactElement;
	        rewindRight: React.ReactElement;
	        save: React.ReactElement;
	        scissors: React.ReactElement;
	        search: React.ReactElement;
	        settings2: React.ReactElement;
	        settings: React.ReactElement;
	        shake: React.ReactElement;
	        share: React.ReactElement;
	        shieldOff: React.ReactElement;
	        shield: React.ReactElement;
	        shoppingBag: React.ReactElement;
	        shoppingCart: React.ReactElement;
	        shuffle2: React.ReactElement;
	        shuffle: React.ReactElement;
	        skipBack: React.ReactElement;
	        skipForward: React.ReactElement;
	        slash: React.ReactElement;
	        smartphone: React.ReactElement;
	        speaker: React.ReactElement;
	        square: React.ReactElement;
	        star: React.ReactElement;
	        stopCircle: React.ReactElement;
	        sun: React.ReactElement;
	        swap: React.ReactElement;
	        sync: React.ReactElement;
	        text: React.ReactElement;
	        thermometerMinus: React.ReactElement;
	        thermometerPlus: React.ReactElement;
	        thermometer: React.ReactElement;
	        toggleLeft: React.ReactElement;
	        toggleRight: React.ReactElement;
	        trash2: React.ReactElement;
	        trash: React.ReactElement;
	        trendingDown: React.ReactElement;
	        trendingUp: React.ReactElement;
	        tv: React.ReactElement;
	        twitter: React.ReactElement;
	        umbrella: React.ReactElement;
	        undo: React.ReactElement;
	        unlock: React.ReactElement;
	        upload: React.ReactElement;
	        videoOff: React.ReactElement;
	        video: React.ReactElement;
	        volumeDown: React.ReactElement;
	        volumeMute: React.ReactElement;
	        volumeOff: React.ReactElement;
	        volumeUp: React.ReactElement;
	        wifiOff: React.ReactElement;
	        wifi: React.ReactElement;
	    };
	    type Outline = {
	        activity: React.ReactElement;
	        alertCircle: React.ReactElement;
	        alertTriangle: React.ReactElement;
	        archive: React.ReactElement;
	        arrowBack: React.ReactElement;
	        arrowCircleDown: React.ReactElement;
	        arrowCircleLeft: React.ReactElement;
	        arrowCircleRight: React.ReactElement;
	        arrowCircleUp: React.ReactElement;
	        arrowDown: React.ReactElement;
	        arrowDownward: React.ReactElement;
	        arrowForward: React.ReactElement;
	        arrowIosBack: React.ReactElement;
	        arrowIosDownward: React.ReactElement;
	        arrowIosForward: React.ReactElement;
	        arrowIosUpward: React.ReactElement;
	        arrowLeft: React.ReactElement;
	        arrowRight: React.ReactElement;
	        arrowUp: React.ReactElement;
	        arrowUpward: React.ReactElement;
	        arrowheadDown: React.ReactElement;
	        arrowheadLeft: React.ReactElement;
	        arrowheadRight: React.ReactElement;
	        arrowheadUp: React.ReactElement;
	        at: React.ReactElement;
	        attach2: React.ReactElement;
	        attach: React.ReactElement;
	        award: React.ReactElement;
	        backspace: React.ReactElement;
	        barChart2: React.ReactElement;
	        barChart: React.ReactElement;
	        battery: React.ReactElement;
	        behance: React.ReactElement;
	        bellOff: React.ReactElement;
	        bell: React.ReactElement;
	        bluetooth: React.ReactElement;
	        bookOpen: React.ReactElement;
	        book: React.ReactElement;
	        bookmark: React.ReactElement;
	        briefcase: React.ReactElement;
	        browser: React.ReactElement;
	        brush: React.ReactElement;
	        bulb: React.ReactElement;
	        calendar: React.ReactElement;
	        camera: React.ReactElement;
	        car: React.ReactElement;
	        cast: React.ReactElement;
	        charging: React.ReactElement;
	        checkmarkCircle2: React.ReactElement;
	        checkmarkCircle: React.ReactElement;
	        checkmark: React.ReactElement;
	        checkmarkSquare2: React.ReactElement;
	        checkmarkSquare: React.ReactElement;
	        chevronDown: React.ReactElement;
	        chevronLeft: React.ReactElement;
	        chevronRight: React.ReactElement;
	        chevronUp: React.ReactElement;
	        clipboard: React.ReactElement;
	        clock: React.ReactElement;
	        closeCircle: React.ReactElement;
	        close: React.ReactElement;
	        closeSquare: React.ReactElement;
	        cloudDownload: React.ReactElement;
	        cloudUpload: React.ReactElement;
	        codeDownload: React.ReactElement;
	        code: React.ReactElement;
	        collapse: React.ReactElement;
	        colorPalette: React.ReactElement;
	        colorPicker: React.ReactElement;
	        compass: React.ReactElement;
	        copy: React.ReactElement;
	        cornerDownLeft: React.ReactElement;
	        cornerDownRight: React.ReactElement;
	        cornerLeftDown: React.ReactElement;
	        cornerLeftUp: React.ReactElement;
	        cornerRightDown: React.ReactElement;
	        cornerRightUp: React.ReactElement;
	        cornerUpLeft: React.ReactElement;
	        cornerUpRight: React.ReactElement;
	        creditCard: React.ReactElement;
	        crop: React.ReactElement;
	        cube: React.ReactElement;
	        diagonalArrowLeftDown: React.ReactElement;
	        diagonalArrowLeftUp: React.ReactElement;
	        diagonalArrowRightDown: React.ReactElement;
	        diagonalArrowRightUp: React.ReactElement;
	        doneAll: React.ReactElement;
	        download: React.ReactElement;
	        dropletOff: React.ReactElement;
	        droplet: React.ReactElement;
	        edit2: React.ReactElement;
	        edit: React.ReactElement;
	        email: React.ReactElement;
	        expand: React.ReactElement;
	        externalLink: React.ReactElement;
	        eyeOff2: React.ReactElement;
	        eyeOff: React.ReactElement;
	        eye: React.ReactElement;
	        facebook: React.ReactElement;
	        fileAdd: React.ReactElement;
	        file: React.ReactElement;
	        fileRemove: React.ReactElement;
	        fileText: React.ReactElement;
	        film: React.ReactElement;
	        flag: React.ReactElement;
	        flashOff: React.ReactElement;
	        flash: React.ReactElement;
	        flip2: React.ReactElement;
	        flip: React.ReactElement;
	        folderAdd: React.ReactElement;
	        folder: React.ReactElement;
	        folderRemove: React.ReactElement;
	        funnel: React.ReactElement;
	        gift: React.ReactElement;
	        github: React.ReactElement;
	        globe2: React.ReactElement;
	        globe: React.ReactElement;
	        google: React.ReactElement;
	        grid: React.ReactElement;
	        hardDrive: React.ReactElement;
	        hash: React.ReactElement;
	        headphones: React.ReactElement;
	        heart: React.ReactElement;
	        home: React.ReactElement;
	        image: React.ReactElement;
	        inbox: React.ReactElement;
	        info: React.ReactElement;
	        keypad: React.ReactElement;
	        layers: React.ReactElement;
	        layout: React.ReactElement;
	        link2: React.ReactElement;
	        link: React.ReactElement;
	        linkedin: React.ReactElement;
	        list: React.ReactElement;
	        loader: React.ReactElement;
	        lock: React.ReactElement;
	        logIn: React.ReactElement;
	        logOut: React.ReactElement;
	        map: React.ReactElement;
	        maximize: React.ReactElement;
	        menu2: React.ReactElement;
	        menuArrow: React.ReactElement;
	        menu: React.ReactElement;
	        messageCircle: React.ReactElement;
	        messageSquare: React.ReactElement;
	        micOff: React.ReactElement;
	        mic: React.ReactElement;
	        minimize: React.ReactElement;
	        minusCircle: React.ReactElement;
	        minus: React.ReactElement;
	        minusSquare: React.ReactElement;
	        monitor: React.ReactElement;
	        moon: React.ReactElement;
	        moreHorizontal: React.ReactElement;
	        moreVertical: React.ReactElement;
	        move: React.ReactElement;
	        music: React.ReactElement;
	        navigation2: React.ReactElement;
	        navigation: React.ReactElement;
	        npm: React.ReactElement;
	        options2: React.ReactElement;
	        options: React.ReactElement;
	        pantone: React.ReactElement;
	        paperPlane: React.ReactElement;
	        pauseCircle: React.ReactElement;
	        people: React.ReactElement;
	        percent: React.ReactElement;
	        personAdd: React.ReactElement;
	        personDelete: React.ReactElement;
	        personDone: React.ReactElement;
	        person: React.ReactElement;
	        personRemove: React.ReactElement;
	        phoneCall: React.ReactElement;
	        phoneMissed: React.ReactElement;
	        phoneOff: React.ReactElement;
	        phone: React.ReactElement;
	        pieChart: React.ReactElement;
	        pin: React.ReactElement;
	        playCircle: React.ReactElement;
	        plusCircle: React.ReactElement;
	        plus: React.ReactElement;
	        plusSquare: React.ReactElement;
	        power: React.ReactElement;
	        pricetags: React.ReactElement;
	        printer: React.ReactElement;
	        questionMarkCircle: React.ReactElement;
	        questionMark: React.ReactElement;
	        radioButtonOff: React.ReactElement;
	        radioButtonOn: React.ReactElement;
	        radio: React.ReactElement;
	        recording: React.ReactElement;
	        refresh: React.ReactElement;
	        repeat: React.ReactElement;
	        rewindLeft: React.ReactElement;
	        rewindRight: React.ReactElement;
	        save: React.ReactElement;
	        scissors: React.ReactElement;
	        search: React.ReactElement;
	        settings2: React.ReactElement;
	        settings: React.ReactElement;
	        shake: React.ReactElement;
	        share: React.ReactElement;
	        shieldOff: React.ReactElement;
	        shield: React.ReactElement;
	        shoppingBag: React.ReactElement;
	        shoppingCart: React.ReactElement;
	        shuffle2: React.ReactElement;
	        shuffle: React.ReactElement;
	        skipBack: React.ReactElement;
	        skipForward: React.ReactElement;
	        slash: React.ReactElement;
	        smartphone: React.ReactElement;
	        speaker: React.ReactElement;
	        square: React.ReactElement;
	        star: React.ReactElement;
	        stopCircle: React.ReactElement;
	        sun: React.ReactElement;
	        swap: React.ReactElement;
	        sync: React.ReactElement;
	        text: React.ReactElement;
	        thermometerMinus: React.ReactElement;
	        thermometer: React.ReactElement;
	        thermometerPlus: React.ReactElement;
	        toggleLeft: React.ReactElement;
	        toggleRight: React.ReactElement;
	        trash2: React.ReactElement;
	        trash: React.ReactElement;
	        trendingDown: React.ReactElement;
	        trendingUp: React.ReactElement;
	        tv: React.ReactElement;
	        twitter: React.ReactElement;
	        umbrella: React.ReactElement;
	        undo: React.ReactElement;
	        unlock: React.ReactElement;
	        upload: React.ReactElement;
	        videoOff: React.ReactElement;
	        video: React.ReactElement;
	        volumeDown: React.ReactElement;
	        volumeMute: React.ReactElement;
	        volumeOff: React.ReactElement;
	        volumeUp: React.ReactElement;
	        wifiOff: React.ReactElement;
	        wifi: React.ReactElement;
	    };
	    interface Index {
	        filled: Filled;
	        outline: Outline;
	    }
	}
	export default IconsetTypes;

}
declare module 'types' {
	/// <reference types="react" />
	import ThemeTypes from 'misc/themes/types';
	import IconsetTypes from 'misc/icons/types';
	import chroma from 'chroma-js';
	import CSS from 'csstype';
	import { Interpolation, SerializedStyles } from '@emotion/core'; module 'csstype' {
	    interface Properties {
	        display?: "block" | "inline" | "inline-block" | "inline-table" | "list-item" | "none" | "run-in" | "table" | "table-caption" | "table-cell" | "table-column-group" | "table-column" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group" | "flex" | "grid";
	        overflow?: "auto" | "hidden" | "scroll" | "visible" | "inherit";
	        alignSelf?: "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherid" | "initial" | "left" | "normal" | "right" | "safe" | "safe-end" | "safe-start" | "start" | "stretch" | "unsafe" | "unset";
	        justifySelf?: "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherid" | "initial" | "left" | "normal" | "right" | "safe" | "safe-end" | "safe-start" | "start" | "stretch" | "unsafe" | "unset";
	    }
	} namespace Global {
	    type EventProp<T> = (event: T) => void;
	    type FunctionalProp<T, R> = ((lib: T) => R) | R;
	    type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
	    type EmotionStyles = Array<Interpolation>;
	    type Variants<T> = Partial<{
	        [K in keyof T]: Partial<Record<Extract<T[K], string>, EmotionStyles>>;
	    }>;
	    type Variant<V> = (variants: Variants<V>) => EmotionStyles;
	    type FlowStyle<V> = V extends Object ? (state: V) => SerializedStyles : SerializedStyles;
	    type ComponentStyle<V> = V extends {} ? ((variant: Variant<V>) => EmotionStyles) : EmotionStyles;
	    type FlowStyles<S> = {
	        [O in keyof S]: FlowStyle<S[O]>;
	    };
	    type ComponentStyles<S> = {
	        [O in keyof S]: ComponentStyle<S[O]>;
	    };
	    type FunctionalComponentStyles<S> = ((props: any, theme: ThemeTypes.Index) => {
	        [O in keyof S]: ComponentStyle<S[O]>;
	    });
	    type OverridesStyle<S> = Partial<{
	        [O in keyof S]: ComponentStyle<S[O]>;
	    }>;
	    interface Props extends HTMLAttributes, EventHandlers, SelfProps, FlowProps {
	    }
	    /**
	     * Default attributes
	     * @name HTMLAttributes
	     * @weight 200
	     */
	    interface HTMLAttributes extends React.AriaAttributes {
	        className?: string;
	        id?: string;
	        style?: React.CSSProperties;
	        tabIndex?: number;
	        role?: string;
	        attrs?: Object;
	    }
	    /**
	     * Default events
	     * @name Events
	     * @weight 500
	     */
	    interface EventHandlers {
	        /**
	         * An element receives a click event when a pointing device button (such as a mouse's primary mouse button) is both pressed and released while the pointer is located inside the element.
	         */
	        onClick?: EventProp<React.MouseEvent<HTMLElement>>;
	        /**
	         * Event fires when an element has received focus. The main difference between this event and focusin is that focusin bubbles while focus does not.
	         */
	        onFocus?: EventProp<React.FocusEvent<HTMLElement>>;
	        /**
	         * Event fires when an element has lost focus. The main difference between this event and focusout is that focusout bubbles while blur does not.
	         */
	        onBlur?: EventProp<React.FocusEvent<HTMLElement>>;
	        /**
	         * Event is fired at an Element when a pointing device button is pressed while the pointer is inside the element.
	         */
	        onMouseDown?: EventProp<React.MouseEvent<HTMLElement>>;
	        /**
	         * Event is fired at an Element when a button on a pointing device (such as a mouse or trackpad) is released while the pointer is located inside it. mouseup events are the counterpoint to onMouseDown events.
	         */
	        onMouseUp?: EventProp<React.MouseEvent<HTMLElement>>;
	        /**
	         * Event is fired at an Element when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.
	         */
	        onMouseEnter?: EventProp<React.MouseEvent<HTMLElement>>;
	        /**
	         * Event is fired at an Element when the cursor of a pointing device (usually a mouse) is moved out of it.
	         */
	        onMouseLeave?: EventProp<React.MouseEvent<HTMLElement>>;
	        /**
	         * Event is fired when one or more touch points are placed on the touch surface.
	         */
	        onTouchStart?: EventProp<React.TouchEvent<HTMLElement>>;
	        /**
	         * Event fires when one or more touch points are removed from the touch surface.
	         */
	        onTouchEnd?: EventProp<React.TouchEvent<HTMLElement>>;
	        /**
	         * Event is fired when a key that produces a character value is pressed down. Examples of keys that produce a character value are alphabetic, numeric, and punctuation keys.
	         * @deprecated This feature is no longer recommended.
	         */
	        onKeyPress?: EventProp<React.KeyboardEvent<HTMLElement>>;
	        /**
	         * Event is fired when a key is pressed.
	         */
	        onKeyDown?: EventProp<React.KeyboardEvent<HTMLElement>>;
	        /**
	         * Event is fired when a key is released.
	         */
	        onKeyUp?: EventProp<React.KeyboardEvent<HTMLElement>>;
	    }
	    /**
	     * Color styles
	     * @name StyleColors
	     * @weight 400
	     */
	    interface ColorProps {
	        textColor?: ColorProp;
	        backgroundColor?: ColorProp;
	    }
	    /**
	     * Border styles
	     * @name StyleBorder
	     * @weight 400
	     */
	    interface BorderProps {
	        borderWidth?: CSS.Properties["borderWidth"];
	        borderStyle?: CSS.Properties["borderStyle"];
	        borderColor?: CSS.Properties["borderColor"];
	        borderRadius?: CSS.Properties["borderRadius"];
	    }
	    /**
	     * Layout styles
	     * @name StyleLayout
	     * @weight 400
	     */
	    interface LayoutProps {
	        /**
	         * Width alias
	         */
	        w?: CSS.Properties["width"];
	        /**
	         * Heigth alias
	         */
	        h?: CSS.Properties["height"];
	        /**
	         * Shows or hides an element without changing the layout of a document.
	         */
	        visibility?: CSS.Properties["visibility"];
	        /**
	         * Sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
	         */
	        display?: CSS.Properties["display"];
	        /**
	         * Enables transition animation
	         */
	        animated?: boolean;
	    }
	    /**
	     * Padding styles
	     * @name StylePadding
	     * @weight 400
	     */
	    interface PaddingProps {
	        /**
	         * Padding alias
	         */
	        p?: CSS.Properties["padding"];
	        /**
	         * Padding horizontal alias
	         */
	        px?: CSS.Properties["padding"];
	        /**
	         * Padding vertical alias
	         */
	        py?: CSS.Properties["padding"];
	        /**
	         * PaddingRight alias
	         */
	        pr?: CSS.Properties["paddingRight"];
	        /**
	         * PaddingLeft alias
	         */
	        pl?: CSS.Properties["paddingLeft"];
	        /**
	         * PaddingTop alias
	         */
	        pt?: CSS.Properties["paddingTop"];
	        /**
	         * PaddingBottom alias
	         */
	        pb?: CSS.Properties["paddingBottom"];
	    }
	    /**
	     * Grid children styles
	     * @name StyleGrid
	     * @weight 400
	     */
	    interface MarginProps {
	        /**
	         * Margin alias
	         */
	        m?: CSS.Properties["margin"];
	        /**
	         * Margin horizontal alias
	         */
	        mx?: CSS.Properties["margin"];
	        /**
	         * Margin vertical alias
	         */
	        my?: CSS.Properties["margin"];
	        /**
	         * MarginRight alias
	         */
	        mr?: CSS.Properties["marginRight"];
	        /**
	         * MarginLeft alias
	         */
	        ml?: CSS.Properties["marginLeft"];
	        /**
	         * MarginTop alias
	         */
	        mt?: CSS.Properties["marginTop"];
	        /**
	         * MarginBottom alias
	         */
	        mb?: CSS.Properties["marginBottom"];
	    }
	    /**
	     * Flexbox children styles
	     * @name StyleFlex
	     * @weight 400
	     */
	    interface FlexProps {
	        /**
	         * Sets how a flex item will grow or shrink to fit the space available in its flex container.
	         */
	        flex?: CSS.Properties["flex"];
	        /**
	         * Sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.
	         */
	        flexBasis?: CSS.Properties["flexBasis"];
	        /**
	         * Sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).
	         */
	        flexGrow?: CSS.Properties["flexGrow"];
	        /**
	         * Sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.
	         */
	        flexShrink?: CSS.Properties["flexShrink"];
	        /**
	         * Property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
	         */
	        alignSelf?: CSS.Properties["alignSelf"];
	        /**
	         * Sets the way a box is justified inside its alignment container along the appropriate axis.
	         */
	        justifySelf?: CSS.Properties["justifySelf"];
	    }
	    /**
	     * Grid children styles
	     * @name StyleGrid
	     * @weight 400
	     */
	    interface GridProps {
	        /**
	         * Specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
	         */
	        gridColumnStart?: CSS.Properties["gridColumnStart"];
	        /**
	         * Specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
	         */
	        gridColumnEnd?: CSS.Properties["gridColumnEnd"];
	        /**
	         * Specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
	         */
	        gridRowStart?: CSS.Properties["gridRowStart"];
	        /**
	         * Specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
	         */
	        gridRowEnd?: CSS.Properties["gridRowEnd"];
	        /**
	         * Shorthand property for grid-column-start and grid-column-end specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
	         */
	        gridColumn?: CSS.Properties["gridColumn"];
	        /**
	         * Shorthand property for grid-row-start and grid-row-end specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
	         */
	        gridRow?: CSS.Properties["gridRow"];
	        /**
	         * Shorthand property for grid-row-start, grid-column-start, grid-row-end and grid-column-end, specifying a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
	         */
	        gridArea?: CSS.Properties["gridArea"];
	        /**
	         * Shorthand property sets both the align-self and justify-self properties. The first value is the align-self property value, the second the justify-self one. If the second value is not present, the first value is also used for it.
	         */
	        placeSelf?: CSS.Properties["placeSelf"];
	    }
	    /**
	     * Styles inside the component. Paddings, layout, border and color props
	     * @name StyleSelf
	     * @weight 400
	     */
	    interface SelfProps extends ColorProps, BorderProps, PaddingProps, LayoutProps {
	    }
	    /**
	     * Style outsize the component. Margins, flex, grid
	     * @name StyleFlow
	     * @weight 300
	     */
	    interface FlowProps extends MarginProps, FlexProps, GridProps {
	    }
	    type ColorProp = FunctionalProp<ThemeTypes.Colors<chroma.Color>, CSS.Properties["color"]>;
	    type IconProp = FunctionalProp<IconsetTypes.Index, React.ReactElement>;
	}
	export default Global;

}
declare module 'content/Divider/types' {
	import Global from '@flow-ui/core/types'; namespace DividerTypes {
	    interface Props extends Global.Props {
	        vertical?: boolean;
	        dash?: number;
	        gap?: number;
	        color?: Global.ColorProp;
	    }
	    interface Styles {
	        container: void;
	    }
	}
	export default DividerTypes;

}
declare module 'content/Icon/types' {
	import Global from '@flow-ui/core/types';
	import CSS from 'csstype'; namespace IconTypes {
	    /**
	     * TODO: circle и oval добавляют только padding
	     * пример <Icon shape="circle" type={(t) => t.outline.cube} />
	     */
	    type Shapes = "circle" | "oval" | "square";
	    interface Props extends Global.Props {
	        type: Global.IconProp;
	        shape?: Shapes;
	        size?: CSS.Properties["fontSize"];
	        color?: Global.ColorProp;
	        background?: Global.ColorProp;
	    }
	    interface Styles {
	        container: void;
	        icon: void;
	    }
	}
	export default IconTypes;

}
declare module 'content/Spinner/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types'; namespace SpinnerTypes {
	    interface Props extends Global.Props {
	        color?: Global.ColorProp;
	        children?: React.ReactElement;
	        shape?: 'square' | 'rounded' | 'round';
	        duration?: number;
	        count?: number;
	        size?: string;
	    }
	    interface Styles {
	        container: void;
	        children: void;
	    }
	}
	export default SpinnerTypes;

}
declare module 'content/Typography/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types';
	import CSS from 'csstype'; namespace TypographyTypes {
	    interface Props extends AnchorProps {
	        defaultStyles: any;
	        tag: string;
	        theme: any;
	    }
	    interface AnchorProps extends TextProps {
	        download?: any;
	        href?: string;
	        hrefLang?: string;
	        media?: string;
	        ping?: string;
	        rel?: string;
	        target?: string;
	        type?: string;
	        referrerPolicy?: string;
	    }
	    interface TextProps extends Global.Props {
	        quotes?: boolean;
	        ellipsis?: boolean;
	        decoration?: CSS.Properties["textDecoration"];
	        children?: React.ReactNode;
	        color?: Global.ColorProp;
	        background?: Global.ColorProp;
	        align?: CSS.Properties["textAlign"];
	        weight?: CSS.Properties["fontWeight"];
	        size?: CSS.Properties["fontSize"];
	        transform?: CSS.Properties["textTransform"];
	    }
	    interface Styles {
	    }
	}
	export default TypographyTypes;

}
declare module 'control/Button/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types'; namespace ButtonTypes {
	    interface Props extends Global.Props {
	        autoFocus?: boolean;
	        disabled?: boolean;
	        form?: string;
	        formAction?: string;
	        /**
	         * The formenctype attribute specifies how form-data should be encoded before sending it to a server. This attribute overrides the form's enctype attribute.
	         * The formenctype attribute is only used for buttons with type="submit".
	         */
	        formEncType?: string;
	        formMethod?: string;
	        formNoValidate?: boolean;
	        formTarget?: string;
	        name?: string;
	        type?: 'submit' | 'reset' | 'button';
	        value?: string | string[] | number;
	        size?: Global.Size;
	        decoration?: 'filled' | 'outline' | 'text' | 'plain';
	        shape?: 'square' | 'rounded' | 'round';
	        uppercase?: boolean;
	        color?: Global.ColorProp;
	        children?: React.ReactNode;
	    }
	    interface Styles {
	        container: {
	            decoration: Props["decoration"];
	            shape: Props["shape"];
	            size: Props["size"];
	        };
	    }
	}
	export default ButtonTypes;

}
declare module 'control/Checkbox/types' {
	import Global from '@flow-ui/core/types';
	import { ObjectInterpolation } from '@emotion/css'; namespace CheckboxTypes {
	    interface Props extends Global.Props {
	        label?: string;
	        labelColor?: Global.ColorProp;
	        checked?: boolean;
	        disabled?: boolean;
	        defaultValue?: boolean;
	        uppercase?: boolean;
	        size?: Global.Size;
	        onChange?: (checked: boolean) => void;
	    }
	    interface Styles {
	        check: ObjectInterpolation<undefined>;
	        icon: ObjectInterpolation<undefined>;
	    }
	}
	export default CheckboxTypes;

}
declare module 'misc/hocs/Field/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types'; namespace FieldTypes {
	    interface Props extends Global.Props {
	        label?: React.ReactNode;
	        hint?: React.ReactNode;
	        size?: Global.Size;
	        decoration?: 'none' | 'filled' | 'underline' | 'outline';
	        color?: Global.ColorProp;
	        shape?: 'round' | 'rounded' | 'square';
	        disabled?: boolean;
	        rightChild?: React.ReactNode;
	        leftChild?: React.ReactNode;
	        clearable?: boolean;
	    }
	    interface Styles {
	        container: void;
	        field: {
	            disabled: Props['disabled'];
	            focus: boolean;
	            shape: Props['shape'];
	            size: Props['size'];
	            decoration: Props['decoration'];
	        };
	        content: {
	            isLabelOverlay: boolean;
	        };
	        label: {
	            size: Props['size'];
	            isLabelOutside: boolean;
	            isLabelOverlay: boolean;
	        };
	        child: {
	            align: 'right' | 'left';
	            size: Props['size'];
	        };
	        hint: {
	            size: Props['size'];
	        };
	    }
	    interface PrivateProps extends Props {
	        focus: boolean;
	        isLabelOutside: boolean;
	        isLabelOverlay: boolean;
	        styles: Global.FlowStyles<Styles>;
	        labelName?: string;
	        attributes?: any;
	        children?: React.ReactNode;
	        onEnter?: () => void;
	        onClear?: () => void;
	    }
	}
	export default FieldTypes;

}
declare module 'control/DatePicker/types' {
	/**
	 * types.tsx
	 * author: I.Trikoz
	 */
	import { Interpolation } from '@emotion/core';
	import { Moment } from 'moment';
	import { CSSProperties } from 'react';
	import FieldTypes from 'misc/hocs/Field/types'; namespace DatePickerTypes {
	    type GridType = "year" | "month" | "day";
	    type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de';
	    interface Props extends FieldTypes.Props {
	        /**
	         * Type for DatePicker
	         * @default day
	         */
	        type?: GridType;
	        /**
	         * Property value could be a string
	         * if you pass format property aswell
	         * otherwise value should be instance of Date
	         */
	        value?: Moment | Date | string;
	        /**
	         * Format moment YYYY-MM-DD
	         * @default YYYY-MM-DD
	         */
	        format?: string;
	        /**
	         * Min datetime that could be selected
	         */
	        minValue?: Moment | Date | string;
	        /**
	         * Max datetime that could be selected
	         */
	        maxValue?: Moment | Date | string;
	        /**
	         * Callback function will with Date object
	         * or string if format property was passed.
	         */
	        onChange?: (moment: Moment, value: string) => void;
	        /**
	         * Do not close datepicker on change
	         * latest value
	         */
	        stayOpen?: boolean;
	        /**
	         * Enable mask input
	         */
	        masked?: boolean;
	        /**
	         * @default ru
	         */
	        locale?: Locale;
	        /**
	         * Hide today button
	         */
	        hideToday?: boolean;
	    }
	    interface DateGridProps {
	        hideToday: boolean;
	        value: Moment;
	        minValue: Moment;
	        maxValue: Moment;
	        onChange: (date: Moment) => void;
	        styles: any;
	        type: GridType;
	    }
	    interface DateGridCalendarProps {
	        value: Moment;
	        tmp: Moment;
	        minValue: Moment;
	        maxValue: Moment;
	        active: Moment;
	        onClick?: () => void;
	        style?: CSSProperties;
	        styles: any;
	    }
	    interface DateGridTitleProps {
	        value: Moment;
	        minValue: Moment;
	        maxValue: Moment;
	        gridType: GridType;
	        onNext: () => void;
	        onPrevious: () => void;
	        onGridTypeChange: (type: GridType) => void;
	        styles: any;
	    }
	    interface Styles {
	        textFieldWrapper?: Interpolation;
	        textFieldOkButton?: Interpolation;
	        dateGrind?: Interpolation;
	        weekDay?: Interpolation;
	        title?: Interpolation;
	        gridBlock?: Interpolation;
	    }
	}
	export default DatePickerTypes;

}
declare module 'control/Menu/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types'; namespace MenuTypes {
	    type Value = string | number;
	    interface Props extends Global.Props {
	        defaultValue?: Value;
	        value?: Value;
	        onChange?: (value: Value) => void;
	        items: Item[];
	        size?: Global.Size;
	        decoration?: 'filled' | 'outline' | 'color' | 'underline' | 'tab' | 'filled-underline';
	        flip?: boolean;
	        distance?: string;
	        direction?: "row" | "column";
	        shape?: 'square' | 'rounded' | 'round';
	        border?: 'none' | 'narrow' | 'wide';
	        align?: 'start' | 'center' | 'end';
	        separator?: React.ReactElement;
	        color?: Global.ColorProp;
	        disabled?: boolean;
	    }
	    interface Item extends Partial<Global.EventHandlers>, Partial<Props> {
	        content: React.ReactNode;
	        value: Value;
	        disabled?: boolean;
	    }
	    interface ItemProps extends Item {
	        active: boolean;
	        styles: Global.FlowStyles<Styles>;
	        onEnter: () => void;
	    }
	    interface Styles {
	        container: {
	            size: Props['size'];
	            flip: Props['flip'];
	            border: Props['border'];
	        };
	        item: {
	            shape: Props['shape'];
	            disabled: boolean;
	            active: boolean;
	            size: Props['size'];
	            decoration: Props['decoration'];
	        };
	        separator: void;
	    }
	}
	export default MenuTypes;

}
declare module 'control/Radio/types' {
	import Global from '@flow-ui/core/types';
	import { ObjectInterpolation } from '@emotion/css'; namespace RadioTypes {
	    interface Props extends Global.Props {
	        label?: string;
	        labelColor?: Global.ColorProp;
	        checked?: boolean;
	        disabled?: boolean;
	        defaultValue?: boolean;
	        uppercase?: boolean;
	        size?: Global.Size;
	        onChange?: (checked: boolean) => void;
	    }
	    interface Styles {
	        check: ObjectInterpolation<undefined>;
	        icon: ObjectInterpolation<undefined>;
	    }
	}
	export default RadioTypes;

}
declare module 'control/Range/types' {
	import Global from 'types'; namespace RangeTypes {
	    interface Props extends Global.Props {
	        min?: number;
	        max?: number;
	        defaultValue?: number;
	        value?: number;
	        onChange?: (value: number) => void;
	        mode?: 'single' | 'range';
	        className?: string;
	    }
	    interface Styles {
	        container: void;
	        rail: void;
	        track: void;
	        thumb: void;
	    }
	}
	export default RangeTypes;

}
declare module 'control/Select/types' {
	import FieldTypes from 'misc/hocs/Field/types'; namespace SelectTypes {
	    interface Option {
	        text: string;
	        value: any;
	    }
	    interface Props extends FieldTypes.Props {
	        placeholder?: string;
	        options: Option[];
	        multiselect?: boolean;
	        searchable?: boolean;
	        values?: Option[];
	        defaultValues?: Option[];
	        onChange?: (values: Option[], changedValue?: Option) => void;
	    }
	    type Actions = {
	        type: 'setSelectedOptions';
	        payload: Option[];
	    } | {
	        type: 'toggleOpen';
	        payload: boolean;
	    } | {
	        type: 'search';
	        payload: string;
	    } | {
	        type: 'setCursor';
	        payload: number;
	    } | {
	        type: 'clear';
	    };
	    type State = {
	        selectedOptions: Option[];
	        open: boolean;
	        searchValue: string;
	        empty: boolean;
	        cursor: number;
	    };
	    interface OptionsProps extends SearchProps {
	        selected: SelectTypes.Option[];
	        onClose: (option: any) => void;
	        searchable?: boolean;
	    }
	    interface SearchProps {
	        searchValue: string;
	        onSearch: (searchValue: string) => void;
	        size?: number;
	        styles: any;
	        placeholder?: string;
	        defaultValue?: string;
	        disabled?: boolean;
	    }
	    interface Styles extends FieldTypes.Styles {
	        fieldStyles: {
	            open: boolean;
	        };
	        placeholder: void;
	        input: void;
	        options: void;
	        optionItem: void;
	        optionItemText: void;
	        dropMenu: void;
	        dropItem: {
	            underCursor: boolean;
	        };
	        insideLabelStyles: void;
	    }
	}
	export default SelectTypes;

}
declare module 'control/Switch/types' {
	import Global from '@flow-ui/core/types';
	import { ObjectInterpolation } from '@emotion/css'; namespace SwitchTypes {
	    interface Props extends Global.Props {
	        label?: string;
	        labelColor?: Global.ColorProp;
	        checked?: boolean;
	        disabled?: boolean;
	        defaultValue?: boolean;
	        uppercase?: boolean;
	        size?: Global.Size;
	        onChange?: (checked: boolean) => void;
	    }
	    interface Styles {
	        check: ObjectInterpolation<undefined>;
	        icon: ObjectInterpolation<undefined>;
	    }
	}
	export default SwitchTypes;

}
declare module 'control/TextField/types' {
	import { ChangeEventHandler } from 'react';
	import IMask from 'imask';
	import FieldTypes from 'misc/hocs/Field/types'; namespace TextFieldTypes {
	    type InputTypes = 'email' | 'hidden' | 'number' | 'password' | 'reset' | 'search' | 'tel' | 'text' | 'url';
	    interface Props extends FieldTypes.Props, InputProps, TextAreaProps {
	        defaultValue?: string | number;
	        align?: "left" | "right";
	        multiline?: boolean;
	        masked?: IMask.AnyMaskedOptions;
	        onChange?: ChangeEventHandler<HTMLInputElement>;
	    }
	    interface InputProps {
	        autoComplete?: string;
	        autoFocus?: boolean;
	        list?: string;
	        name?: string;
	        placeholder?: string;
	        pattern?: string;
	        readOnly?: boolean;
	        required?: boolean;
	        type?: InputTypes;
	        value?: string | number;
	        form?: string;
	        formAction?: string;
	        formEncType?: string;
	        formMethod?: string;
	        formNoValidate?: boolean;
	        formTarget?: string;
	        max?: number | string;
	        maxLength?: number;
	        min?: number | string;
	        minLength?: number;
	        step?: number | string;
	        width?: number | string;
	    }
	    interface TextAreaProps {
	        cols?: number;
	        rows?: number;
	        wrap?: string;
	    }
	    interface Styles extends FieldTypes.Styles {
	        input: {
	            isLabelOverlay: boolean;
	        };
	        insideLabelStyles: void;
	    }
	}
	export default TextFieldTypes;

}
declare module 'data/Meter/types' {
	import Global from '@flow-ui/core/types'; namespace MeterTypes {
	    type MeterType = 'line' | 'circle';
	    type MeterDecoration = 'filled' | 'outline';
	    type MeterShape = 'square' | 'round';
	    interface Props extends Global.Props {
	        percent: number;
	        size?: Global.Size;
	        /**
	         * @default line
	         */
	        type?: MeterType;
	        decoration?: MeterDecoration;
	        shape?: MeterShape;
	        color?: Global.ColorProp;
	        /**
	         * Enabled process animation
	         * @default false
	         */
	        loading?: boolean;
	    }
	    interface Styles {
	        container: {
	            shape: MeterShape;
	            size: Global.Size;
	            decoration: MeterDecoration;
	        };
	        thumb: {
	            shape: MeterShape;
	            size: Global.Size;
	        };
	    }
	}
	export default MeterTypes;

}
declare module 'data/Table/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types'; namespace TableTypes {
	    interface TableColumn {
	        title?: string;
	        dataIndex: string;
	        width?: number;
	        render?: (row: any, value: any) => void;
	    }
	    interface TableActions {
	        label: string;
	        className?: string;
	        onAction: (row: any) => void;
	    }
	    interface TableForm {
	        key?: string | number;
	        defaultData?: {
	            [key: string]: any;
	        };
	        render: any;
	        dismiss?: () => void;
	    }
	    interface Props extends Global.Props {
	        data: Object[];
	        columns: TableColumn[];
	        form?: TableForm;
	        actions?: TableActions[];
	        border?: 'all' | 'external' | 'internal' | 'vertical' | 'horizontal';
	        indexKey?: string;
	        scope?: any;
	        pagination?: TablePagination;
	        noDataLabel?: string;
	        children?: React.ReactElement;
	        onRowClick?: (row: any) => void;
	        search?: boolean;
	        onSearch?: (value: any) => void;
	        hideHeaders?: boolean;
	        className?: string;
	    }
	    interface RowProps {
	        row: any;
	        columns: TableColumn[];
	        isSelected?: boolean;
	        isExpanding?: boolean;
	        isBlur?: boolean;
	        actions?: any;
	        border?: any;
	        scope?: any;
	        form?: any;
	        style?: any;
	        children?: any;
	        onRowClick?: (row: any) => void;
	        styles: Global.FlowStyles<Styles>;
	    }
	    interface ColumnProps {
	        row: any;
	        columns: TableColumn[];
	        scope?: any;
	        children?: any;
	        styles: Global.FlowStyles<Styles>;
	    }
	    interface ActionsProps {
	        actions: any[];
	        data: any;
	        children?: any;
	        styles: Global.FlowStyles<Styles>;
	    }
	    interface FormProps {
	        data: any;
	        dismiss?: () => void;
	        columns: TableColumn[];
	        Form: any;
	        children?: any;
	    }
	    interface InjectForm {
	        data: {
	            [key: string]: any;
	        };
	        columns: TableColumn[];
	        setData: (key: string, value: any) => void;
	        dismiss?: () => void;
	    }
	    interface TablePagination {
	        pageSize: number;
	        pageTotalSize?: number;
	        async?: (page: number) => boolean;
	    }
	    interface PaginationProps {
	        pagination: TablePagination;
	        page: number;
	        searchActive: boolean;
	        search?: boolean;
	        data: {
	            [key: string]: any;
	        }[];
	        onChange: (page: number, searchBar: boolean) => void;
	        children?: any;
	        styles: Global.FlowStyles<Styles>;
	    }
	    interface Styles {
	        container: void;
	        content: void;
	        headRow: void;
	        headColumn: void;
	        search: void;
	        body: void;
	        pagination: void;
	        paginationButton: {
	            active: boolean;
	        };
	        row: {
	            edited: boolean;
	            withActions: boolean;
	        };
	        subrow: void;
	        column: void;
	        more: void;
	        actions: void;
	        actionButtons: void;
	        actionButtonsEdit: void;
	    }
	}
	export default TableTypes;

}
declare module 'layout/Badge/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types'; namespace BadgeTypes {
	    interface Props extends Global.Props {
	        content: React.ReactNode;
	        align?: "top" | "bottom" | "left" | "right" | "top-right" | "bottom-right" | "top-left" | "bottom-left";
	        children?: React.ReactNode;
	    }
	    interface Styles {
	        container: void;
	        holder: {
	            align: Props["align"];
	        };
	    }
	}
	export default BadgeTypes;

}
declare module 'layout/Block/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types';
	import CSS from 'csstype'; namespace BlockTypes {
	    interface Props extends Global.Props {
	        tag?: "div" | "span" | "header" | "footer" | "article" | "section" | "aside" | "main";
	        surface?: "major" | "medium" | "minor";
	        hoverSurface?: "major" | "medium" | "minor";
	        position?: CSS.Properties["position"];
	        children?: React.ReactNode;
	        background?: Global.ColorProp;
	        color?: Global.ColorProp;
	        overflow?: CSS.Properties["overflow"];
	    }
	    interface Styles {
	        container: {
	            surface: Props["surface"];
	            hoverSurface: Props["hoverSurface"];
	        };
	    }
	}
	export default BlockTypes;

}
declare module 'layout/Drop/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types'; namespace DropTypes {
	    interface TargetCoordinates {
	        top: number;
	        bottom: number;
	        left: number;
	        right: number;
	    }
	    interface Props extends Global.SelfProps {
	        target: any;
	        align?: "top" | "bottom" | "left" | "right";
	        justify?: "start" | "center" | "end" | "start-outside" | "end-outside";
	        stretchWidth?: boolean;
	        stretchHeight?: boolean;
	        distance?: number;
	        onClickOutside?: (event: React.MouseEvent<HTMLElement>, outsideTarget?: boolean) => void;
	        onEsc?: () => void;
	        children?: React.ReactNode;
	    }
	    interface Styles {
	        container: void;
	    }
	}
	export default DropTypes;

}
declare module 'layout/Flexbox/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types';
	import CSS from 'csstype'; namespace FlexboxTypes {
	    interface Props extends Global.Props {
	        column?: boolean;
	        inline?: boolean;
	        alignItems?: CSS.Properties["alignItems"];
	        alignContent?: CSS.Properties["alignContent"];
	        justifyContent?: CSS.Properties["justifyContent"];
	        justifyItems?: CSS.Properties["justifyItems"];
	        direction?: CSS.Properties["flexDirection"];
	        wrap?: CSS.Properties["flexWrap"];
	        flow?: CSS.Properties["flexFlow"];
	        children?: React.ReactNode;
	    }
	    interface Styles {
	        container: void;
	    }
	}
	export default FlexboxTypes;

}
declare module 'layout/Grid/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types';
	import CSS from 'csstype'; namespace GridTypes {
	    interface Props extends Global.Props {
	        inline?: boolean;
	        children?: React.ReactNode;
	        templateColumns?: CSS.Properties["gridTemplateColumns"];
	        templateRows?: CSS.Properties["gridTemplateRows"];
	        templateAreas?: CSS.Properties["gridTemplateAreas"];
	        columnGap?: CSS.Properties["gridColumnGap"];
	        rowGap?: CSS.Properties["gridRowGap"];
	        gap?: CSS.Properties["gridGap"];
	        autoColumns?: CSS.Properties["gridAutoColumns"];
	        autoRows?: CSS.Properties["gridAutoRows"];
	        autoFlow?: CSS.Properties["gridAutoFlow"];
	        alignItems?: CSS.Properties["alignItems"];
	        alignContent?: CSS.Properties["alignContent"];
	        justifyContent?: CSS.Properties["justifyContent"];
	        justifyItems?: CSS.Properties["justifyItems"];
	    }
	    interface Styles {
	        container: void;
	    }
	}
	export default GridTypes;

}
declare module 'layout/Modal/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types'; namespace ModalTypes {
	    interface Ref {
	        open: (customContent?: React.ReactElement | null) => void;
	        close: (didClose?: () => void) => void;
	        setTitle: (title: string) => void;
	        setSubtitle: (subtitle: string) => void;
	        setCenter: (center: boolean) => void;
	        setCustomContent: (customContent: React.ReactElement | null) => void;
	        title?: string;
	        subtitle?: string;
	        center: boolean;
	        customContent: React.ReactElement | null;
	        overlay: any;
	        window: any;
	    }
	    interface Props extends Global.SelfProps {
	        title?: string;
	        subtitle?: string;
	        fullSize?: boolean;
	        children?: any;
	        hideHeader?: boolean;
	        onClose?: () => void;
	        didClose?: () => void;
	        onOpen?: () => void;
	        didOpen?: () => void;
	    }
	    interface InnerProps extends Props {
	        innerRef: any;
	    }
	    interface StyleProps {
	        visible: boolean;
	        center: boolean;
	        fullSize?: boolean;
	    }
	    interface ModalOverlayProps {
	        visible: boolean;
	        center: boolean;
	        fullSize?: boolean;
	        children?: any;
	        styles: Global.FlowStyles<Styles>;
	    }
	    interface ModalWindowProps {
	        title?: string;
	        subtitle?: string;
	        visible: boolean;
	        center: boolean;
	        fullSize?: boolean;
	        hideHeader?: boolean;
	        children?: any;
	        containerAttr?: React.HTMLAttributes<HTMLElement> & Global.SelfProps;
	        onClosePressed: () => void;
	        styles: Global.FlowStyles<Styles>;
	    }
	    interface ModalHeaderProps {
	        title?: string;
	        subtitle?: string;
	        hideHeader?: boolean;
	        onClosePressed: () => void;
	        styles: Global.FlowStyles<Styles>;
	    }
	    interface Styles {
	        overlay: {
	            visible?: boolean;
	            center?: boolean;
	        };
	        window: {
	            visible?: boolean;
	            fullSizeCenter?: boolean;
	        };
	        header: void;
	        cross: void;
	    }
	}
	export default ModalTypes;

}
declare module 'layout/Notification/types' {
	 namespace NotificationTypes {
	    interface Props {
	        children?: React.ReactNode;
	        onClick?: () => void;
	    }
	    interface NotifyOptions {
	        /**
	         * Title of notification
	         */
	        title: string;
	        /**
	         * Message of notification
	         */
	        message: string;
	        /**
	         * Notification will be removed after timeout
	         * value in milisecods
	         */
	        timeout?: number;
	        /**
	         * Will call on notificaion click
	         */
	        onClick?: () => void;
	        /**
	         * if custom content filled then title and message will be ignored
	         */
	        customContent?: React.ReactElement;
	    }
	    interface Styles {
	        container: void;
	    }
	}
	export default NotificationTypes;

}
declare module 'layout/Panel/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types'; namespace PanelTypes {
	    interface Props extends Global.Props {
	        align?: "top" | "right" | "bottom" | "left";
	        children?: React.ReactNode;
	    }
	    interface Styles {
	        container: {
	            align: Props["align"];
	        };
	    }
	}
	export default PanelTypes;

}
declare module 'layout/Popover/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types';
	import CSS from 'csstype'; namespace PopoverTypes {
	    interface Props extends Global.Props {
	        align?: "top" | "bottom" | "left" | "right";
	        background?: Global.ColorProp;
	        color?: Global.ColorProp;
	        children?: React.ReactNode;
	        arrowWidth?: CSS.Properties["width"];
	        arrowHeight?: CSS.Properties["height"];
	    }
	    interface Styles {
	        container: void;
	        arrow: {
	            align: Props['align'];
	        };
	    }
	}
	export default PopoverTypes;

}
declare module 'layout/Tree/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types'; namespace TreeTypes {
	    interface Props extends Global.Props {
	        label?: React.ReactNode | string;
	        children?: React.ReactNode;
	        decoration?: 'flat' | 'drop' | "inline";
	        alwaysOpen?: boolean;
	        defaultOpen?: boolean;
	        indent?: boolean;
	    }
	    interface Styles {
	        container: {
	            decoration: Props['decoration'];
	            needIndent: boolean;
	        };
	        label: void;
	        icon: {
	            decoration: Props['decoration'];
	            disabled: boolean;
	        };
	        child: {
	            isOpen: boolean;
	        };
	    }
	}
	export default TreeTypes;

}
declare module 'misc/themes/types' {
	import chroma from 'chroma-js';
	import { ObjectInterpolation } from '@emotion/core';
	/**
	 * Content
	 */
	import DividerTypes from 'content/Divider/types';
	import IconTypes from 'content/Icon/types';
	import SpinnerTypes from 'content/Spinner/types';
	import TypographyTypes from 'content/Typography/types';
	/**
	 * Control
	 */
	import ButtonTypes from 'control/Button/types';
	import CheckboxTypes from 'control/Checkbox/types';
	import DatePickerTypes from 'control/DatePicker/types';
	import MenuTypes from 'control/Menu/types';
	import RadioTypes from 'control/Radio/types';
	import RangeTypes from 'control/Range/types';
	import SelectTypes from 'control/Select/types';
	import SwitchTypes from 'control/Switch/types';
	import TextFieldTypes from 'control/TextField/types';
	/**
	 * Data
	 */
	import MeterTypes from 'data/Meter/types';
	import TableTypes from 'data/Table/types';
	/**
	 * Layout
	 */
	import BadgeTypes from 'layout/Badge/types';
	import BlockTypes from 'layout/Block/types';
	import DropTypes from 'layout/Drop/types';
	import FlexboxTypes from 'layout/Flexbox/types';
	import GridTypes from 'layout/Grid/types';
	import ModalTypes from 'layout/Modal/types';
	import NotificationTypes from 'layout/Notification/types';
	import PanelTypes from 'layout/Panel/types';
	import PopoverTypes from 'layout/Popover/types';
	import TreeTypes from 'layout/Tree/types';
	import Global from 'types'; namespace ThemeTypes {
	    interface Index extends Variables<chroma.Color> {
	        assets: Assets;
	        overrides: Overrides;
	        replace: Replace;
	    }
	    interface Variables<T = [number, number, number, number?]> {
	        name: string;
	        color: Colors<T>;
	        radius: Radius;
	        distance: Distance;
	        typography: Typography;
	    }
	    interface Assets {
	        global?: ObjectInterpolation<undefined>;
	        border: {
	            width: string;
	            style: string;
	            color: string;
	        };
	        shadow: {
	            default: string;
	            short: string;
	            long: string;
	        };
	        gradient: {
	            linear: string;
	            linearVariant: string;
	            radial: string;
	            radialVariant: string;
	        };
	        focus: ObjectInterpolation<undefined>;
	        fieldHeight: {
	            xsmall: string;
	            small: string;
	            medium: string;
	            large: string;
	            xlarge: string;
	        };
	    }
	    interface Overrides {
	        Divider?: Global.OverridesStyle<DividerTypes.Styles>;
	        Icon?: Global.OverridesStyle<IconTypes.Styles>;
	        Spinner?: Global.OverridesStyle<SpinnerTypes.Styles>;
	        Typography?: Global.OverridesStyle<TypographyTypes.Styles>;
	        Button?: Global.OverridesStyle<ButtonTypes.Styles>;
	        Checkbox?: Global.OverridesStyle<CheckboxTypes.Styles>;
	        DatePicker?: Global.OverridesStyle<DatePickerTypes.Styles>;
	        Menu?: Global.OverridesStyle<MenuTypes.Styles>;
	        Radio?: Global.OverridesStyle<RadioTypes.Styles>;
	        Range?: Global.OverridesStyle<RangeTypes.Styles>;
	        Select?: Global.OverridesStyle<SelectTypes.Styles>;
	        Switch?: Global.OverridesStyle<SwitchTypes.Styles>;
	        TextField?: Global.OverridesStyle<TextFieldTypes.Styles>;
	        Meter?: Global.OverridesStyle<MeterTypes.Styles>;
	        Table?: Global.OverridesStyle<TableTypes.Styles>;
	        Badge?: Global.OverridesStyle<BadgeTypes.Styles>;
	        Block?: Global.OverridesStyle<BlockTypes.Styles>;
	        Drop?: Global.OverridesStyle<DropTypes.Styles>;
	        Flexbox?: Global.OverridesStyle<FlexboxTypes.Styles>;
	        Grid?: Global.OverridesStyle<GridTypes.Styles>;
	        Modal?: Global.OverridesStyle<ModalTypes.Styles>;
	        Notification?: Global.OverridesStyle<NotificationTypes.Styles>;
	        Panel?: Global.OverridesStyle<PanelTypes.Styles>;
	        Popover?: Global.OverridesStyle<PopoverTypes.Styles>;
	        Tree?: Global.OverridesStyle<TreeTypes.Styles>;
	    }
	    type Replace = (variables: DeepPartial<Variables>, assets?: (variables: Variables<chroma.Color>) => DeepPartial<Assets>, overrides?: Overrides) => Index;
	    type Colors<T> = {
	        background: T;
	        backgroundVariant: T;
	        surface: T;
	        surfaceVariant: T;
	        primary: T;
	        secondary: T;
	        onBackground: T;
	        onSurface: T;
	        onPrimary: T;
	        onSecondary: T;
	        lightest: T;
	        light: T;
	        hard: T;
	        hardest: T;
	        accent: {
	            red: T;
	            green: T;
	            blue: T;
	            orange: T;
	        };
	    };
	    type Radius = {
	        default: string;
	        narrow: string;
	        wide: string;
	    };
	    interface Distance {
	        xsmall: string;
	        small: string;
	        medium: string;
	        large: string;
	        xlarge: string;
	    }
	    interface Typography {
	        paragraph: ObjectInterpolation<undefined>;
	        header: {
	            1: ObjectInterpolation<undefined>;
	            2: ObjectInterpolation<undefined>;
	            3: ObjectInterpolation<undefined>;
	            4: ObjectInterpolation<undefined>;
	        };
	        text: {
	            1: ObjectInterpolation<undefined>;
	            2: ObjectInterpolation<undefined>;
	            3: ObjectInterpolation<undefined>;
	            4: ObjectInterpolation<undefined>;
	        };
	        display: {
	            1: ObjectInterpolation<undefined>;
	            2: ObjectInterpolation<undefined>;
	            3: ObjectInterpolation<undefined>;
	            4: ObjectInterpolation<undefined>;
	        };
	        caption: {
	            1: ObjectInterpolation<undefined>;
	            2: ObjectInterpolation<undefined>;
	            3: ObjectInterpolation<undefined>;
	            4: ObjectInterpolation<undefined>;
	        };
	    }
	    type DeepPartial<T> = {
	        [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>;
	    };
	}
	export default ThemeTypes;

}
declare module 'misc/utils/mergeObjects' {
	export default function mergeObjects(target?: Object, source?: Object, modify?: (value: any) => any): Object;

}
declare module 'misc/utils/createTheme' {
	import ThemeTypes from 'misc/themes/types';
	import chroma from 'chroma-js';
	export type CreateTheme = (mainVaraibles: ThemeTypes.Variables, mainAssets: (variables: ThemeTypes.Variables<chroma.Color>) => ThemeTypes.Assets, mainOverrides?: any) => ThemeTypes.Index; const createTheme: CreateTheme;
	export default createTheme;

}
declare module 'misc/typography' {
	 const typography: {
	    paragraph: {
	        fontSize: string;
	        lineHeight: number;
	    };
	    header: {
	        1: {
	            fontSize: string;
	            lineHeight: string;
	            fontWeight: number;
	        };
	        2: {
	            fontSize: string;
	            lineHeight: string;
	            fontWeight: number;
	        };
	        3: {
	            fontSize: string;
	            lineHeight: string;
	            fontWeight: number;
	        };
	        4: {
	            fontSize: string;
	            lineHeight: string;
	            fontWeight: number;
	        };
	    };
	    text: {
	        1: {
	            fontSize: string;
	            lineHeight: string;
	        };
	        2: {
	            fontSize: string;
	            lineHeight: string;
	        };
	        3: {
	            fontSize: string;
	            lineHeight: string;
	        };
	        4: {
	            fontSize: string;
	            lineHeight: string;
	        };
	    };
	    display: {
	        1: {
	            fontSize: string;
	            lineHeight: number;
	        };
	        2: {
	            fontSize: string;
	            lineHeight: number;
	        };
	        3: {
	            fontSize: string;
	            lineHeight: number;
	        };
	        4: {
	            fontSize: string;
	            lineHeight: number;
	        };
	    };
	    caption: {
	        1: {
	            fontSize: string;
	            lineHeight: string;
	        };
	        2: {
	            fontSize: string;
	            lineHeight: string;
	        };
	        3: {
	            fontSize: string;
	            lineHeight: string;
	        };
	        4: {
	            fontSize: string;
	            lineHeight: string;
	        };
	    };
	};
	export default typography;

}
declare module 'misc/themes/light' {
	import Theme from 'misc/themes/types'; const _default: Theme.Index;
	export default _default;

}
declare module 'misc/themes/dark' {
	 const dark: import("./types").default.Index;
	export default dark;

}
declare module 'misc/themes' {
	export { default as light } from 'misc/themes/light';
	export { default as dark } from 'misc/themes/dark';

}
declare module 'layout/Viewport/types' {
	/// <reference types="react" />
	import ThemeType from 'misc/themes/types';
	import Global from '@flow-ui/core/types';
	import ThemeTypes from 'misc/themes/types'; namespace ViewportTypes {
	    interface Themes {
	        light: ThemeTypes.Index;
	        dark: ThemeTypes.Index;
	    }
	    interface Props {
	        wrapper?: boolean;
	        className?: string;
	        id?: string;
	        theme?: Global.FunctionalProp<Themes, ThemeType.Index>;
	        children?: React.ReactNode;
	    }
	    interface MountArea {
	        className?: string;
	    }
	    interface MountAreaElement {
	        key: string;
	        children: React.ReactElement;
	    }
	    interface Context {
	        theme: ThemeType.Index;
	    }
	    interface DialogOptions {
	        /**
	         * Title of modal window header
	         */
	        title?: string;
	        /**
	         * Subtitle of modal window header
	         */
	        subtitle?: string;
	        /**
	         * Message of dialog
	         */
	        message?: string;
	        /**
	         * Button text
	         */
	        buttonText?: string;
	        /**
	         * Hides modal window header
	         */
	        hideHeader?: boolean;
	        /**
	         * if custom content filled then message and buttonText will be ignored
	         */
	        customContent?: React.ReactElement;
	    }
	}
	export default ViewportTypes;

}
declare module 'layout/Viewport/MountArea' {
	import React, { FC } from 'react';
	import ViewportTypes from 'layout/Viewport/types';
	export let addElement: (children: React.ReactElement, key?: string) => string;
	export let removeElement: (key: string) => void; const MountArea: FC<ViewportTypes.MountArea>;
	export default MountArea;

}
declare module 'layout/Viewport/styles' {
	 const _default: (theme: any, wrapper: any) => {
	    global: import("@emotion/utils").SerializedStyles;
	};
	export default _default;

}
declare module 'layout/Viewport' {
	import React, { FC } from 'react';
	import ViewportTypes from 'layout/Viewport/types';
	export const FlowContext: React.Context<ViewportTypes.Context>; const Viewport: FC<ViewportTypes.Props>;
	export default Viewport;

}
declare module 'misc/hooks/useFlow' {
	 const _default: () => import("../../layout/Viewport/types").default.Context;
	export default _default;

}
declare module 'misc/hooks/useContainer' {
	 const _default: (props: any, mouseFocus?: boolean | undefined, disableDecoration?: boolean | undefined) => {
	    attributes: any;
	    focus: boolean;
	};
	export default _default;

}
declare module 'misc/hooks/useStyles' {
	import Global from 'types'; const createStyles: <S>(props: any, componentStyles: Global.ComponentStyles<S> | Global.FunctionalComponentStyles<S>, componentName?: "Menu" | "Divider" | "Icon" | "Spinner" | "Typography" | "Button" | "Checkbox" | "DatePicker" | "Radio" | "Range" | "Select" | "Switch" | "TextField" | "Meter" | "Table" | "Badge" | "Block" | "Drop" | "Flexbox" | "Grid" | "Modal" | "Notification" | "Panel" | "Popover" | "Tree" | undefined) => Global.FlowStyles<S>;
	export default createStyles;

}
declare module 'misc/hooks/useStyleProps' {
	import Global from '@flow-ui/core/types';
	import CSS from 'csstype';
	interface Props extends Global.SelfProps, Global.FlowProps {
	    [key: string]: any;
	} type Color = {
	    background: CSS.Properties["background"];
	    color: CSS.Properties["color"];
	}; type Border = {
	    borderWidth: CSS.Properties["borderWidth"];
	    borderStyle: CSS.Properties["borderStyle"];
	    borderColor: CSS.Properties["borderColor"];
	    borderRadius: CSS.Properties["borderRadius"];
	}; type Padding = {
	    padding: CSS.Properties["padding"];
	    paddingTop: CSS.Properties["paddingTop"];
	    paddingLeft: CSS.Properties["paddingLeft"];
	    paddingRight: CSS.Properties["paddingRight"];
	    paddingBottom: CSS.Properties["paddingBottom"];
	}; type Margin = {
	    margin: CSS.Properties["margin"];
	    marginTop: CSS.Properties["marginTop"];
	    marginLeft: CSS.Properties["marginLeft"];
	    marginRight: CSS.Properties["marginRight"];
	    marginBottom: CSS.Properties["marginBottom"];
	}; type Layout = {
	    display: CSS.Properties["display"];
	    visibility: CSS.Properties["visibility"];
	    width: CSS.Properties["width"];
	    height: CSS.Properties["height"];
	    transition: CSS.Properties["transition"];
	}; type Flex = {
	    flex: CSS.Properties["flex"];
	    flexBasis: CSS.Properties["flexBasis"];
	    flexGrow: CSS.Properties["flexGrow"];
	    flexShrink: CSS.Properties["flexShrink"];
	    alignSelf: CSS.Properties["alignSelf"];
	    justifySelf: CSS.Properties["justifySelf"];
	}; type Grid = {
	    gridColumnStart: CSS.Properties["gridColumnStart"];
	    gridColumnEnd: CSS.Properties["gridColumnEnd"];
	    gridRowStart: CSS.Properties["gridRowStart"];
	    gridRowEnd: CSS.Properties["gridRowEnd"];
	    gridColumn: CSS.Properties["gridColumn"];
	    gridRow: CSS.Properties["gridRow"];
	    gridArea: CSS.Properties["gridArea"];
	    placeSelf: CSS.Properties["placeSelf"];
	};
	interface InjectedStyleProps {
	    color: Color;
	    border: Border;
	    padding: Padding;
	    margin: Margin;
	    layout: Layout;
	    flex: Flex;
	    grid: Grid;
	    flow: Margin & Flex & Grid;
	    self: Padding & Layout & Color & Border;
	    all: Margin & Flex & Grid & Padding & Layout & Color & Border;
	} const useStyleProps: (props: Props) => InjectedStyleProps;
	export default useStyleProps;

}
declare module 'content/Divider/styles' {
	import Global from '@flow-ui/core/types';
	import Types from 'content/Divider/types'; const dividerStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default dividerStyles;

}
declare module 'content/Divider' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'content/Divider/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<unknown>>;
	export default _default;

}
declare module 'misc/icons/filled' {
	import IconTypes from 'misc/icons/types'; const filled: IconTypes.Filled;
	export default filled;

}
declare module 'misc/icons/outline' {
	import IconTypes from 'misc/icons/types'; const outline: IconTypes.Outline;
	export default outline;

}
declare module 'misc/icons' {
	export { default as filled } from 'misc/icons/filled';
	export { default as outline } from 'misc/icons/outline';

}
declare module 'content/Icon/styles' {
	import Global from 'types';
	import Types from 'content/Icon/types'; const iconStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default iconStyles;

}
declare module 'content/Icon' {
	import React from 'react';
	import Types from 'content/Icon/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'content/Spinner/styles' {
	import Types from 'content/Spinner/types';
	import Global from 'types'; const spinnerStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default spinnerStyles;

}
declare module 'content/Spinner' {
	import React from 'react';
	import Types from 'content/Spinner/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'content/Typography/Typography' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'content/Typography/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<unknown>>;
	export default _default;

}
declare module 'content/Typography/H' {
	import React from 'react';
	import Types from 'content/Typography/types';
	export const H1: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;
	export const H2: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;
	export const H3: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;
	export const H4: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;

}
declare module 'content/Typography/D' {
	import React from 'react';
	import Types from 'content/Typography/types';
	/**
	 * DISPLAYS
	 */
	export const D1: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;
	export const D2: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;
	export const D3: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;
	export const D4: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;

}
declare module 'content/Typography/T' {
	import React from 'react';
	import Types from 'content/Typography/types';
	/**
	 * TEXTS
	 */
	export const T1: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;
	export const T2: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;
	export const T3: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;
	export const T4: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;

}
declare module 'content/Typography/C' {
	import React from 'react';
	import Types from 'content/Typography/types';
	/**
	 * CAPTIONS
	 */
	export const C1: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;
	export const C2: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;
	export const C3: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;
	export const C4: React.ForwardRefExoticComponent<Types.TextProps & React.RefAttributes<unknown>>;

}
declare module 'content/Typography/A' {
	import React from 'react';
	import Types from 'content/Typography/types';
	/**
	 * ANCHOR
	 */
	export const A: React.ForwardRefExoticComponent<Types.AnchorProps & React.RefAttributes<unknown>>;

}
declare module 'control/Button/styles' {
	import Types from 'control/Button/types';
	import Global from 'types'; const buttonStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default buttonStyles;

}
declare module 'control/Button' {
	import React from 'react';
	import Types from 'control/Button/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'layout/Block/styles' {
	import Types from 'layout/Block/types';
	import Global from 'types'; const BlockStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default BlockStyles;

}
declare module 'layout/Block' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'layout/Block/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<unknown>>;
	export default _default;

}
declare module 'misc/utils/variant' {
	 const _default: <T>(prop: any, variant: { [K in T]?: any; }) => any;
	export default _default;

}
declare module 'misc/hocs/Check/types' {
	/// <reference types="react" />
	import Global from '@flow-ui/core/types'; namespace CheckTypes {
	    type CheckType = 'checkbox' | 'radio' | 'switch';
	    interface Props extends Global.Props {
	        label?: string;
	        labelColor?: Global.ColorProp;
	        type?: CheckType;
	        checked?: boolean;
	        disabled?: boolean;
	        onChange?: (checked: boolean) => void;
	        defaultValue?: boolean;
	        uppercase?: boolean;
	        size?: Global.Size;
	        children: (checked: boolean, focus: boolean) => React.ReactElement;
	    }
	}
	export default CheckTypes;

}
declare module 'misc/hocs/Check/styles' {
	import ChecTypes from 'misc/hocs/Check/types'; const _default: (props: ChecTypes.Props) => {
	    container: import("@emotion/utils").SerializedStyles;
	    label: import("@emotion/utils").SerializedStyles;
	};
	export default _default;

}
declare module 'misc/hocs/Check' {
	import React from 'react';
	import CheckTypes from 'misc/hocs/Check/types'; const _default: React.ForwardRefExoticComponent<CheckTypes.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Checkbox/styles' {
	import CheckboxTypes from 'control/Checkbox/types'; const _default: (props: CheckboxTypes.Props, checked: boolean, focus: boolean) => {
	    check: import("@emotion/utils").SerializedStyles;
	    icon: import("@emotion/utils").SerializedStyles;
	};
	export default _default;

}
declare module 'control/Checkbox' {
	import React from 'react';
	import CheckBoxTypes from 'control/Checkbox/types'; const _default: React.ForwardRefExoticComponent<CheckBoxTypes.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'layout/Drop/styles' {
	import Types from 'layout/Drop/types';
	import Global from 'types'; const DropStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default DropStyles;

}
declare module 'layout/Drop' {
	import React from 'react';
	import Types from 'layout/Drop/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'layout/Popover/styles' {
	import Types from 'layout/Popover/types';
	import Global from 'types'; const popoverStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default popoverStyles;

}
declare module 'layout/Popover' {
	import React from 'react';
	import Types from 'layout/Popover/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'misc/hocs/Field/styles' {
	import Types from 'misc/hocs/Field/types';
	import Global from 'types';
	import ThemeTypes from 'misc/themes/types'; const fieldStyles: (props: Types.Props, theme: ThemeTypes.Index) => Global.ComponentStyles<Types.Styles>;
	export default fieldStyles;

}
declare module 'control/TextField/styles' {
	import Types from 'control/TextField/types';
	import Global from 'types'; const textFieldStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default textFieldStyles;

}
declare module 'misc/hocs/Field' {
	import React from 'react';
	import Types from 'misc/hocs/Field/types'; const _default: React.ForwardRefExoticComponent<Types.PrivateProps & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'control/TextField' {
	import React from 'react';
	import Types from 'control/TextField/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'layout/Flexbox' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'layout/Flexbox/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<unknown>>;
	export default _default;

}
declare module 'layout/Grid' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'layout/Grid/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/DatePicker/DateGridDay' {
	/// <reference types="react" />
	import DatePickerTypes from 'control/DatePicker/types'; const DateGridDay: (props: DatePickerTypes.DateGridCalendarProps) => JSX.Element;
	export default DateGridDay;

}
declare module 'control/DatePicker/DateGridMonth' {
	/// <reference types="react" />
	import DatePickerTypes from 'control/DatePicker/types'; const DateGridMonth: (props: DatePickerTypes.DateGridCalendarProps) => JSX.Element;
	export default DateGridMonth;

}
declare module 'content/Typography' {
	export { H1, H2, H3, H4 } from 'content/Typography/H';
	export { D1, D2, D3, D4 } from 'content/Typography/D';
	export { T1, T2, T3, T4 } from 'content/Typography/T';
	export { C1, C2, C3, C4 } from 'content/Typography/C';
	export { A } from 'content/Typography/A';

}
declare module 'control/DatePicker/DateGridTitle' {
	/// <reference types="react" />
	import DatePickerTypes from 'control/DatePicker/types'; const DateGridTitle: (props: DatePickerTypes.DateGridTitleProps) => JSX.Element;
	export default DateGridTitle;

}
declare module 'control/DatePicker/DateGridYear' {
	/// <reference types="react" />
	import DatePickerTypes from 'control/DatePicker/types'; const DateGridYear: (props: DatePickerTypes.DateGridCalendarProps) => JSX.Element;
	export default DateGridYear;

}
declare module 'control/DatePicker/DateGrid' {
	/// <reference types="react" />
	import DatePickerTypes from 'control/DatePicker/types'; const DateGrid: (props: DatePickerTypes.DateGridProps) => JSX.Element;
	export default DateGrid;

}
declare module 'control/DatePicker/styles' {
	 const _default: () => {
	    dateGrind: import("@emotion/utils").SerializedStyles;
	    weekDay: import("@emotion/utils").SerializedStyles;
	    title: import("@emotion/utils").SerializedStyles;
	    /**
	     * Styles for day/month/year squire
	     */
	    gridBlock: (isActive: Boolean, isCurrent: boolean, isDisabled: boolean, isCurrentMonth: boolean) => import("@emotion/utils").SerializedStyles;
	    drop: (isActive: boolean) => import("@emotion/utils").SerializedStyles;
	};
	export default _default;

}
declare module 'control/DatePicker/mask' {
	import moment from 'moment'; const _default: (format: string, min: moment.Moment, max: moment.Moment) => any;
	export default _default;

}
declare module 'control/DatePicker' {
	import React from 'react';
	import DatePickerTypes from 'control/DatePicker/types'; const _default: React.ForwardRefExoticComponent<DatePickerTypes.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'control/Menu/Item' {
	import { FC } from 'react';
	import MenuTypes from 'control/Menu/types'; const Item: FC<MenuTypes.ItemProps>;
	export default Item;

}
declare module 'control/Menu/styles' {
	import Types from 'control/Menu/types';
	import Global from 'types'; const menuStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default menuStyles;

}
declare module 'control/Menu' {
	import React from 'react';
	import Types from 'control/Menu/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'control/Radio/styles' {
	import RadioTypes from 'control/Radio/types'; const _default: (props: RadioTypes.Props, checked: boolean, focus: boolean) => {
	    check: import("@emotion/utils").SerializedStyles;
	    radio: import("@emotion/utils").SerializedStyles;
	};
	export default _default;

}
declare module 'control/Radio' {
	import React from 'react';
	import RadioTypes from 'control/Radio/types'; const _default: React.ForwardRefExoticComponent<RadioTypes.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'control/Range/styles' {
	import Types from 'control/Range/types';
	import Global from 'types'; const rangeStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default rangeStyles;

}
declare module 'control/Range' {
	import React from 'react';
	import Types from 'control/Range/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'control/Select/styles' {
	import Types from 'control/Select/types';
	import Global from 'types'; const selectStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default selectStyles;

}
declare module 'control/Select/reducer' {
	import Types from 'control/Select/types'; const _default: (state: Types.State, action: Types.Actions) => {
	    selectedOptions: Types.Option[];
	    empty: boolean;
	    searchValue: string;
	    cursor: number;
	    open: boolean;
	};
	export default _default;

}
declare module 'control/Select' {
	import React from 'react';
	import Types from 'control/Select/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'control/Switch/styles' {
	import SwitchTypes from 'control/Switch/types'; const _default: (props: SwitchTypes.Props, checked: boolean, focus: boolean) => {
	    check: import("@emotion/utils").SerializedStyles;
	    switch: import("@emotion/utils").SerializedStyles;
	};
	export default _default;

}
declare module 'control/Switch' {
	import React from 'react';
	import SwitchTypes from 'control/Switch/types'; const _default: React.ForwardRefExoticComponent<SwitchTypes.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'data/Meter/styles' {
	import Types from 'data/Meter/types';
	import Global from 'types'; const meterStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default meterStyles;

}
declare module 'data/Meter' {
	import React from 'react';
	import Types from 'data/Meter/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'data/Table/styles' {
	import Types from 'data/Table/types';
	import Global from 'types'; const tabelStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default tabelStyles;

}
declare module 'data/Table/TableForm' {
	/// <reference types="react" />
	import TableTypes from 'data/Table/types';
	interface TableFormHOCProps {
	    Form: TableTypes.InjectForm;
	    dismiss?: () => void;
	    columns: TableTypes.TableColumn[];
	    row?: {
	        [key: string]: any;
	    };
	    defaultData?: {
	        [key: string]: any;
	    };
	} const TableFormHOC: (props: TableFormHOCProps) => JSX.Element;
	export default TableFormHOC;

}
declare module 'data/Table/TablePagination' {
	/// <reference types="react" />
	import TableTypes from 'data/Table/types'; const TablePagination: (props: TableTypes.PaginationProps) => JSX.Element | null;
	export default TablePagination;

}
declare module 'data/Table/TableColumns' {
	/// <reference types="react" />
	import TableTypes from 'data/Table/types'; const TableColumns: (props: TableTypes.ColumnProps) => JSX.Element;
	export default TableColumns;

}
declare module 'data/Table/TableActions' {
	/// <reference types="react" />
	import TableTypes from 'data/Table/types'; const TableActions: (props: TableTypes.ActionsProps) => JSX.Element;
	export default TableActions;

}
declare module 'data/Table/TableRow' {
	/// <reference types="react" />
	import TableTypes from 'data/Table/types'; const TableRow: (props: TableTypes.RowProps) => JSX.Element;
	export default TableRow;

}
declare module 'data/Table' {
	import React from 'react';
	import TableTypes from 'data/Table/types'; const _default: React.ForwardRefExoticComponent<TableTypes.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'layout/Badge/styles' {
	import Types from 'layout/Badge/types';
	import Global from 'types'; const BadgeStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default BadgeStyles;

}
declare module 'layout/Badge' {
	import React from 'react';
	import Types from 'layout/Badge/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'layout/Modal/ModalOverlay' {
	import React from 'react';
	import ModalTypes from 'layout/Modal/types'; const ModalOverlay: React.ForwardRefExoticComponent<ModalTypes.ModalOverlayProps & React.RefAttributes<unknown>>;
	export default ModalOverlay;

}
declare module 'layout/Modal/ModalPortal' {
	 const _default: (props: any) => import("react").ReactPortal;
	export default _default;

}
declare module 'layout/Modal/ModalHeader' {
	/// <reference types="react" />
	import ModalTypes from 'layout/Modal/types'; const ModalHeader: (props: ModalTypes.ModalHeaderProps) => JSX.Element | null;
	export default ModalHeader;

}
declare module 'layout/Modal/ModalWindow' {
	import ModalTypes from 'layout/Modal/types';
	import React from 'react'; const ModalWindow: React.ForwardRefExoticComponent<ModalTypes.ModalWindowProps & React.RefAttributes<unknown>>;
	export default ModalWindow;

}
declare module 'layout/Modal/styles' {
	import Types from 'layout/Modal/types';
	import Global from 'types'; const modalStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default modalStyles;

}
declare module 'layout/Modal' {
	import React from 'react';
	import Types from 'layout/Modal/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
	export default _default;

}
declare module 'layout/Notification/styles' {
	 const _default: (props: any, theme: any) => {
	    container: never[];
	};
	export default _default;

}
declare module 'layout/Notification' {
	import React from 'react';
	import Types from 'layout/Notification/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'layout/Panel/styles' {
	import Types from 'layout/Panel/types';
	import Global from 'types'; const panelStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default panelStyles;

}
declare module 'layout/Panel' {
	import React from 'react';
	import Types from 'layout/Panel/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'layout/Tree/styles' {
	import Types from 'layout/Tree/types';
	import Global from 'types'; const treeStyles: Global.FunctionalComponentStyles<Types.Styles>;
	export default treeStyles;

}
declare module 'layout/Tree' {
	import React from 'react';
	import Types from 'layout/Tree/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'misc/utils/dialog' {
	import ViewportTypes from 'layout/Viewport/types'; const _default: (options: ViewportTypes.DialogOptions) => void;
	export default _default;

}
declare module 'misc/utils/notify' {
	import NotificationType from 'layout/Notification/types'; const _default: (options: NotificationType.NotifyOptions) => void;
	export default _default;

}
declare module 'misc/hooks/useBrowser' {
	 const _default: () => {
	    height: number;
	    width: number;
	    isDesktop: boolean;
	    isTablet: boolean;
	    isMobile: boolean;
	    tableMinWidth: number;
	    resolutionMobileMinimum: number;
	    resolutionTabletMinimum: number;
	    resolutionDesktopMinimum: number;
	    info: {
	        vendor: string;
	        name: string;
	        version: string;
	        language: string;
	        geolocation: Geolocation;
	    };
	};
	export default _default;

}
declare module '@flow-ui/core' {
	/**
	 * Content
	 */
	export { default as Divider } from 'content/Divider';
	export { default as Icon } from 'content/Icon';
	export { default as Spinner } from 'content/Spinner';
	export { H1, H2, H3, H4 } from 'content/Typography/H';
	export { D1, D2, D3, D4 } from 'content/Typography/D';
	export { T1, T2, T3, T4 } from 'content/Typography/T';
	export { C1, C2, C3, C4 } from 'content/Typography/C';
	export { A } from 'content/Typography/A';
	/**
	 * Control
	 */
	export { default as Button } from 'control/Button';
	export { default as Checkbox } from 'control/Checkbox';
	export { default as DatePicker } from 'control/DatePicker';
	export { default as Menu } from 'control/Menu';
	export { default as Radio } from 'control/Radio';
	export { default as Range } from 'control/Range';
	export { default as Select } from 'control/Select';
	export { default as Switch } from 'control/Switch';
	export { default as TextField } from 'control/TextField';
	/**
	 * Data
	 */
	export { default as Meter } from 'data/Meter';
	export { default as Table } from 'data/Table';
	/**
	 * Layout
	 */
	export { default as Badge } from 'layout/Badge';
	export { default as Block } from 'layout/Block';
	export { default as Drop } from 'layout/Drop';
	export { default as Flexbox } from 'layout/Flexbox';
	export { default as Grid } from 'layout/Grid';
	export { default as Modal } from 'layout/Modal';
	export { default as Notification } from 'layout/Notification';
	export { default as Panel } from 'layout/Panel';
	export { default as Popover } from 'layout/Popover';
	export { default as Tree } from 'layout/Tree';
	export { default as Viewport } from 'layout/Viewport';
	/**
	 * Utils
	 */
	export { default as dialog } from 'misc/utils/dialog';
	export { default as notify } from 'misc/utils/notify';
	/**
	 * Misc
	 */
	export { default as useBrowser } from 'misc/hooks/useBrowser';
	export { default as useFlow } from 'misc/hooks/useFlow';

}
declare module 'misc/utils/validate' {
	export interface ValidateObject {
	    error?: string;
	    regex: RegExp;
	    isMatch?: boolean;
	}

}
