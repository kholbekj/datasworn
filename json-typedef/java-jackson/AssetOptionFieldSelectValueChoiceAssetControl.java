// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

/**
 * Represents an option in a list of choices.
 */
@JsonSerialize
public class AssetOptionFieldSelectValueChoiceAssetControl extends AssetOptionFieldSelectValueChoice {
    @JsonProperty("assets")
    private List<AssetIdWildcard> assets;

    @JsonProperty("control")
    private DictKey control;

    @JsonProperty("label")
    private Label label;

    @JsonProperty("option_type")
    private AssetOptionFieldSelectValueChoiceAssetControlOptionType optionType;

    public AssetOptionFieldSelectValueChoiceAssetControl() {
    }

    /**
     * Getter for assets.<p>
     */
    public List<AssetIdWildcard> getAssets() {
        return assets;
    }

    /**
     * Setter for assets.<p>
     */
    public void setAssets(List<AssetIdWildcard> assets) {
        this.assets = assets;
    }

    /**
     * Getter for control.<p>
     * The dictionary key of the asset control field.
     */
    public DictKey getControl() {
        return control;
    }

    /**
     * Setter for control.<p>
     * The dictionary key of the asset control field.
     */
    public void setControl(DictKey control) {
        this.control = control;
    }

    /**
     * Getter for label.<p>
     */
    public Label getLabel() {
        return label;
    }

    /**
     * Setter for label.<p>
     */
    public void setLabel(Label label) {
        this.label = label;
    }

    /**
     * Getter for optionType.<p>
     */
    public AssetOptionFieldSelectValueChoiceAssetControlOptionType getOptionType() {
        return optionType;
    }

    /**
     * Setter for optionType.<p>
     */
    public void setOptionType(AssetOptionFieldSelectValueChoiceAssetControlOptionType optionType) {
        this.optionType = optionType;
    }
}