// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Datasworn
{
    public class I18nHint
    {
        [JsonPropertyName("part_of_speech")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public PartOfSpeech? PartOfSpeech { get; set; }
    }
}