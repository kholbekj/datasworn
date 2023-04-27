// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Dataforged
{
    public class TriggerProgressRoll : Trigger
    {
        [JsonPropertyName("roll_type")]
        public string RollType { get => "progress_roll"; }

        [JsonPropertyName("text")]
        public MarkdownString Text { get; set; }

        [JsonPropertyName("options")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public IList<TriggerOptionProgress> Options { get; set; }
    }
}