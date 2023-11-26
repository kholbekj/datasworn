// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class TriggerNoRollCondition {
    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("by")
    private TriggerBy by;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("text")
    private MarkdownString text;

    public TriggerNoRollCondition() {
    }

    /**
     * Getter for by.<p>
     */
    public TriggerBy getBy() {
        return by;
    }

    /**
     * Setter for by.<p>
     */
    public void setBy(TriggerBy by) {
        this.by = by;
    }

    /**
     * Getter for text.<p>
     * A markdown string of any trigger text specific to this trigger condition.
     */
    public MarkdownString getText() {
        return text;
    }

    /**
     * Setter for text.<p>
     * A markdown string of any trigger text specific to this trigger condition.
     */
    public void setText(MarkdownString text) {
        this.text = text;
    }
}