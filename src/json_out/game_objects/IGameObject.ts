import type { GameObjectType } from "@game_objects/index.js";
import type { IRequirements } from "@json_out/index.js";

export interface IGameObject {
  "Object type": GameObjectType;
  Requires?: IRequirements | undefined;
}