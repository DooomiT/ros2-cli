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

common/types.ts:36

___

### callback

• `Optional` **callback**: `Function`

#### Defined in

common/types.ts:35

___

### command

• **command**: `string`

#### Defined in

common/types.ts:34

___

### errorCallback

• `Optional` **errorCallback**: `Function`

#### Defined in

common/types.ts:39

___

### name

• `Optional` **name**: `string`

#### Defined in

common/types.ts:37

___

### outputPath

• `Optional` **outputPath**: `string`

#### Defined in

common/types.ts:38

___

### restartOnError

• `Optional` **restartOnError**: `boolean`

#### Defined in

common/types.ts:40
