// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// When its value is set to `true` it means that the card is flipped over.
    /// Some assets use this to represent a 'broken' state (e.g. Starforged
    /// Module assets).
    /// </summary>
    public class AssetControlFieldCardFlip : AssetControlField
    {
        [JsonPropertyName("field_type")]
        public string FieldType { get => "card_flip"; }

        /// <summary>
        /// Does this field disable the asset when its value is set to `true`?
        /// </summary>
        [JsonPropertyName("disables_asset")]
        public bool DisablesAsset { get; set; }

        /// <summary>
        /// The unique Datasworn ID for this item.
        /// </summary>
        [JsonPropertyName("id")]
        public AssetControlFieldId Id { get; set; }

        /// <summary>
        /// Does this field count as an impact (Starforged) or debility
        /// (Ironsworn classic) when its value is set to `true`?
        /// </summary>
        [JsonPropertyName("is_impact")]
        public bool IsImpact { get; set; }

        [JsonPropertyName("label")]
        public InputLabel Label { get; set; }

        /// <summary>
        /// Is the card flipped over?
        /// </summary>
        [JsonPropertyName("value")]
        public bool Value { get; set; }

        /// <summary>
        /// An icon associated with this input.
        /// </summary>
        [JsonPropertyName("icon")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public SvgImageUrl? Icon { get; set; }
    }
}
