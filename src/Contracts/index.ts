/**
 * @module compiler/main
 */

/**
 * indicative-compiler
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { ParsedRule, Message } from 'indicative-parser'

/**
 * Tree node consumer called by the [[TreeWalker]]
 */
export type ConsumerFn<T extends any = any> = (
  field: string,
  type: 'literal' | 'object' | 'array',
  rules: ParsedRule[],
  dotPath: string[],
  pointer: string,
) => T

/**
 * Array wrapper to wrap children nodes of inside a wildcard
 * or indexed array
 */
export type ArrayWrapper<T extends any = any, U extends any = any> = (
  index: string,
  field: string,
  children: (T | U)[],
  dotPath: string[],
) => U

/**
 * The data object passed to all validation functions.
 */
export type ValidationDataRoot = {
  tip: any,
  original: any,
  pointer: string,
  arrayPointer?: string,
  parentArray?: any[],
  currentIndex?: number,
}

/**
 * Shape of validation function
 */
export type ValidateFunction = (
  data: ValidationDataRoot,
  field: string,
  args: any[],
  config: unknown,
) => boolean | Promise<boolean>

/**
 * Shape of validation defination
 */
export type ValidationDefinition = {
  async: boolean,
  compile?: (args: any[]) => any[],
  validate: ValidateFunction,
}
export type ValidationDefination = ValidationDefinition

/**
 * Shape of sanitizer data root.
 */
export type SanitizationDataRoot = Omit<ValidationDataRoot, 'pointer' | 'arrayPointer'>

/**
 * Shape of sanitization function.
 */
export type SanitizeFunction = (
  data: SanitizationDataRoot,
  field: string,
  args: any[],
  config: unknown,
) => void

/**
 * Shape of sanitization definition
 */
export type SanitizationDefinition = {
  compile?: (args: any[]) => any[],
  sanitize: SanitizeFunction,
}
export type SanitizationDefination = SanitizationDefinition

/**
 * The error formatter to format error messages
 */
export interface ErrorFormatterContract {
  addError (
    error: string | Error,
    field: string,
    ruleName: ParsedRule['name'],
    args: ParsedRule['args'],
  ): void
  toJSON (): any
}

/**
 * Runtime collector that creates a fresh copy of validated
 * properties and errors.
 */
export interface CollectorContract {
  formatter: ErrorFormatterContract
  hasErrors: boolean
  getErrors (): ReturnType<ErrorFormatterContract['toJSON']>
  getData (): any
  setValue (pointer: string, value: any): void
  setError (pointer: string, rule: ParsedRule, message: Message | Error): void
}

/**
 * A custom error collector that works as a bridge between the validator
 * and the formatter.
 */
export type ErrorCollectorFn = (
  formatter: ErrorFormatterContract,
  message: string | Error,
  field: string,
  rule: ParsedRule['name'],
  args: ParsedRule['args'],
) => void
