---
title: "Interface: SpawnCommandOptions"
linkTitle: "SpawnCommandOptions"
slug: "SpawnCommandOptions"
---

defines the input for spawnCommand

**`param`** The command to execute

**`param`** Invoked after the command closes

**`param`** List of arguments to execute the command with

**`param`** Name of the process

**`param`** Path where the log will be saved to

**`param`**
- Invoked after the command execution stops on error

## Table of contents

### Properties

- [args](SpawnCommandOptions.md#args)
- [callback](SpawnCommandOptions.md#callback)
- [command](SpawnCommandOptions.md#command)
- [errorCallback](SpawnCommandOptions.md#errorcallback)
- [name](SpawnCommandOptions.md#name)
- [outputPath](SpawnCommandOptions.md#outputpath)
- [restartOnError](SpawnCommandOptions.md#restartonerror)

## Properties

### args

• `Optional` **args**: `string`[]

#### Defined in

[common/types.ts:35](https://github.com/DooomiT/ros2-cli/blob/e14a1a4/src/common/types.ts#L35)

___

### callback

• **callback**: `Function`

#### Defined in

[common/types.ts:34](https://github.com/DooomiT/ros2-cli/blob/e14a1a4/src/common/types.ts#L34)

___

### command

• **command**: `string`

#### Defined in

[common/types.ts:33](https://github.com/DooomiT/ros2-cli/blob/e14a1a4/src/common/types.ts#L33)

___

### errorCallback

• `Optional` **errorCallback**: `Function`

#### Defined in

[common/types.ts:38](https://github.com/DooomiT/ros2-cli/blob/e14a1a4/src/common/types.ts#L38)

___

### name

• `Optional` **name**: `string`

#### Defined in

[common/types.ts:36](https://github.com/DooomiT/ros2-cli/blob/e14a1a4/src/common/types.ts#L36)

___

### outputPath

• `Optional` **outputPath**: `string`

#### Defined in

[common/types.ts:37](https://github.com/DooomiT/ros2-cli/blob/e14a1a4/src/common/types.ts#L37)

___

### restartOnError

• `Optional` **restartOnError**: `boolean`

#### Defined in

[common/types.ts:39](https://github.com/DooomiT/ros2-cli/blob/e14a1a4/src/common/types.ts#L39)
