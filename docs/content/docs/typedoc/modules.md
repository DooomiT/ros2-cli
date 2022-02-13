---
title: "ros2-cli - v1.0.0"
linkTitle: "ros2-cli - v1.0.0"
slug: "modules"
---

## Table of contents

### Functions

- [build](modules.md#build)
- [pathExists](modules.md#pathexists)
- [readYAML](modules.md#readyaml)
- [run](modules.md#run)
- [selectComponents](modules.md#selectcomponents)
- [spawnCommand](modules.md#spawncommand)
- [validateEnvironment](modules.md#validateenvironment)

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
| `options` | `any` | command options |

#### Returns

`Promise`<`void`\>

#### Defined in

[commands/build.ts:14](https://github.com/DooomiT/ros2-cli/blob/f3603df/src/commands/build.ts#L14)

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

[utils/pathExists.ts:8](https://github.com/DooomiT/ros2-cli/blob/f3603df/src/utils/pathExists.ts#L8)

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

[utils/readYAML.ts:13](https://github.com/DooomiT/ros2-cli/blob/f3603df/src/utils/readYAML.ts#L13)

___

### run

▸ **run**(`configPath`, `options`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configPath` | `string` | the path of the config used |
| `options` | `any` | command options |

#### Returns

`Promise`<`void`\>

#### Defined in

[commands/run.ts:21](https://github.com/DooomiT/ros2-cli/blob/f3603df/src/commands/run.ts#L21)

___

### selectComponents

▸ **selectComponents**(`components`): `Promise`<`any`\>

Provides a interactive prompt to select components

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `components` | `any` | list of components |

#### Returns

`Promise`<`any`\>

#### Defined in

[utils/selectComponents.ts:7](https://github.com/DooomiT/ros2-cli/blob/f3603df/src/utils/selectComponents.ts#L7)

___

### spawnCommand

▸ **spawnCommand**(`command`, `callback`, `args?`, `name?`, `outputPath?`): `Promise`<`void`\>

This function spawns a shell executing a program

**`example`**

    spawnCommand('cat myFile', myCallback(), ['--verbose'], 'myCommand', 'logs')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to execute |
| `callback` | `Function` | Invoked after the command closes |
| `args?` | `string`[] | - |
| `name?` | `string` | - |
| `outputPath?` | `string` | - |

#### Returns

`Promise`<`void`\>

- The output of the command

#### Defined in

[utils/spawnCommand.ts:20](https://github.com/DooomiT/ros2-cli/blob/f3603df/src/utils/spawnCommand.ts#L20)

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

[utils/validateEnvironment.ts:22](https://github.com/DooomiT/ros2-cli/blob/f3603df/src/utils/validateEnvironment.ts#L22)
