// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class AssetConditionMeterControlFieldCardFlip extends AssetConditionMeterControlField {
    @JsonProperty("disables_asset")
    private Boolean disablesAsset;

    @JsonProperty("id")
    private AssetConditionMeterControlFieldId id;

    @JsonProperty("is_impact")
    private Boolean isImpact;

    @JsonProperty("label")
    private Label label;

    @JsonProperty("value")
    private Boolean value;

    public AssetConditionMeterControlFieldCardFlip() {
    }

    /**
     * Getter for disablesAsset.<p>
     * Does this field disable the asset when its value is set to `true`?
     */
    public Boolean getDisablesAsset() {
        return disablesAsset;
    }

    /**
     * Setter for disablesAsset.<p>
     * Does this field disable the asset when its value is set to `true`?
     */
    public void setDisablesAsset(Boolean disablesAsset) {
        this.disablesAsset = disablesAsset;
    }

    /**
     * Getter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public AssetConditionMeterControlFieldId getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public void setId(AssetConditionMeterControlFieldId id) {
        this.id = id;
    }

    /**
     * Getter for isImpact.<p>
     * Does this field count as an impact (Starforged) or debility (Ironsworn
     * classic) when its value is set to `true`?
     */
    public Boolean getIsImpact() {
        return isImpact;
    }

    /**
     * Setter for isImpact.<p>
     * Does this field count as an impact (Starforged) or debility (Ironsworn
     * classic) when its value is set to `true`?
     */
    public void setIsImpact(Boolean isImpact) {
        this.isImpact = isImpact;
    }

    /**
     * Getter for label.<p>
     * A localized label for this input. In some contexts it may be undesirable
     * to render this text, but it should always be exposed to assistive
     * technology (e.g. with `aria-label` in HTML).
     */
    public Label getLabel() {
        return label;
    }

    /**
     * Setter for label.<p>
     * A localized label for this input. In some contexts it may be undesirable
     * to render this text, but it should always be exposed to assistive
     * technology (e.g. with `aria-label` in HTML).
     */
    public void setLabel(Label label) {
        this.label = label;
    }

    /**
     * Getter for value.<p>
     * Is the card flipped over?
     */
    public Boolean getValue() {
        return value;
    }

    /**
     * Setter for value.<p>
     * Is the card flipped over?
     */
    public void setValue(Boolean value) {
        this.value = value;
    }
}