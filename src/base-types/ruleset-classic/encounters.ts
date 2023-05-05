import { Type, type Static } from '@sinclair/typebox'
import { ID, Localize, Abstract, Encounters } from 'base-types/common'
import { Squash } from 'base-types/common/utils'

export const EncounterClassic = Squash(
	[
		Encounters.EncounterBase,
		Type.Object({
			id: Type.Ref(ID.EncounterClassicID),
			your_truths: Type.Optional(Type.Ref(Localize.MarkdownString))
		})
	],
	{ $id: '#/$defs/EncounterClassic' }
)

export const EncounterCollectionClassic = Squash(
	[
		Abstract.Collection(
			Type.Ref(EncounterClassic),
			Type.Ref(ID.EncounterCollectionID)
		),
		Type.Object({
			id: Type.Ref(ID.EncounterCollectionID),
			member_label: Type.Optional(Type.Ref(Localize.Label))
		})
	],
	{ $id: '#/$defs/EncounterCollectionClassic' }
)
export type EncounterCollectionClassic = Static<
	typeof EncounterCollectionClassic
>
