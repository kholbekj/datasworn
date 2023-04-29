// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class TriggerOptionActionChoiceRef extends TriggerOptionActionChoice {
    @JsonProperty("label")
    private Label label;

    @JsonProperty("ref")
    private String ref;

    public TriggerOptionActionChoiceRef() {
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
     * Getter for ref.<p>
     */
    public String getRef() {
        return ref;
    }

    /**
     * Setter for ref.<p>
     */
    public void setRef(String ref) {
        this.ref = ref;
    }
}