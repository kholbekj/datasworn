import { type JSONSchema7 } from 'json-schema'

export const WorldTruthClassic: JSONSchema7 = {
  allOf: [
    {
      $ref: '#/$defs/SettingTruth'
    },
    {
      properties: {
        options: {
          type: 'array',
          maxItems: 3,
          minItems: 3,
          items: {
            type: 'object',
            required: ['description', 'quest_starter'],
            properties: {
              description: {
                $ref: '#/$defs/MarkdownParagraphs'
              },
              quest_starter: {
                $ref: '#/$defs/QuestStarter'
              }
            }
          }
        }
      }
    }
  ]
}

export const SettingTruthOption: JSONSchema7 = {
  required: ['quest_starter'],
  additionalProperties: false,
  properties: {
    quest_starter: {
      $ref: '#/$defs/QuestStarter'
    }
  }
}

export const SettingTruth: JSONSchema7 = {
  type: 'object',
  required: ['name', 'source'],
  properties: {
    _id: {
      $ref: '#/$defs/ID'
    },
    name: {
      $ref: '#/$defs/Label'
    },
    source: {
      $ref: '#/$defs/Source'
    }
  }
}

export const SettingTruthStarforged: JSONSchema7 = {
  allOf: [
    {
      $ref: '#/$defs/SettingTruth'
    },
    {
      properties: {
        options: {
          type: 'array',
          items: {
            $ref: '#/$defs/OracleTableRow'
          }
        }
      }
    }
  ]
}

const $defs: Record<string, JSONSchema7> = {
  SettingTruth,
  SettingTruthOption,
  SettingTruthStarforged,
  WorldTruthClassic
}
export default $defs