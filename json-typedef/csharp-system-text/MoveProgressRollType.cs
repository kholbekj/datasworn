// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    [JsonConverter(typeof(MoveProgressRollTypeJsonConverter))]
    public enum MoveProgressRollType
    {
        Move,
    }
    public class MoveProgressRollTypeJsonConverter : JsonConverter<MoveProgressRollType>
    {
        public override MoveProgressRollType Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string value = JsonSerializer.Deserialize<string>(ref reader, options);
            switch (value)
            {
                case "move":
                    return MoveProgressRollType.Move;
                default:
                    throw new ArgumentException(String.Format("Bad MoveProgressRollType value: {0}", value));
            }
        }

        public override void Write(Utf8JsonWriter writer, MoveProgressRollType value, JsonSerializerOptions options)
        {
            switch (value)
            {
                case MoveProgressRollType.Move:
                    JsonSerializer.Serialize<string>(writer, "move", options);
                    return;
            }
        }
    }
}