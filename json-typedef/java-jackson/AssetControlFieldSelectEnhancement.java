// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.Map;

/**
 * Select from player and/or asset enhancements. Use it to describe modal
 * abilities. For examples, see Ironclad (classic Ironsworn) and Windbinder
 * (Sundered Isles).
 */
@JsonSerialize
public class AssetControlFieldSelectEnhancement extends AssetControlField {
    @JsonProperty("choices")
    private Map<String, AssetControlFieldSelectEnhancementChoice> choices;

    @JsonProperty("id")
    private AssetControlFieldId id;

    @JsonProperty("label")
    private InputLabel label;

    @JsonProperty("value")
    private DictKey value;

    public AssetControlFieldSelectEnhancement() {
    }

    /**
     * Getter for choices.<p>
     */
    public Map<String, AssetControlFieldSelectEnhancementChoice> getChoices() {
        return choices;
    }

    /**
     * Setter for choices.<p>
     */
    public void setChoices(Map<String, AssetControlFieldSelectEnhancementChoice> choices) {
        this.choices = choices;
    }

    /**
     * Getter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public AssetControlFieldId getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public void setId(AssetControlFieldId id) {
        this.id = id;
    }

    /**
     * Getter for label.<p>
     */
    public InputLabel getLabel() {
        return label;
    }

    /**
     * Setter for label.<p>
     */
    public void setLabel(InputLabel label) {
        this.label = label;
    }

    /**
     * Getter for value.<p>
     * The key of the currently selected choice from the `choices` property, or
     * `null` if none is selected.
     */
    public DictKey getValue() {
        return value;
    }

    /**
     * Setter for value.<p>
     * The key of the currently selected choice from the `choices` property, or
     * `null` if none is selected.
     */
    public void setValue(DictKey value) {
        this.value = value;
    }
}
