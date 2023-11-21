// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class ConditionMeterRule {
    @JsonProperty("description")
    private MarkdownString description;

    @JsonProperty("max")
    private Short max;

    @JsonProperty("min")
    private Short min;

    @JsonProperty("name")
    private Label name;

    @JsonProperty("shared")
    private Boolean shared;

    public ConditionMeterRule() {
    }

    /**
     * Getter for description.<p>
     */
    public MarkdownString getDescription() {
        return description;
    }

    /**
     * Setter for description.<p>
     */
    public void setDescription(MarkdownString description) {
        this.description = description;
    }

    /**
     * Getter for max.<p>
     * The maximum value of this meter.
     */
    public Short getMax() {
        return max;
    }

    /**
     * Setter for max.<p>
     * The maximum value of this meter.
     */
    public void setMax(Short max) {
        this.max = max;
    }

    /**
     * Getter for min.<p>
     * The minimum value of this meter.
     */
    public Short getMin() {
        return min;
    }

    /**
     * Setter for min.<p>
     * The minimum value of this meter.
     */
    public void setMin(Short min) {
        this.min = min;
    }

    /**
     * Getter for name.<p>
     * A label for this input. In some contexts it may be undesirable to render
     * this text, but it should always be exposed to assistive technology (e.g.
     * with `aria-label` in HTML).
     */
    public Label getName() {
        return name;
    }

    /**
     * Setter for name.<p>
     * A label for this input. In some contexts it may be undesirable to render
     * this text, but it should always be exposed to assistive technology (e.g.
     * with `aria-label` in HTML).
     */
    public void setName(Label name) {
        this.name = name;
    }

    /**
     * Getter for shared.<p>
     */
    public Boolean getShared() {
        return shared;
    }

    /**
     * Setter for shared.<p>
     */
    public void setShared(Boolean shared) {
        this.shared = shared;
    }
}