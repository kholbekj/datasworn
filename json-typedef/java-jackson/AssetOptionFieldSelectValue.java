// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.Map;

/**
 * Represents a list of mutually exclusive choices.
 */
@JsonSerialize
public class AssetOptionFieldSelectValue extends AssetOptionField {
    @JsonProperty("choices")
    private Map<String, SelectValueFieldChoice> choices;

    @JsonProperty("id")
    private AssetOptionFieldId id;

    @JsonProperty("label")
    private InputLabel label;

    @JsonProperty("value")
    private DictKey value;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("icon")
    private SvgImageUrl icon;

    public AssetOptionFieldSelectValue() {
    }

    /**
     * Getter for choices.<p>
     */
    public Map<String, SelectValueFieldChoice> getChoices() {
        return choices;
    }

    /**
     * Setter for choices.<p>
     */
    public void setChoices(Map<String, SelectValueFieldChoice> choices) {
        this.choices = choices;
    }

    /**
     * Getter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public AssetOptionFieldId getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public void setId(AssetOptionFieldId id) {
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

    /**
     * Getter for icon.<p>
     * An icon associated with this input.
     */
    public SvgImageUrl getIcon() {
        return icon;
    }

    /**
     * Setter for icon.<p>
     * An icon associated with this input.
     */
    public void setIcon(SvgImageUrl icon) {
        this.icon = icon;
    }
}
