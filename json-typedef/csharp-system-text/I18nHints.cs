// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// Internationalization/localization hints for the text content of this
    /// object.
    /// </summary>
    public class I18nHints
    {
        [JsonPropertyName("template")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public I18nHintsTemplate Template { get; set; }

        [JsonPropertyName("text")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public I18nHint? Text { get; set; }

        [JsonPropertyName("text2")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public I18nHint? Text2 { get; set; }

        [JsonPropertyName("text3")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public I18nHint? Text3 { get; set; }
    }
}
