// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.Map;

/**
 * Describes rules for player characters in this ruleset, such as stats and
 * condition meters.
 */
@JsonSerialize
public class Rules {
    @JsonProperty("condition_meters")
    private Map<String, ConditionMeterRule> conditionMeters;

    @JsonProperty("impacts")
    private Map<String, ImpactCategory> impacts;

    @JsonProperty("special_tracks")
    private Map<String, SpecialTrackRule> specialTracks;

    @JsonProperty("stats")
    private Map<String, StatRule> stats;

    public Rules() {
    }

    /**
     * Getter for conditionMeters.<p>
     * Describes the standard condition meters used by player characters in
     * this ruleset.
     */
    public Map<String, ConditionMeterRule> getConditionMeters() {
        return conditionMeters;
    }

    /**
     * Setter for conditionMeters.<p>
     * Describes the standard condition meters used by player characters in
     * this ruleset.
     */
    public void setConditionMeters(Map<String, ConditionMeterRule> conditionMeters) {
        this.conditionMeters = conditionMeters;
    }

    /**
     * Getter for impacts.<p>
     * Describes the standard impacts/debilities used by player characters in
     * this ruleset.
     */
    public Map<String, ImpactCategory> getImpacts() {
        return impacts;
    }

    /**
     * Setter for impacts.<p>
     * Describes the standard impacts/debilities used by player characters in
     * this ruleset.
     */
    public void setImpacts(Map<String, ImpactCategory> impacts) {
        this.impacts = impacts;
    }

    /**
     * Getter for specialTracks.<p>
     * Describes the special tracks used by player characters in this
     * ruleset, like Bonds (classic Ironsworn), Failure (Delve), or Legacies
     * (Starforged).
     */
    public Map<String, SpecialTrackRule> getSpecialTracks() {
        return specialTracks;
    }

    /**
     * Setter for specialTracks.<p>
     * Describes the special tracks used by player characters in this
     * ruleset, like Bonds (classic Ironsworn), Failure (Delve), or Legacies
     * (Starforged).
     */
    public void setSpecialTracks(Map<String, SpecialTrackRule> specialTracks) {
        this.specialTracks = specialTracks;
    }

    /**
     * Getter for stats.<p>
     * Describes the standard stats used by player characters in this ruleset.
     */
    public Map<String, StatRule> getStats() {
        return stats;
    }

    /**
     * Setter for stats.<p>
     * Describes the standard stats used by player characters in this ruleset.
     */
    public void setStats(Map<String, StatRule> stats) {
        this.stats = stats;
    }
}