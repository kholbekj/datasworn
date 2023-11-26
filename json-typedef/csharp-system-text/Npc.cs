// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// A non-player character entry, similar to those in Chapter 5 of the
    /// Ironsworn Rulebook, or Chapter 4 of Starforged.
    /// </summary>
    public class Npc
    {
        [JsonPropertyName("description")]
        public MarkdownString Description { get; set; }

        [JsonPropertyName("drives")]
        public IList<MarkdownString> Drives { get; set; }

        [JsonPropertyName("features")]
        public IList<MarkdownString> Features { get; set; }

        /// <summary>
        /// The unique Datasworn ID for this item.
        /// </summary>
        [JsonPropertyName("id")]
        public NpcId Id { get; set; }

        /// <summary>
        /// The primary name/label for this item.
        /// </summary>
        [JsonPropertyName("name")]
        public Label Name { get; set; }

        [JsonPropertyName("nature")]
        public NpcNature Nature { get; set; }

        [JsonPropertyName("quest_starter")]
        public MarkdownString QuestStarter { get; set; }

        /// <summary>
        /// The suggested challenge rank for this NPC.
        /// </summary>
        [JsonPropertyName("rank")]
        public ChallengeRank Rank { get; set; }

        /// <summary>
        /// Attribution for the original source (such as a book or website) of
        /// this item, including the author and licensing information.
        /// </summary>
        [JsonPropertyName("source")]
        public Source Source { get; set; }

        [JsonPropertyName("tactics")]
        public IList<MarkdownString> Tactics { get; set; }

        /// <summary>
        /// The name of this item as it appears on the page in the book, if it's
        /// different from `name`.
        /// </summary>
        [JsonPropertyName("canonical_name")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Label? CanonicalName { get; set; }

        [JsonPropertyName("suggestions")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public Suggestions? Suggestions { get; set; }

        [JsonPropertyName("summary")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public MarkdownString? Summary { get; set; }

        [JsonPropertyName("variants")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IDictionary<string, NpcVariant> Variants { get; set; }

        [JsonPropertyName("your_truth")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public MarkdownString? YourTruth { get; set; }
    }
}