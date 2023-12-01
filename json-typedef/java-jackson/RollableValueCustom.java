// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

/**
 * An arbitrary static integer value with a label.
 */
@JsonSerialize
public class RollableValueCustom extends RollableValue {
    @JsonProperty("label")
    private InputLabel label;

    @JsonProperty("value")
    private Short value;

    public RollableValueCustom() {
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
    public Short getValue() {
        return value;
    }

    /**
     * Setter for value.<p>
     */
    public void setValue(Short value) {
        this.value = value;
    }
}
