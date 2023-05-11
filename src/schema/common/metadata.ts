import { type Static, Type } from '@sinclair/typebox'
import { JsonEnum } from 'typebox'

import { ID } from 'schema/common'

export const Ruleset = JsonEnum(['classic', 'starforged'], {
	$id: '#/$defs/Ruleset',
	description: "The ruleset used for a sourcebook's rules content."
})
export type Ruleset = Static<typeof Ruleset>
export const SVGImageURL = Type.String({
	$id: '#/$defs/SVGImageURL',
	format: 'uri-reference',
	description: 'A relative URL pointing to a vector image in the SVG format.'
})
export type SVGImageURL = Static<typeof SVGImageURL>
export const WEBPImageURL = Type.String({
	$id: '#/$defs/WEBPImageURL',
	format: 'uri-reference',
	description: 'A relative URL pointing to a raster image in the WEBP format.'
})
export type WEBPImageURL = Static<typeof WEBPImageURL>
export const CSSColor = Type.String({
	title: 'CSS Color',
	$id: '#/$defs/CSSColor',
	description:
		'A CSS color value. See: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value'
})
export type CSSColor = Static<typeof CSSColor>

export const Source = Type.Object(
	{
		title: Type.String({
			description: 'The title of the source document.',
			examples: [
				'Ironsworn Rulebook',
				'Ironsworn Assets Master Set',
				'Ironsworn: Delve',
				'Ironsworn: Starforged Rulebook',
				'Ironsworn: Starforged Assets',
				'Sundered Isles'
			]
		}),
		page: Type.Optional(Type.Integer({ minimum: 1, title: 'Page number' })),
		authors: Type.Array(
			Type.Object(
				{
					name: Type.String({ examples: ['Shawn Tomkin'] }),
					email: Type.Optional(
						Type.String({
							format: 'email',
							description: 'An optional email contact for the author'
						})
					)
				},
				{ examples: [{ name: 'Shawn Tomkin' }] }
			),
			{ minItems: 1 }
		),
		date: Type.String({
			format: 'date',
			description:
				"The date of the source documents's last update, formatted YYYY-MM-DD. Required because it's used to determine whether the data needs updating."
		}),
		url: Type.String({
			format: 'uri',
			description: 'An absolute URL where the source document is available.',
			examples: ['https://ironswornrpg.com']
		}),
		license: Type.String({
			format: 'uri',
			description:
				"An absolute URL pointing to the location where this element's license can be found.",
			examples: [
				'https://creativecommons.org/licenses/by/4.0',
				'https://creativecommons.org/licenses/by-nc-sa/4.0'
			]
		})
	},
	{
		description: 'Metadata describing the original source of this item',
		$id: '#/$defs/Source'
	}
)

export type Source = Static<typeof Source>

export const SourceStub = Type.Partial(Source, {
	description:
		'A source data stub that inherits data from ancestor elements during post-processing. To prevent inheritance, use the regular `source` property instead.',
	$id: '#/$defs/SourceStub'
})

export type SourceStub = Static<typeof SourceStub>

export const SuggestionsClassic = Type.Object(
	{
		oracles: Type.Optional(Type.Array(Type.Ref(ID.OracleTableID))),
		assets: Type.Optional(Type.Array(Type.Ref(ID.AssetID))),
		moves: Type.Optional(Type.Array(Type.Ref(ID.MoveID))),
		site_domains: Type.Optional(Type.Array(Type.Ref(ID.DelveSiteDomainID))),
		site_themes: Type.Optional(Type.Array(Type.Ref(ID.DelveSiteThemeID))),
		encounters: Type.Optional(Type.Array(Type.Ref(ID.EncounterClassicID))),
		regions: Type.Optional(Type.Array(Type.Ref(ID.RegionEntryID)))
	},
	{ $id: '#/$defs/SuggestionsClassic' }
)

export type SuggestionsClassic = Static<typeof SuggestionsClassic>

export const SuggestionsStarforged = Type.Object(
	{
		oracles: Type.Optional(Type.Array(Type.Ref(ID.OracleTableID))),
		assets: Type.Optional(Type.Array(Type.Ref(ID.AssetID))),
		moves: Type.Optional(Type.Array(Type.Ref(ID.MoveID))),
		encounters: Type.Optional(Type.Array(Type.Ref(ID.EncounterStarforgedID)))
	},
	{ $id: '#/$defs/SuggestionsStarforged' }
)
export type SuggestionsStarforged = Static<typeof SuggestionsStarforged>

export const Suggestions = Type.Union(
	[Type.Ref(SuggestionsClassic), Type.Ref(SuggestionsStarforged)],
	{ $id: '#/$defs/Suggestions' }
)

export type Suggestions = Static<typeof Suggestions>