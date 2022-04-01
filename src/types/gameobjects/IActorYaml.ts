import type IGameObjectBase from "./IGameObjectBase.js";

export enum ActorType {
  Character = "Character",
  Creature = "Creature",
  Faction = "Faction",
}

export default interface IActorYaml extends IGameObjectBase {
  "Object type": ActorType;
}