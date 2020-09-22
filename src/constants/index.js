/**
 *  Used as references for various `Number` constants.
 *  @constant
 *  @type {number}
 *  @default
 */
export const MAX_SAFE_INTEGER = 9007199254740991

/**
 *  Used as references for various `Number` constants.
 *  @constant
 *  @type {number}
 *  @default
 */
export const NAN = 0 / 0

/**
 *  Used to match leading and trailing whitespace.
 *  @constant
 *  @type {object}
 *  @default
 */
export const reTrim = /^\s+|\s+$/g

/**
 *  Used to detect bad signed hexadecimal string values.
 *  @constant
 *  @type {object}
 *  @default
 */
export const reIsBadHex = /^[-+]0x[0-9a-f]+$/i

/**
 *  Used to detect binary string values.
 *  @constant
 *  @type {object}
 *  @default
 */
export const reIsBinary = /^0b[01]+$/i

/**
 *  Used to detect octal string values
 *  @constant
 *  @type {object}
 *  @default
 */
export const reIsOctal = /^0o[0-7]+$/i
