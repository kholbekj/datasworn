import { Type, type Static, type TUnsafe } from '@sinclair/typebox'
import { Merge } from './utils/typebox.js'

import { DELVE_SCHEMA_ID, VERSION } from '../../scripts/const.js'
import * as Generic from './utils/generic.js'

import { type TAssetType } from './assets.js'
import { type TAtlas } from './atlas.js'
import {
	type TDelveSite,
	type TDelveSiteDomain,
	type TDelveSiteTheme
} from './delve-sites.js'
import { type NamespaceID, type Source } from './index.js'
import { type TMoveCategory } from './moves.js'
import { type TNpcCollection } from './npcs.js'
import { type OracleCollection } from './oracles.js'
import { type TRarity } from './rarities.js'
import { type Rules } from './rules.js'
import { type TTruth } from './truths.js'

const RulesetPrimaryContent = Type.Object({
	oracles: Generic.Dictionary(
		Type.Ref<TUnsafe<OracleCollection>>('#/$defs/OracleCollection'),
		{
			description:
				'A dictionary object containing oracle collections, which may contain oracle tables and/or oracle collections.'
		}
	),
	moves: Generic.Dictionary(Type.Ref<TMoveCategory>('#/$defs/MoveCategory'), {
		description:
			'A dictionary object containing move categories, which contain moves.'
	}),
	assets: Generic.Dictionary(Type.Ref<TAssetType>('#/$defs/AssetType'), {
		description:
			'A dictionary object containing asset types, which contain assets.'
	})
})

const RulesetSecondaryContent = Type.Object({
	atlas: Generic.Dictionary(Type.Ref<TAtlas>('#/$defs/Atlas'), {
		description:
			'A dictionary object containing atlas collections, which contain atlas entries.'
	}),
	npcs: Generic.Dictionary(Type.Ref<TNpcCollection>('#/$defs/NpcCollection'), {
		description:
			'A dictionary object containing NPC collections, which contain NPCs.'
	}),
	truths: Generic.Dictionary(Type.Ref<TTruth>('#/$defs/Truth'), {
		description: 'A dictionary object of truth categories.'
	}),
	rarities: Generic.Dictionary(Type.Ref<TRarity>('#/$defs/Rarity'), {
		description:
			'A dictionary object containing rarities, like those presented in Ironsworn: Delve.'
	}),
	delve_sites: Generic.Dictionary(Type.Ref<TDelveSite>('#/$defs/DelveSite'), {
		description:
			'A dictionary object of delve sites, like the premade delve sites presented in Ironsworn: Delve'
	}),
	site_themes: Generic.Dictionary(
		Type.Ref<TDelveSiteTheme>('#/$defs/DelveSiteTheme'),
		{
			description: 'A dictionary object containing delve site themes.'
		}
	),
	site_domains: Generic.Dictionary(
		Type.Ref<TDelveSiteDomain>('#/$defs/DelveSiteDomain'),
		{
			description: 'A dictionary object containing delve site domains.'
		}
	)
})

export const Ruleset = Merge(
	Type.Object({
		id: Type.Ref<typeof NamespaceID>('#/$defs/NamespaceID'),
		source: Type.Ref<typeof Source>('#/$defs/Source'),
		rules: Type.Optional(Type.Ref<typeof Rules>('#/$defs/Rules'))
	}),
	Merge(
		Type.Partial(RulesetPrimaryContent),
		Type.Partial(RulesetSecondaryContent)
	),
	{
		$id: '#/$defs/Ruleset',
		description:
			'Describes game rules compatible with the Ironsworn tabletop role-playing game by Shawn Tomkin.'
	}
)
export type Ruleset = Static<typeof Ruleset>

export const Expansion = Merge(
	Type.Object({
		id: Type.Ref<typeof NamespaceID>('#/$defs/NamespaceID'),
		source: Type.Ref<typeof Source>('#/$defs/Source'),
		enhances: Type.Ref<typeof NamespaceID>('#/$defs/NamespaceID')
	}),
	Merge(
		Type.Partial(RulesetPrimaryContent),
		Type.Partial(RulesetSecondaryContent)
	),
	{ $id: '#/$defs/Expansion' }
)
export type Expansion = Static<typeof Expansion>

// TODO: a separate object to describe rules expansions

// console.log(Datasworn)

export const Delve = Type.Object(
	{
		rarities: Type.Optional(
			Generic.Dictionary(Type.Ref<TRarity>('#/$defs/Rarity'), {
				description:
					'A dictionary object containing rarities, like those presented in Ironsworn: Delve.'
			})
		),
		delve_sites: Type.Optional(
			Generic.Dictionary(Type.Ref<TDelveSite>('#/$defs/DelveSite'), {
				description:
					'A dictionary object of delve sites, like the premade delve sites presented in Ironsworn: Delve'
			})
		),
		site_themes: Type.Optional(
			Generic.Dictionary(Type.Ref<TDelveSiteTheme>('#/$defs/DelveSiteTheme'), {
				description: 'A dictionary object containing delve site themes.'
			})
		),
		site_domains: Type.Optional(
			Generic.Dictionary(
				Type.Ref<TDelveSiteDomain>('#/$defs/DelveSiteDomain'),
				{
					description: 'A dictionary object containing delve site domains.'
				}
			)
		)
	},
	{
		$schema: Ruleset.$id as string,
		$id: DELVE_SCHEMA_ID,
		title: `Ironsworn: Delve for Datasworn v${VERSION}`,

		description:
			'Describes game rules used by the Ironsworn: Delve supplement for Ironsworn tabletop role-playing game by Shawn Tomkin.'
	}
)

export type Delve = Static<typeof Delve>