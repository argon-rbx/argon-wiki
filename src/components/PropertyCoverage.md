| Property Type                             | Example Property                | CLI | Plugin | XML | Binary |
| ----------------------------------------- | ------------------------------- | --- | ------ | --- | ------ |
| [Attributes](#attributes)                 | `Instance.Attributes`           | ✅  | ✅     | ✅  | ✅     |
| [Axes](#axes)                             | `ArcHandles.Axes`               | ✅  | ✅     | ✅  | ✅     |
| [BinaryString](#binarystring)             | `BinaryStringValue.Value`       | ✅  | ⏺️     | ✅  | ✅     |
| [Bool](#bool)                             | `Part.Anchored`                 | ✅  | ✅     | ✅  | ✅     |
| [BrickColor](#brickcolor)                 | `Part.BrickColor`               | ✅  | ✅     | ✅  | ✅     |
| Bytecode                                  | `N/A`                           | ❌  | ⛔     | ❌  | ❌     |
| [CFrame](#cframe)                         | `Camera.CFrame`                 | ✅  | ✅     | ✅  | ✅     |
| [Color3](#color3)                         | `Lighting.Ambient`              | ✅  | ✅     | ✅  | ✅     |
| [Color3uint8](#color3uint8)               | `Part.BrickColor`               | ✅  | ✅     | ✅  | ✅     |
| [ColorSequence](#colorsequence)           | `Beam.Color`                    | ✅  | ✅     | ✅  | ✅     |
| [Content](#content)                       | `Decal.Texture`                 | ✅  | ✅     | ✅  | ✅     |
| [Enum](#enum)                             | `Part.Shape`                    | ✅  | ✅     | ✅  | ✅     |
| [Faces](#faces)                           | `Handles.Faces`                 | ✅  | ✅     | ✅  | ✅     |
| [Float32](#float32)                       | `Players.RespawnTime`           | ✅  | ✅     | ✅  | ✅     |
| [Float64](#float64)                       | `Sound.PlaybackLoudness`        | ✅  | ✅     | ✅  | ✅     |
| [Font](#font)                             | `TextLabel.Font`                | ✅  | ✅     | ✅  | ✅     |
| [Int32](#int32)                           | `Frame.ZIndex`                  | ✅  | ✅     | ✅  | ✅     |
| [Int64](#int64)                           | `Player.UserId`                 | ✅  | ✅     | ✅  | ✅     |
| [MaterialColors](#materialcolors)         | `Terrain.MaterialColors`        | ✅  | ✅     | ✅  | ✅     |
| [NumberRange](#numberrange)               | `ParticleEmitter.Lifetime`      | ✅  | ✅     | ✅  | ✅     |
| [NumberSequence](#numbersequence)         | `Beam.Transparency`             | ✅  | ✅     | ✅  | ✅     |
| [OptionalCFrame](#optionalcframe)         | `Model.WorldPivotData`          | ✅  | ✅     | ✅  | ✅     |
| [PhysicalProperties](#physicalproperties) | `Part.CustomPhysicalProperties` | ✅  | ✅     | ✅  | ✅     |
| [ProtectedString](#protectedstring)       | `ModuleScript.Source`           | ✅  | ✅     | ✅  | ✅     |
| [Ray](#ray)                               | `RayValue.Value`                | ✅  | ✅     | ✅  | ✅     |
| [Rect](#rect)                             | `ImageButton.SliceCenter`       | ✅  | ✅     | ✅  | ✅     |
| [Ref](#ref)                               | `Model.PrimaryPart`             | ✅  | ✅     | ✅  | ✅     |
| [Region3](#region3)                       | `N/A`                           | ✅  | ✅     | ❌  | ❌     |
| [Region3int16](#region3int16)             | `Terrain.MaxExtents`            | ✅  | ✅     | ❌  | ❌     |
| SecurityCapabilities                      | `Folder.SecurityCapabilities`   | ✅  | ❌     | ✅  | ✅     |
| [SharedString](#sharedstring)             | `N/A`                           | ✅  | ✅     | ✅  | ✅     |
| [String](#string)                         | `Instance.Name`                 | ✅  | ✅     | ✅  | ✅     |
| [Tags](#tags)                             | `UIListLayout.Padding`          | ✅  | ✅     | ✅  | ✅     |
| [UDim](#udim)                             | `Frame.Size`                    | ✅  | ✅     | ✅  | ✅     |
| [UDim2](#udim2)                           | `Instance.UniqueId`             | ✅  | ❌     | ✅  | ✅     |
| [Vector2](#vector2)                       | `ImageLabel.ImageRectSize`      | ✅  | ✅     | ✅  | ✅     |
| [Vector2int16](#vector2int16)             | `N/A`                           | ✅  | ✅     | ✅  | ❌     |
| [Vector3](#vector3)                       | `Part.Size`                     | ✅  | ✅     | ✅  | ✅     |
| [Vector3int16](#vector3int16)             | `TerrainRegion.ExtentsMax`      | ✅  | ✅     | ✅  | ✅     |
| QDir                                      | `Studio.Auto-Save Path`         | ⛔  | ⛔     | ⛔  | ⛔     |
| QFont                                     | `Studio.Font`                   | ⛔  | ⛔     | ⛔  | ⛔     |

✅ Implemented | ❌ Unimplemented | ⏺️ Partially Implemented | ⛔ Never
