// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

@JsonSerialize
public class TriggerProgressRoll extends Trigger {
    @JsonProperty("text")
    private MarkdownString text;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("options")
    private List<TriggerOptionProgress> options;

    public TriggerProgressRoll() {
    }

    /**
     * Getter for text.<p>
     */
    public MarkdownString getText() {
        return text;
    }

    /**
     * Setter for text.<p>
     */
    public void setText(MarkdownString text) {
        this.text = text;
    }

    /**
     * Getter for options.<p>
     */
    public List<TriggerOptionProgress> getOptions() {
        return options;
    }

    /**
     * Setter for options.<p>
     */
    public void setOptions(List<TriggerOptionProgress> options) {
        this.options = options;
    }
}