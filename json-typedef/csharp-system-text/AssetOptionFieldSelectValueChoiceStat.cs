// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// Represents an option in a list of choices.
    /// </summary>
    public class AssetOptionFieldSelectValueChoiceStat : AssetOptionFieldSelectValueChoice
    {
        [JsonPropertyName("using")]
        public string Using { get => "stat"; }

        [JsonPropertyName("label")]
        public Label Label { get; set; }

        [JsonPropertyName("option_type")]
        public AssetOptionFieldSelectValueChoiceStatOptionType OptionType { get; set; }

        [JsonPropertyName("stat")]
        public StatKey Stat { get; set; }
    }
}