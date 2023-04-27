// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Dataforged
{
    public class MoveExtension
    {
        [JsonPropertyName("id")]
        public Id Id { get; set; }

        [JsonPropertyName("trigger")]
        public TriggerExtension Trigger { get; set; }

        [JsonPropertyName("_extends")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IList<Id> Extends { get; set; }

        [JsonPropertyName("outcomes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public MoveOutcomesExtension? Outcomes { get; set; }

        [JsonPropertyName("text")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public MarkdownString? Text { get; set; }
    }
}