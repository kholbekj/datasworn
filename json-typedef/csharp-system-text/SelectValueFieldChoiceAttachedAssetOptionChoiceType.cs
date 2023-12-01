// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    [JsonConverter(typeof(SelectValueFieldChoiceAttachedAssetOptionChoiceTypeJsonConverter))]
    public enum SelectValueFieldChoiceAttachedAssetOptionChoiceType
    {
        Choice,
    }
    public class SelectValueFieldChoiceAttachedAssetOptionChoiceTypeJsonConverter : JsonConverter<SelectValueFieldChoiceAttachedAssetOptionChoiceType>
    {
        public override SelectValueFieldChoiceAttachedAssetOptionChoiceType Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string value = JsonSerializer.Deserialize<string>(ref reader, options);
            switch (value)
            {
                case "choice":
                    return SelectValueFieldChoiceAttachedAssetOptionChoiceType.Choice;
                default:
                    throw new ArgumentException(String.Format("Bad SelectValueFieldChoiceAttachedAssetOptionChoiceType value: {0}", value));
            }
        }

        public override void Write(Utf8JsonWriter writer, SelectValueFieldChoiceAttachedAssetOptionChoiceType value, JsonSerializerOptions options)
        {
            switch (value)
            {
                case SelectValueFieldChoiceAttachedAssetOptionChoiceType.Choice:
                    JsonSerializer.Serialize<string>(writer, "choice", options);
                    return;
            }
        }
    }
}
