import DerelictType from "../derelict/DerelictType";
import LocationTheme from "../place/LocationTheme";
import IPlaceData, { PlaceType } from "../IPlaceYaml";
import Zone from "./Zone";

export default interface IDerelictZoneYaml<Z extends Zone | undefined, DT extends DerelictType | undefined> extends IPlaceData<undefined, undefined, LocationTheme | undefined> {
  "Object type": PlaceType.DerelictZone;
  "Derelict Type"?: DT;
  Zone?: Z;
}