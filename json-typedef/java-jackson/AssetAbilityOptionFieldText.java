// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

/**
 * Represents an input that accepts plain text.
 */
@JsonSerialize
public class AssetAbilityOptionFieldText extends AssetAbilityOptionField {
    @JsonProperty("id")
    private AssetAbilityOptionFieldId id;

    @JsonProperty("label")
    private InputLabel label;

    @JsonProperty("value")
    private String value;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("icon")
    private SvgImageUrl icon;

    public AssetAbilityOptionFieldText() {
    }

    /**
     * Getter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public AssetAbilityOptionFieldId getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public void setId(AssetAbilityOptionFieldId id) {
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
     */
    public String getValue() {
        return value;
    }

    /**
     * Setter for value.<p>
     */
    public void setValue(String value) {
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
