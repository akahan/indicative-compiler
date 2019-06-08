[indicative-compiler](../README.md) > ["src/TreeWalker"](../modules/_src_treewalker_.md) > [TreeWalker](../classes/_src_treewalker_.treewalker.md)

# Class: TreeWalker

Tree walker is an agnostic implementation to walk over the parsed schema tree generated by `indicative-parser`.

The consumer of the code can define a function to consumer the tree nodes and define another function to wrap the children of an array node.

```js
function consumerFn (field: string, rules: ParsedRule[], dotPath: string[]) {
}

function arrayWrapper (
  index: string,
  field: string,
  children: ReturnType<consumerFn>[],
  dotPath: string[],
) {
}

new TreeWalker(consumerFn, arrayWrapper).walk(parsedSchema)
```

## Type parameters
#### T :  `any`
#### U :  `any`
## Hierarchy

**TreeWalker**

## Index

### Constructors

* [constructor](_src_treewalker_.treewalker.md#constructor)

### Methods

* [walk](_src_treewalker_.treewalker.md#walk)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TreeWalker**(_consumerFn: *[ConsumerFn](../modules/_src_contracts_.md#consumerfn)<`T`>*, _arrayWrapper: *[ArrayWrapper](../modules/_src_contracts_.md#arraywrapper)<`T`, `U`>*): [TreeWalker](_src_treewalker_.treewalker.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| _consumerFn | [ConsumerFn](../modules/_src_contracts_.md#consumerfn)<`T`> |
| _arrayWrapper | [ArrayWrapper](../modules/_src_contracts_.md#arraywrapper)<`T`, `U`> |

**Returns:** [TreeWalker](_src_treewalker_.treewalker.md)

___

## Methods

<a id="walk"></a>

###  walk

▸ **walk**(schema: *`ParsedSchema`*, dotPath?: *`string`[]*, arrayPath?: *`string`[]*): (`T` \| `U`)[]

Walks the schema tree and invokes the `consumerFn` for each node. The output of the consumer is collected and returned back as a flat array

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| schema | `ParsedSchema` | - |
| `Default value` dotPath | `string`[] |  [] |
| `Default value` arrayPath | `string`[] |  [] |

**Returns:** (`T` \| `U`)[]

___
