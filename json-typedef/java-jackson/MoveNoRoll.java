// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;
import java.util.Map;

/**
 * A move that makes no progress rolls or action rolls.
 */
@JsonSerialize
public class MoveNoRoll extends Move {
    @JsonProperty("id")
    private MoveId id;

    @JsonProperty("name")
    private Label name;

    @JsonProperty("source")
    private Source source;

    @JsonProperty("text")
    private MarkdownString text;

    @JsonProperty("trigger")
    private TriggerNoRoll trigger;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("canonical_name")
    private Label canonicalName;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("oracles")
    private List<OracleTableId> oracles;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("replaces")
    private MoveId replaces;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("suggestions")
    private Suggestions suggestions;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("tags")
    private Map<String, Map<String, String>> tags;

    public MoveNoRoll() {
    }

    /**
     * Getter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public MoveId getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public void setId(MoveId id) {
        this.id = id;
    }

    /**
     * Getter for name.<p>
     * The primary name/label for this item.
     */
    public Label getName() {
        return name;
    }

    /**
     * Setter for name.<p>
     * The primary name/label for this item.
     */
    public void setName(Label name) {
        this.name = name;
    }

    /**
     * Getter for source.<p>
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    public Source getSource() {
        return source;
    }

    /**
     * Setter for source.<p>
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    public void setSource(Source source) {
        this.source = source;
    }

    /**
     * Getter for text.<p>
     * The complete rules text of the move.
     */
    public MarkdownString getText() {
        return text;
    }

    /**
     * Setter for text.<p>
     * The complete rules text of the move.
     */
    public void setText(MarkdownString text) {
        this.text = text;
    }

    /**
     * Getter for trigger.<p>
     * Trigger conditions for this move.
     */
    public TriggerNoRoll getTrigger() {
        return trigger;
    }

    /**
     * Setter for trigger.<p>
     * Trigger conditions for this move.
     */
    public void setTrigger(TriggerNoRoll trigger) {
        this.trigger = trigger;
    }

    /**
     * Getter for canonicalName.<p>
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    public Label getCanonicalName() {
        return canonicalName;
    }

    /**
     * Setter for canonicalName.<p>
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    public void setCanonicalName(Label canonicalName) {
        this.canonicalName = canonicalName;
    }

    /**
     * Getter for oracles.<p>
     * Oracles associated with this move. It's not recommended to roll these
     * automatically, as almost all moves present them as an option, not a
     * requirement.
     */
    public List<OracleTableId> getOracles() {
        return oracles;
    }

    /**
     * Setter for oracles.<p>
     * Oracles associated with this move. It's not recommended to roll these
     * automatically, as almost all moves present them as an option, not a
     * requirement.
     */
    public void setOracles(List<OracleTableId> oracles) {
        this.oracles = oracles;
    }

    /**
     * Getter for replaces.<p>
     * Indicates that this move replaces the identified move. References to the
     * replaced move can be considered equivalent to this move.
     */
    public MoveId getReplaces() {
        return replaces;
    }

    /**
     * Setter for replaces.<p>
     * Indicates that this move replaces the identified move. References to the
     * replaced move can be considered equivalent to this move.
     */
    public void setReplaces(MoveId replaces) {
        this.replaces = replaces;
    }

    /**
     * Getter for suggestions.<p>
     */
    public Suggestions getSuggestions() {
        return suggestions;
    }

    /**
     * Setter for suggestions.<p>
     */
    public void setSuggestions(Suggestions suggestions) {
        this.suggestions = suggestions;
    }

    /**
     * Getter for tags.<p>
     */
    public Map<String, Map<String, String>> getTags() {
        return tags;
    }

    /**
     * Setter for tags.<p>
     */
    public void setTags(Map<String, Map<String, String>> tags) {
        this.tags = tags;
    }
}
