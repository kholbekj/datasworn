// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

/**
 * A meter with an integer value, bounded by a minimum and maximum.
 */
@JsonSerialize
public class ConditionMeterField {
    @JsonProperty("field_type")
    private ConditionMeterFieldFieldType fieldType;

    @JsonProperty("label")
    private InputLabel label;

    @JsonProperty("max")
    private Byte max;

    @JsonProperty("min")
    private Byte min;

    @JsonProperty("rollable")
    private Boolean rollable;

    @JsonProperty("value")
    private Byte value;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("icon")
    private SvgImageUrl icon;

    public ConditionMeterField() {
    }

    /**
     * Getter for fieldType.<p>
     */
    public ConditionMeterFieldFieldType getFieldType() {
        return fieldType;
    }

    /**
     * Setter for fieldType.<p>
     */
    public void setFieldType(ConditionMeterFieldFieldType fieldType) {
        this.fieldType = fieldType;
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
     * Getter for max.<p>
     * The maximum value of this meter.
     */
    public Byte getMax() {
        return max;
    }

    /**
     * Setter for max.<p>
     * The maximum value of this meter.
     */
    public void setMax(Byte max) {
        this.max = max;
    }

    /**
     * Getter for min.<p>
     * The minimum value of this meter.
     */
    public Byte getMin() {
        return min;
    }

    /**
     * Setter for min.<p>
     * The minimum value of this meter.
     */
    public void setMin(Byte min) {
        this.min = min;
    }

    /**
     * Getter for rollable.<p>
     */
    public Boolean getRollable() {
        return rollable;
    }

    /**
     * Setter for rollable.<p>
     */
    public void setRollable(Boolean rollable) {
        this.rollable = rollable;
    }

    /**
     * Getter for value.<p>
     * The current value of this meter.
     */
    public Byte getValue() {
        return value;
    }

    /**
     * Setter for value.<p>
     * The current value of this meter.
     */
    public void setValue(Byte value) {
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