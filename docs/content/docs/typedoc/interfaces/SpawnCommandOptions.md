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
Invoked after the command execution stops on error

**`param`** specifies if the command should be reexecuted on error

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

[common/types.ts:53](https://github.com/DooomiT/ros2-cli/blob/67e338d/cli/src/common/types.ts#L53)

___

### callback

• `Optional` **callback**: `Function`

#### Defined in

[common/types.ts:52](https://github.com/DooomiT/ros2-cli/blob/67e338d/cli/src/common/types.ts#L52)

___

### command

• **command**: `string`

#### Defined in

[common/types.ts:51](https://github.com/DooomiT/ros2-cli/blob/67e338d/cli/src/common/types.ts#L51)

___

### errorCallback

• `Optional` **errorCallback**: `Function`

#### Defined in

[common/types.ts:56](https://github.com/DooomiT/ros2-cli/blob/67e338d/cli/src/common/types.ts#L56)

___

### name

• `Optional` **name**: `string`

#### Defined in

[common/types.ts:54](https://github.com/DooomiT/ros2-cli/blob/67e338d/cli/src/common/types.ts#L54)

___

### outputPath

• `Optional` **outputPath**: `string`

#### Defined in

[common/types.ts:55](https://github.com/DooomiT/ros2-cli/blob/67e338d/cli/src/common/types.ts#L55)

___

### restartOnError

• `Optional` **restartOnError**: `boolean`

#### Defined in

[common/types.ts:57](https://github.com/DooomiT/ros2-cli/blob/67e338d/cli/src/common/types.ts#L57)
