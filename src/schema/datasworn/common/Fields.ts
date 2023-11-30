import {
	Type,
	type ObjectOptions,
	type Static,
	type TLiteral,
	type TObject,
	type TRef,
	type TSchema,
	type TString
} from '@sinclair/typebox'
import { type TMoveEnhancement } from '../Moves.js'
import { type TAssetEnhancement } from '../assets/Enhancement.js'
import * as Base from './Inputs.js'
import * as Utils from '../Utils.js'
import * as Generic from '../Generic.js'
import type * as Id from './Id.js'
import { RollableValue } from './RollableValues.js'
import { Members } from '../../../scripts/json-typedef/symbol.js'
import { Metadata } from './index.js'

export const EnhanceableProperties = Symbol('EnhanceableProperties')

/** The standard discriminator key for input fields. */
export const DISCRIMINATOR = 'field_type' as const

function InputField<
	T extends Base.TInput<TSchema>,
	Discriminator extends string
>(
	base: T,
	discriminator: Discriminator,
	id: Id.AnyID,
	options: ObjectOptions = {}
) {
	const { description, $comment } = base

	const mixin = Utils.Assign([
		base,
		Type.Object({
			[DISCRIMINATOR]: Type.Literal(discriminator),
			icon: Type.Optional(
				Type.Ref(Metadata.SvgImageUrl, {
					description: 'An icon associated with this input.'
				})
			)
		})
	]) as unknown as TObject<
		T['properties'] & { [DISCRIMINATOR]: TLiteral<Discriminator>; id: Id.AnyID }
	>

	const result = Generic.IdentifiedNode(id, mixin, {
		description,
		$comment,
		[EnhanceableProperties]: [] as Array<keyof Static<T>>,
		...options
	}) as unknown as TInputField<T, Discriminator>

	return result
}
export type TInputField<
	T extends Base.TInput<TSchema>,
	Discriminator extends string
> = Generic.TIdentifiedNode<
	TObject<
		T['properties'] & {
			[DISCRIMINATOR]: TLiteral<Discriminator>
			id: TRef<TString>
		}
	>
> & {
	[EnhanceableProperties]: Array<keyof Static<T>>
}

// ReturnType<typeof InputField<T, Discriminator>> & InputFieldOptions<T>

export type InputField<
	T extends Base.Input<any>,
	Discriminator extends string
> = Utils.Assign<
	T,
	{
		id: string
		[DISCRIMINATOR]: Discriminator
	}
>

export function isEnhanceable(
	field: TInputField<Base.TInput<TSchema>, string>
) {
	return !!field[EnhanceableProperties].length
}

export function CounterField(id: TRef<TString>) {
	return InputField(Base.Counter, 'counter', id, {
		[EnhanceableProperties]: ['max'],
		title: 'CounterField'
	})
}
export type TCounterField = ReturnType<typeof CounterField>
export type CounterField = Static<TCounterField>

export function ClockField(id: TRef<TString>, options: ObjectOptions = {}) {
	const { $comment, description } = Base.Clock
	return InputField(Base.Clock, 'clock', id, {
		[EnhanceableProperties]: ['max'],
		title: 'ClockField',
		description,
		$comment,
		...options
	})
}
export type TClockField = ReturnType<typeof ClockField>
export type ClockField = Static<TClockField>

export function ConditionMeterField(id: TRef<TString>) {
	return InputField(
		Base.Meter(Type.Integer({ default: 0 }), Type.Integer()),
		'condition_meter',
		id,
		{
			[EnhanceableProperties]: ['max'],
			title: 'ConditionMeterField'
		}
	)
}
export type TConditionMeterField = ReturnType<typeof ConditionMeterField>
export type ConditionMeterField = Static<TConditionMeterField>

function SelectField<
	Option extends
		| Base.TSelectOption<TObject>
		| Utils.TDiscriminatedUnion<Base.TSelectOption<TObject>[], string>,
	Discriminator extends string
>(
	optionSchema: Option,
	discriminator: Discriminator,
	id: TRef<TString>,
	options: ObjectOptions = {}
) {
	return InputField(Base.Select(optionSchema), discriminator, id, options)
}

function SelectFieldWithGroups<
	Option extends Base.TSelectOption<TObject>,
	Discriminator extends string
>(
	optionSchema: Option,
	discriminator: Discriminator,
	id: TRef<TString>,
	options: ObjectOptions = {}
) {
	return InputField(
		Base.SelectWithGroups(optionSchema),
		discriminator,
		id,
		options
	)
}

const SelectValueOption = Utils.DiscriminatedUnion(
	RollableValue[Members].map((subschema) => Base.SelectOption(subschema)),
	'using'
)

export function SelectValueField(
	id: TRef<TString>,
	options: ObjectOptions = {}
) {
	return SelectField(SelectValueOption, 'select_value', id, {
		title: 'SelectValueField',
		...options
	})
}
export type TSelectValueField = ReturnType<typeof SelectValueField>
export type SelectValueField = Static<TSelectValueField>

export function SelectEnhancementField(
	id: TRef<TString>,
	options: ObjectOptions = {}
) {
	return SelectFieldWithGroups(
		Base.SelectOption(
			Type.Partial(
				Type.Object({
					enhance_asset: Type.Ref<TAssetEnhancement>('AssetEnhancement'),
					// TODO
					// enhance_player: Type.Object({}, { description: 'NYI' }),
					enhance_moves: Type.Array(
						Type.Ref<TMoveEnhancement>('MoveEnhancement')
					)
				})
			),
			{ title: 'SelectEnhancementOption' }
		),
		'select_enhancement',
		id,
		{
			title: 'SelectEnhancementField',
			description:
				'Select from player and/or asset enhancements. Use it to describe modal abilities. For examples, see Ironclad (classic Ironsworn) and Windbinder (Sundered Isles).',
			...options
		}
	)
}
export type TSelectEnhancementField = ReturnType<typeof SelectEnhancementField>
export type SelectEnhancementField = Static<TSelectEnhancementField>

export function CardFlipField(id: TRef<TString>, options: ObjectOptions = {}) {
	return InputField(
		Base.Input(
			Type.Boolean({ description: 'Is the card flipped over?', default: false })
		),
		'card_flip',
		id,
		{
			title: 'CardFlipField',
			description: `When its value is set to \`true\` it means that the card is flipped over. Some assets use this to represent a 'broken' state (e.g. Starforged Module assets).`,
			...options
		}
	)
}
export type TCardFlipField = ReturnType<typeof CardFlipField>
export type CardFlipField = Static<TCardFlipField>

export function CheckboxField(id: TRef<TString>, options: ObjectOptions = {}) {
	return InputField(Base.Checkbox, 'checkbox', id, {
		title: 'CheckboxField',
		...options
	})
}
export type TCheckboxField = ReturnType<typeof CheckboxField>
export type CheckboxField = Static<TCheckboxField>

export function TextField(id: TRef<TString>, options: ObjectOptions = {}) {
	return InputField(Base.TextInput, 'text', id, {
		title: 'TextField',
		...options
	})
}
export type TTextField = ReturnType<typeof TextField>
export type TextField = Static<TTextField>
