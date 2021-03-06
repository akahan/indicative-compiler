[indicative-compiler](../README.md) › [compiler/sanitizer](../modules/compiler_sanitizer.md) › [ArrayWrapper](compiler_sanitizer.arraywrapper.md)

# Class: ArrayWrapper

Wraps an array of [SanitizationsRunner](compiler_sanitizer.sanitizationsrunner.md) and executes
them based upon the length of an data array at runtime.

## Hierarchy

* **ArrayWrapper**

## Index

### Constructors

* [constructor](compiler_sanitizer.arraywrapper.md#constructor)

### Methods

* [exec](compiler_sanitizer.arraywrapper.md#exec)

## Constructors

###  constructor

\+ **new ArrayWrapper**(`field`: string, `index`: string, `childSanitizations`: [SanitizationsRunner](compiler_sanitizer.sanitizationsrunner.md)‹› | [ArrayWrapper](compiler_sanitizer.arraywrapper.md)‹›[], `dotPath`: string[]): *[ArrayWrapper](compiler_sanitizer.arraywrapper.md)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | string |
`index` | string |
`childSanitizations` | [SanitizationsRunner](compiler_sanitizer.sanitizationsrunner.md)‹› &#124; [ArrayWrapper](compiler_sanitizer.arraywrapper.md)‹›[] |
`dotPath` | string[] |

**Returns:** *[ArrayWrapper](compiler_sanitizer.arraywrapper.md)*

## Methods

###  exec

▸ **exec**(`data`: [SanitizationDataRoot](../modules/compiler_main.md#sanitizationdataroot), `config`: unknown): *void*

Execute series of sanitizations for values inside an array

**Parameters:**

Name | Type |
------ | ------ |
`data` | [SanitizationDataRoot](../modules/compiler_main.md#sanitizationdataroot) |
`config` | unknown |

**Returns:** *void*
