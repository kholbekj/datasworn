// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Dataforged
{
    /// <summary>
    /// Asset options are fields that are usually only set once, typically when
    /// the player purchases the asset. The most common examples are the "Name"
    /// fields on companion assets. A more complex example is the choice of
    /// stats on the Devotant asset.
    /// </summary>
    [JsonConverter(typeof(AssetOptionFieldJsonConverter))]
    public abstract class AssetOptionField
    {
    }

    public class AssetOptionFieldJsonConverter : JsonConverter<AssetOptionField>
    {
        public override AssetOptionField Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var readerCopy = reader;
            var tagValue = JsonDocument.ParseValue(ref reader).RootElement.GetProperty("field_type").GetString();

            switch (tagValue)
            {
                case "choices_extend_asset":
                    return JsonSerializer.Deserialize<AssetOptionFieldChoicesExtendAsset>(ref readerCopy, options);
                case "choices_number":
                    return JsonSerializer.Deserialize<AssetOptionFieldChoicesNumber>(ref readerCopy, options);
                case "choices_stat_id":
                    return JsonSerializer.Deserialize<AssetOptionFieldChoicesStatId>(ref readerCopy, options);
                case "text":
                    return JsonSerializer.Deserialize<AssetOptionFieldText>(ref readerCopy, options);
                default:
                    throw new ArgumentException(String.Format("Bad FieldType value: {0}", tagValue));
            }
        }

        public override void Write(Utf8JsonWriter writer, AssetOptionField value, JsonSerializerOptions options)
        {
            JsonSerializer.Serialize(writer, value, value.GetType(), options);
        }
    }
}