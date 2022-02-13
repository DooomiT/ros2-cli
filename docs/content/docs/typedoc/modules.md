---
title: "ros2-cli - v1.0.0"
linkTitle: "ros2-cli - v1.0.0"
slug: "modules"
---

## Table of contents

### Interfaces

- [SpawnCommandOptions](interfaces/SpawnCommandOptions.md)

### Type aliases

- [Component](modules.md#component)
- [Options](modules.md#options)

### Functions

- [build](modules.md#build)
- [pathExists](modules.md#pathexists)
- [readYAML](modules.md#readyaml)
- [run](modules.md#run)
- [selectComponents](modules.md#selectcomponents)
- [spawnCommand](modules.md#spawncommand)
- [validateEnvironment](modules.md#validateenvironment)

## Type aliases

### Component

Ƭ **Component**: `Object`

defines the structure of components

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args?` | `string`[] |
| `name` | `string` |
| `outputPath?` | `string` |
| `program` | `string` |
| `restartOnError?` | `boolean` |

#### Defined in

common/types.ts:5

___

### Options

Ƭ **Options**: `Object`

defines the structure of command options

#### Type declaration

| Name | Type |
| :------ | :------ |
| `interactive` | `boolean` |
| `validation` | `boolean` |

#### Defined in

common/types.ts:16

## Functions

### build

▸ **build**(`configPath`, `options`): `Promise`<`void`\>

This function executes the build

**`example`**
    build('./config')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configPath` | `string` | the path of the config used |
| `options` | [`Options`](modules.md#options) | command options |

#### Returns

`Promise`<`void`\>

#### Defined in

commands/build.ts:15

___

### pathExists

▸ **pathExists**(`path`): `Promise`<`boolean`\>

checks if a path exists

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to check |

#### Returns

`Promise`<`boolean`\>

- The output of the command

#### Defined in

utils/pathExists.ts:8

___

### readYAML

▸ **readYAML**(`path`): `Promise`<`any`\>

**`example`**
    readYaml('./myFile')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | location of file to read |

#### Returns

`Promise`<`any`\>

- parsed file content

#### Defined in

utils/readYAML.ts:13

___

### run

▸ **run**(`configPath`, `options`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configPath` | `string` | the path of the config used |
| `options` | [`Options`](modules.md#options) | command options |

#### Returns

`Promise`<`void`\>

#### Defined in

commands/run.ts:31

___

### selectComponents

▸ **selectComponents**(`components`): `Promise`<[`Component`](modules.md#component)[]\>

Provides a interactive prompt to select components

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `components` | [`Component`](modules.md#component)[] | list of components |

#### Returns

`Promise`<[`Component`](modules.md#component)[]\>

#### Defined in

utils/selectComponents.ts:8

___

### spawnCommand

▸ **spawnCommand**(`options`): `Promise`<`void`\>

This function spawns a shell executing a program

**`example`**

    spawnCommand({'cat myFile', myCallback(options), ['--verbose'], 'myCommand', 'logs', myErrorHandler(options)})

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SpawnCommandOptions`](interfaces/SpawnCommandOptions.md) |

#### Returns

`Promise`<`void`\>

- The output of the command

#### Defined in

utils/spawnCommand.ts:25

___

### validateEnvironment

▸ **validateEnvironment**(`pythonCommand?`, `pythonVersion?`): `Promise`<`void`\>

This function checks if all required binaries for build are available

**`example`**
    validateEnvironment(')

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonCommand?` | `string` |
| `pythonVersion?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

utils/validateEnvironment.ts:13
