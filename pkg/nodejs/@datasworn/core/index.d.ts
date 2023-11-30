/**
 * Describes game rules compatible with the Ironsworn tabletop role-playing game
 * by Shawn Tomkin.
 */
export type RulesPackage = RulesPackageExpansion | RulesPackageRuleset;
/**
 * A Datasworn package that relies on an external package to provide its
 * ruleset.
 */
export interface RulesPackageExpansion {
    package_type: "expansion";
    /**
     * The version of the Datasworn format used by this data.
     */
    datasworn_version: SemanticVersion;
    id: ExpansionId;
    ruleset: RulesetId;
    /**
     * A dictionary object containing asset types, which contain assets.
     */
    assets?: {
        [key: string]: AssetType;
    };
    /**
     * A dictionary object containing atlas collections, which contain atlas
     * entries.
     */
    atlas?: {
        [key: string]: Atlas;
    };
    /**
     * A dictionary object of delve sites, like the premade delve sites presented
     * in Ironsworn: Delve
     */
    delve_sites?: {
        [key: string]: DelveSite;
    };
    /**
     * A dictionary object containing move categories, which contain moves.
     */
    moves?: {
        [key: string]: MoveCategory;
    };
    /**
     * A dictionary object containing NPC collections, which contain NPCs.
     */
    npcs?: {
        [key: string]: NpcCollection;
    };
    /**
     * A dictionary object containing oracle collections, which may contain oracle
     * tables and/or oracle collections.
     */
    oracles?: {
        [key: string]: OracleCollection;
    };
    /**
     * A dictionary object containing rarities, like those presented in Ironsworn:
     * Delve.
     */
    rarities?: {
        [key: string]: Rarity;
    };
    rules?: RulesExpansion;
    /**
     * A dictionary object containing delve site domains.
     */
    site_domains?: {
        [key: string]: DelveSiteDomain;
    };
    /**
     * A dictionary object containing delve site themes.
     */
    site_themes?: {
        [key: string]: DelveSiteTheme;
    };
    /**
     * A dictionary object of truth categories.
     */
    truths?: {
        [key: string]: Truth;
    };
}
/**
 * A standalone Datasworn package that describes its own ruleset.
 */
export interface RulesPackageRuleset {
    package_type: "ruleset";
    /**
     * A dictionary object containing asset types, which contain assets.
     */
    assets: {
        [key: string]: AssetType;
    };
    /**
     * The version of the Datasworn format used by this data.
     */
    datasworn_version: SemanticVersion;
    id: RulesetId;
    /**
     * A dictionary object containing move categories, which contain moves.
     */
    moves: {
        [key: string]: MoveCategory;
    };
    /**
     * A dictionary object containing oracle collections, which may contain oracle
     * tables and/or oracle collections.
     */
    oracles: {
        [key: string]: OracleCollection;
    };
    rules: Rules;
    /**
     * A dictionary object containing atlas collections, which contain atlas
     * entries.
     */
    atlas?: {
        [key: string]: Atlas;
    };
    /**
     * A dictionary object of delve sites, like the premade delve sites presented
     * in Ironsworn: Delve
     */
    delve_sites?: {
        [key: string]: DelveSite;
    };
    /**
     * A dictionary object containing NPC collections, which contain NPCs.
     */
    npcs?: {
        [key: string]: NpcCollection;
    };
    /**
     * A dictionary object containing rarities, like those presented in Ironsworn:
     * Delve.
     */
    rarities?: {
        [key: string]: Rarity;
    };
    /**
     * A dictionary object containing delve site domains.
     */
    site_domains?: {
        [key: string]: DelveSiteDomain;
    };
    /**
     * A dictionary object containing delve site themes.
     */
    site_themes?: {
        [key: string]: DelveSiteTheme;
    };
    /**
     * A dictionary object of truth categories.
     */
    truths?: {
        [key: string]: Truth;
    };
}
export declare enum ActionRollMethod {
    /**
     * Use **every** roll option at once.
     */
    All = "all",
    /**
     * Use the roll option with the best/highest value.
     */
    Highest = "highest",
    /**
     * Use the roll option with the worst/lowest value.
     */
    Lowest = "lowest",
    /**
     * An automatic miss.
     */
    Miss = "miss",
    /**
     * The player chooses which roll option to use.
     */
    PlayerChoice = "player_choice",
    /**
     * An automatic strong hit.
     */
    StrongHit = "strong_hit",
    /**
     * An automatic weak hit.
     */
    WeakHit = "weak_hit"
}
export interface Asset {
    abilities: AssetAbility[];
    /**
     * A localized category label for this asset. This is the surtitle above the
     * asset's name on the card.
     */
    asset_type: Label;
    /**
     * If `true`, this asset counts as an impact (Starforged) or a debility
     * (classic Ironsworn).
     */
    count_as_impact: boolean;
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    /**
     * Most assets only benefit to their owner, but certain assets (like
     * Starforged's module and command vehicle assets) are shared amongst the
     * player's allies, too.
     */
    shared: boolean;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    attachments?: AssetAttachment;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    /**
     * A thematic color associated with this asset.
     */
    color?: CssColor;
    /**
     * Controls are condition meters, clocks, counters, and other asset input
     * fields whose values are expected to change throughout the life of the
     * asset.
     */
    controls?: {
        [key: string]: AssetControlField;
    };
    /**
     * This asset's icon.
     */
    icon?: SvgImageUrl;
    /**
     * Options are input fields set when the player purchases the asset. They're
     * likely to remain the same through the life of the asset. Typically, they
     * are rendered at the top of the asset card.
     */
    options?: {
        [key: string]: AssetOptionField;
    };
    /**
     * Describes prerequisites for purchasing or using this asset.
     */
    requirement?: MarkdownString;
    suggestions?: Suggestions;
}
/**
 * An asset ability: one of the purchasable features of an asset. Most assets
 * have three.
 */
export interface AssetAbility {
    /**
     * Is this asset ability enabled?
     */
    enabled: boolean;
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetAbilityId;
    /**
     * The complete rules text of this asset ability.
     */
    text: MarkdownString;
    /**
     * Fields whose values are expected to change over the life of the asset.
     */
    controls?: {
        [key: string]: AssetAbilityControlField;
    };
    /**
     * Changes made to the asset, when this ability is enabled.
     */
    enhance_asset?: AssetEnhancement;
    /**
     * Describes changes made to various moves by this asset ability. Usually
     * these require specific trigger conditions.
     */
    enhance_moves?: MoveEnhancement[];
    /**
     * Unique moves added by this asset ability.
     */
    moves?: {
        [key: string]: Move;
    };
    /**
     * A handful of asset abilities have a label/name, for instance classic
     * Ironsworn companion assets. Most canonical assets omit this property.
     */
    name?: Label;
    /**
     * Fields that are expected to be set once and remain the same through the
     * life of the asset.
     */
    options?: {
        [key: string]: AssetAbilityOptionField;
    };
}
export type AssetAbilityControlField = AssetAbilityControlFieldCheckbox | AssetAbilityControlFieldClock | AssetAbilityControlFieldCounter;
/**
 * Represents a checkbox.
 */
export interface AssetAbilityControlFieldCheckbox {
    field_type: "checkbox";
    /**
     * Does this field disable the asset when its value is set to `true`?
     */
    disables_asset: boolean;
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetAbilityControlFieldId;
    /**
     * Does this field count as an impact (Starforged) or debility (Ironsworn
     * classic) when its value is set to `true`?
     */
    is_impact: boolean;
    label: InputLabel;
    /**
     * Is the box checked?
     */
    value: boolean;
}
/**
 * A clock with 4 or more segments.
 */
export interface AssetAbilityControlFieldClock {
    field_type: "clock";
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetAbilityControlFieldId;
    label: InputLabel;
    /**
     * The size of the clock -- in other words, the maximum number of filled clock
     * segments. Standard clocks have 4, 6, 8, or 10 segments.
     */
    max: number;
    /**
     * The minimum number of filled clock segments. This is always 0.
     */
    min: number;
    /**
     * The current number of filled clock segments.
     */
    value: number;
}
/**
 * A basic counter representing a non-rollable integer value. They usually start
 * at 0, and may or may not have a maximum.
 */
export interface AssetAbilityControlFieldCounter {
    field_type: "counter";
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetAbilityControlFieldId;
    label: InputLabel;
    max: number;
    /**
     * The (inclusive) minimum value.
     */
    min: number;
    /**
     * The current value of this input.
     */
    value: number;
}
/**
 * A unique ID for an AssetAbilityControlField.
 */
export type AssetAbilityControlFieldId = string;
/**
 * A unique ID for an AssetAbility.
 */
export type AssetAbilityId = string;
export type AssetAbilityOptionField = AssetAbilityOptionFieldText;
/**
 * Represents an input that accepts plain text.
 */
export interface AssetAbilityOptionFieldText {
    field_type: "text";
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetAbilityOptionFieldId;
    label: InputLabel;
    value: string;
}
/**
 * A unique ID for an AssetAbilityOptionField.
 */
export type AssetAbilityOptionFieldId = string;
/**
 * Describes which assets can be attached to this asset. Example: Starforged's
 * Module assets, which can be equipped by Command Vehicle assets. See p. 55 of
 * Starforged for more info.
 */
export interface AssetAttachment {
    /**
     * Asset IDs (which may be wildcards) that may be attached to this asset
     */
    assets: AssetIdWildcard[];
    max: number;
}
/**
 * A checkbox control field, rendered as part of an asset condition meter.
 */
export type AssetConditionMeterControlField = AssetConditionMeterControlFieldCardFlip | AssetConditionMeterControlFieldCheckbox;
/**
 * When its value is set to `true` it means that the card is flipped over.
 * Some assets use this to represent a 'broken' state (e.g. Starforged Module
 * assets).
 */
export interface AssetConditionMeterControlFieldCardFlip {
    field_type: "card_flip";
    /**
     * Does this field disable the asset when its value is set to `true`?
     */
    disables_asset: boolean;
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetConditionMeterControlFieldId;
    /**
     * Does this field count as an impact (Starforged) or debility (Ironsworn
     * classic) when its value is set to `true`?
     */
    is_impact: boolean;
    label: InputLabel;
    /**
     * Is the card flipped over?
     */
    value: boolean;
}
/**
 * Represents a checkbox.
 */
export interface AssetConditionMeterControlFieldCheckbox {
    field_type: "checkbox";
    /**
     * Does this field disable the asset when its value is set to `true`?
     */
    disables_asset: boolean;
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetConditionMeterControlFieldId;
    /**
     * Does this field count as an impact (Starforged) or debility (Ironsworn
     * classic) when its value is set to `true`?
     */
    is_impact: boolean;
    label: InputLabel;
    /**
     * Is the box checked?
     */
    value: boolean;
}
/**
 * A unique ID for an AssetConditionMeterControlField.
 */
export type AssetConditionMeterControlFieldId = string;
export type AssetControlField = AssetControlFieldCardFlip | AssetControlFieldCheckbox | AssetControlFieldConditionMeter | AssetControlFieldSelectEnhancement;
/**
 * When its value is set to `true` it means that the card is flipped over.
 * Some assets use this to represent a 'broken' state (e.g. Starforged Module
 * assets).
 */
export interface AssetControlFieldCardFlip {
    field_type: "card_flip";
    /**
     * Does this field disable the asset when its value is set to `true`?
     */
    disables_asset: boolean;
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetControlFieldId;
    /**
     * Does this field count as an impact (Starforged) or debility (Ironsworn
     * classic) when its value is set to `true`?
     */
    is_impact: boolean;
    label: InputLabel;
    /**
     * Is the card flipped over?
     */
    value: boolean;
}
/**
 * Represents a checkbox.
 */
export interface AssetControlFieldCheckbox {
    field_type: "checkbox";
    /**
     * Does this field disable the asset when its value is set to `true`?
     */
    disables_asset: boolean;
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetControlFieldId;
    /**
     * Does this field count as an impact (Starforged) or debility (Ironsworn
     * classic) when its value is set to `true`?
     */
    is_impact: boolean;
    label: InputLabel;
    /**
     * Is the box checked?
     */
    value: boolean;
}
/**
 * Provides hints for moves that interact with this condition meter, such as
 * suffer and recovery moves.
 */
export interface AssetControlFieldConditionMeterMoves {
    /**
     * The ID(s) of recovery moves associated with this meter.
     */
    recover?: MoveIdWildcard[];
    /**
     * The ID(s) of suffer moves associated with the condition meter. If the
     * suffer move makes an action roll, this condition meter value should be made
     * available as a roll option.
     */
    suffer?: MoveIdWildcard[];
}
/**
 * Some assets provide a special condition meter of their own. The most common
 * example is the health meters on companion assets. Asset condition meters
 * may also include their own controls, such as the checkboxes that Starforged
 * companion assets use to indicate they are "out of action".
 */
export interface AssetControlFieldConditionMeter {
    field_type: "condition_meter";
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetControlFieldId;
    label: InputLabel;
    /**
     * The maximum value of this meter.
     */
    max: number;
    /**
     * The minimum value of this meter.
     */
    min: number;
    /**
     * The current value of this meter.
     */
    value: number;
    /**
     * Checkbox controls rendered as part of the condition meter.
     */
    controls?: {
        [key: string]: AssetConditionMeterControlField;
    };
    /**
     * Provides hints for moves that interact with this condition meter, such as
     * suffer and recovery moves.
     */
    moves?: AssetControlFieldConditionMeterMoves;
}
export type AssetControlFieldSelectEnhancementChoice = AssetControlFieldSelectEnhancementChoiceOption | AssetControlFieldSelectEnhancementChoiceOptionGroup;
/**
 * Represents an option in a list of choices.
 */
export interface AssetControlFieldSelectEnhancementChoiceOption {
    option_type: "option";
    label: InputLabel;
    enhance_asset?: AssetEnhancement;
    enhance_moves?: MoveEnhancement[];
}
export declare enum AssetControlFieldSelectEnhancementChoiceOptionGroupChoiceOptionType {
    Option = "option"
}
/**
 * Represents an option in a list of choices.
 */
export interface AssetControlFieldSelectEnhancementChoiceOptionGroupChoice {
    label: InputLabel;
    option_type: AssetControlFieldSelectEnhancementChoiceOptionGroupChoiceOptionType;
    enhance_asset?: AssetEnhancement;
    enhance_moves?: MoveEnhancement[];
}
/**
 * Represents a grouping of options in a list of choices.
 */
export interface AssetControlFieldSelectEnhancementChoiceOptionGroup {
    option_type: "option_group";
    choices: {
        [key: string]: AssetControlFieldSelectEnhancementChoiceOptionGroupChoice;
    };
    /**
     * A label for this option group.
     */
    name: Label;
}
/**
 * Select from player and/or asset enhancements. Use it to describe modal
 * abilities. For examples, see Ironclad (classic Ironsworn) and Windbinder
 * (Sundered Isles).
 */
export interface AssetControlFieldSelectEnhancement {
    field_type: "select_enhancement";
    choices: {
        [key: string]: AssetControlFieldSelectEnhancementChoice;
    };
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetControlFieldId;
    label: InputLabel;
    /**
     * The key of the currently selected choice from the `choices` property, or
     * `null` if none is selected.
     */
    value: DictKey;
}
export type AssetControlFieldEnhancement = AssetControlFieldEnhancementConditionMeter;
/**
 * Some assets provide a special condition meter of their own. The most common
 * example is the health meters on companion assets. Asset condition meters
 * may also include their own controls, such as the checkboxes that Starforged
 * companion assets use to indicate they are "out of action".
 */
export interface AssetControlFieldEnhancementConditionMeter {
    field_type: "condition_meter";
    /**
     * The maximum value of this meter.
     */
    max: number;
}
/**
 * A unique ID for an AssetControlField.
 */
export type AssetControlFieldId = string;
/**
 * A wildcarded ID that can be used to match multiple AssetControlFields.
 */
export type AssetControlFieldIdWildcard = string;
/**
 * Describes enhancements made to this asset in a partial asset object. The
 * changes should be applied recursively; only the values that are specified
 * should be changed.
 */
export interface AssetEnhancement {
    attachments?: AssetAttachment;
    /**
     * Controls are condition meters, clocks, counters, and other asset input
     * fields whose values are expected to change throughout the life of the
     * asset.
     */
    controls?: {
        [key: string]: AssetControlFieldEnhancement;
    };
    /**
     * If `true`, this asset counts as an impact (Starforged) or a debility
     * (classic Ironsworn).
     */
    count_as_impact?: boolean;
    /**
     * Most assets only benefit to their owner, but certain assets (like
     * Starforged's module and command vehicle assets) are shared amongst the
     * player's allies, too.
     */
    shared?: boolean;
    suggestions?: Suggestions;
}
/**
 * A unique ID for an Asset.
 */
export type AssetId = string;
/**
 * A wildcarded ID that can be used to match multiple Assets.
 */
export type AssetIdWildcard = string;
/**
 * Options are asset input fields which are set once, usually when the character
 * takes the asset. The most common example is the "name" field on companion
 * assets. A more complex example is the choice of a god's stat for the Devotant
 * asset.
 */
export type AssetOptionField = AssetOptionFieldSelectEnhancement | AssetOptionFieldSelectValue | AssetOptionFieldText;
export type AssetOptionFieldSelectEnhancementChoice = AssetOptionFieldSelectEnhancementChoiceOption | AssetOptionFieldSelectEnhancementChoiceOptionGroup;
/**
 * Represents an option in a list of choices.
 */
export interface AssetOptionFieldSelectEnhancementChoiceOption {
    option_type: "option";
    label: InputLabel;
    enhance_asset?: AssetEnhancement;
    enhance_moves?: MoveEnhancement[];
}
export declare enum AssetOptionFieldSelectEnhancementChoiceOptionGroupChoiceOptionType {
    Option = "option"
}
/**
 * Represents an option in a list of choices.
 */
export interface AssetOptionFieldSelectEnhancementChoiceOptionGroupChoice {
    label: InputLabel;
    option_type: AssetOptionFieldSelectEnhancementChoiceOptionGroupChoiceOptionType;
    enhance_asset?: AssetEnhancement;
    enhance_moves?: MoveEnhancement[];
}
/**
 * Represents a grouping of options in a list of choices.
 */
export interface AssetOptionFieldSelectEnhancementChoiceOptionGroup {
    option_type: "option_group";
    choices: {
        [key: string]: AssetOptionFieldSelectEnhancementChoiceOptionGroupChoice;
    };
    /**
     * A label for this option group.
     */
    name: Label;
}
/**
 * Select from player and/or asset enhancements. Use it to describe modal
 * abilities. For examples, see Ironclad (classic Ironsworn) and Windbinder
 * (Sundered Isles).
 */
export interface AssetOptionFieldSelectEnhancement {
    field_type: "select_enhancement";
    choices: {
        [key: string]: AssetOptionFieldSelectEnhancementChoice;
    };
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetOptionFieldId;
    label: InputLabel;
    /**
     * The key of the currently selected choice from the `choices` property, or
     * `null` if none is selected.
     */
    value: DictKey;
}
export type AssetOptionFieldSelectValueChoice = AssetOptionFieldSelectValueChoiceAssetControl | AssetOptionFieldSelectValueChoiceAssetOption | AssetOptionFieldSelectValueChoiceAttachedAssetControl | AssetOptionFieldSelectValueChoiceAttachedAssetOption | AssetOptionFieldSelectValueChoiceConditionMeter | AssetOptionFieldSelectValueChoiceCustom | AssetOptionFieldSelectValueChoiceStat;
export declare enum AssetOptionFieldSelectValueChoiceAssetControlOptionType {
    Option = "option"
}
/**
 * Represents an option in a list of choices.
 */
export interface AssetOptionFieldSelectValueChoiceAssetControl {
    using: "asset_control";
    assets: AssetIdWildcard[];
    /**
     * The dictionary key of the asset control field.
     */
    control: DictKey;
    label: InputLabel;
    option_type: AssetOptionFieldSelectValueChoiceAssetControlOptionType;
}
export declare enum AssetOptionFieldSelectValueChoiceAssetOptionOptionType {
    Option = "option"
}
/**
 * Represents an option in a list of choices.
 */
export interface AssetOptionFieldSelectValueChoiceAssetOption {
    using: "asset_option";
    assets: AssetIdWildcard[];
    label: InputLabel;
    /**
     * The dictionary key of the asset option field.
     */
    option: DictKey;
    option_type: AssetOptionFieldSelectValueChoiceAssetOptionOptionType;
}
export declare enum AssetOptionFieldSelectValueChoiceAttachedAssetControlOptionType {
    Option = "option"
}
/**
 * Represents an option in a list of choices.
 */
export interface AssetOptionFieldSelectValueChoiceAttachedAssetControl {
    using: "attached_asset_control";
    /**
     * The dictionary key of the asset control field.
     */
    control: DictKey;
    label: InputLabel;
    option_type: AssetOptionFieldSelectValueChoiceAttachedAssetControlOptionType;
}
export declare enum AssetOptionFieldSelectValueChoiceAttachedAssetOptionOptionType {
    Option = "option"
}
/**
 * Represents an option in a list of choices.
 */
export interface AssetOptionFieldSelectValueChoiceAttachedAssetOption {
    using: "attached_asset_option";
    label: InputLabel;
    /**
     * The dictionary key of the asset option field.
     */
    option: DictKey;
    option_type: AssetOptionFieldSelectValueChoiceAttachedAssetOptionOptionType;
}
export declare enum AssetOptionFieldSelectValueChoiceConditionMeterOptionType {
    Option = "option"
}
/**
 * Represents an option in a list of choices.
 */
export interface AssetOptionFieldSelectValueChoiceConditionMeter {
    using: "condition_meter";
    condition_meter: ConditionMeterKey;
    label: InputLabel;
    option_type: AssetOptionFieldSelectValueChoiceConditionMeterOptionType;
}
export declare enum AssetOptionFieldSelectValueChoiceCustomOptionType {
    Option = "option"
}
/**
 * Represents an option in a list of choices.
 */
export interface AssetOptionFieldSelectValueChoiceCustom {
    using: "custom";
    label: InputLabel;
    option_type: AssetOptionFieldSelectValueChoiceCustomOptionType;
    value: number;
}
export declare enum AssetOptionFieldSelectValueChoiceStatOptionType {
    Option = "option"
}
/**
 * Represents an option in a list of choices.
 */
export interface AssetOptionFieldSelectValueChoiceStat {
    using: "stat";
    label: InputLabel;
    option_type: AssetOptionFieldSelectValueChoiceStatOptionType;
    stat: StatKey;
}
/**
 * Represents a list of mutually exclusive choices.
 */
export interface AssetOptionFieldSelectValue {
    field_type: "select_value";
    choices: {
        [key: string]: AssetOptionFieldSelectValueChoice;
    };
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetOptionFieldId;
    label: InputLabel;
    /**
     * The key of the currently selected choice from the `choices` property, or
     * `null` if none is selected.
     */
    value: DictKey;
}
/**
 * Represents an input that accepts plain text.
 */
export interface AssetOptionFieldText {
    field_type: "text";
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetOptionFieldId;
    label: InputLabel;
    value: string;
}
/**
 * A unique ID for an AssetOptionField.
 */
export type AssetOptionFieldId = string;
/**
 * A wildcarded ID that can be used to match multiple AssetOptionFields.
 */
export type AssetOptionFieldIdWildcard = string;
export interface AssetType {
    /**
     * The unique Datasworn ID for this item.
     */
    id: AssetTypeId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    /**
     * A thematic color associated with this collection.
     */
    color?: CssColor;
    contents?: {
        [key: string]: Asset;
    };
    /**
     * A longer description of this collection, which might include multiple
     * paragraphs. If it's only a couple sentences, use the `summary` key instead.
     */
    description?: MarkdownString;
    /**
     * This collection's content enhances the identified collection, rather than
     * being a standalone collection of its own.
     */
    enhances?: AssetTypeId;
    /**
     * An SVG icon associated with this collection.
     */
    icon?: SvgImageUrl;
    images?: WebpImageUrl[];
    /**
     * This collection replaces the identified collection. References to the
     * replaced collection can be considered equivalent to this collection.
     */
    replaces?: AssetTypeId;
    suggestions?: Suggestions;
    /**
     * A brief summary of this collection, no more than a few sentences in length.
     * This is intended for use in application tooltips and similar sorts of
     * hints. Longer text should use the "description" key instead.
     */
    summary?: MarkdownString;
}
/**
 * A unique ID for an AssetType.
 */
export type AssetTypeId = string;
export interface Atlas {
    /**
     * The unique Datasworn ID for this item.
     */
    id: AtlasId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    collections?: {
        [key: string]: Atlas;
    };
    /**
     * A thematic color associated with this collection.
     */
    color?: CssColor;
    contents?: {
        [key: string]: AtlasEntry;
    };
    /**
     * A longer description of this collection, which might include multiple
     * paragraphs. If it's only a couple sentences, use the `summary` key instead.
     */
    description?: MarkdownString;
    /**
     * This collection's content enhances the identified collection, rather than
     * being a standalone collection of its own.
     */
    enhances?: AtlasId;
    /**
     * An SVG icon associated with this collection.
     */
    icon?: SvgImageUrl;
    images?: WebpImageUrl[];
    /**
     * This collection replaces the identified collection. References to the
     * replaced collection can be considered equivalent to this collection.
     */
    replaces?: AtlasId;
    suggestions?: Suggestions;
    /**
     * A brief summary of this collection, no more than a few sentences in length.
     * This is intended for use in application tooltips and similar sorts of
     * hints. Longer text should use the "description" key instead.
     */
    summary?: MarkdownString;
}
/**
 * An atlas entry, like the Ironlands region entries found in classic Ironsworn.
 */
export interface AtlasEntry {
    description: MarkdownString;
    features: MarkdownString[];
    /**
     * The unique Datasworn ID for this item.
     */
    id: AtlasEntryId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    quest_starter: MarkdownString;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    suggestions?: Suggestions;
    summary?: MarkdownString;
    your_truth?: MarkdownString;
}
/**
 * A unique ID for an AtlasEntry.
 */
export type AtlasEntryId = string;
/**
 * A wildcarded ID that can be used to match multiple AtlasEntrys.
 */
export type AtlasEntryIdWildcard = string;
/**
 * A unique ID for an Atlas.
 */
export type AtlasId = string;
/**
 * A wildcarded ID that can be used to match multiple Atlass.
 */
export type AtlasIdWildcard = string;
/**
 * Challenge rank, represented as an integer from 1 (troublesome) to 5 (epic).
 */
export type ChallengeRank = number;
/**
 * A basic, rollable player character resource specified by the ruleset.
 */
export type ConditionMeterKey = DictKey;
/**
 * Describes a standard player character condition meter.
 */
export interface ConditionMeterRule {
    /**
     * A description of this condition meter.
     */
    description: MarkdownString;
    label: InputLabel;
    /**
     * The maximum value of this meter.
     */
    max: number;
    /**
     * The minimum value of this meter.
     */
    min: number;
    /**
     * Is this condition meter shared by all players?
     */
    shared: boolean;
    /**
     * The current value of this meter.
     */
    value: number;
}
/**
 * A unique ID for a ConditionMeterRule.
 */
export type ConditionMeterRuleId = string;
/**
 * A CSS color value. See: https://developer.mozilla.org/en-
 * US/docs/Web/CSS/color_value
 */
export type CssColor = string;
/**
 * A delve site with a theme, domain, and denizens.
 */
export interface DelveSite {
    denizens: DelveSiteDenizen[];
    description: MarkdownString;
    domain: DelveSiteDomainId;
    /**
     * The unique Datasworn ID for this item.
     */
    id: DelveSiteId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    rank: ChallengeRank;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    theme: DelveSiteThemeId;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    /**
     * An additional theme or domain card ID, for use with optional rules in
     * Ironsworn: Delve.
     */
    extra_card?: string;
    icon?: SvgImageUrl;
    /**
     * The ID of an atlas entry representing the region in which this delve site
     * is located.
     */
    region?: AtlasEntryId;
    suggestions?: Suggestions;
}
export interface DelveSiteDenizen {
    frequency: DelveSiteDenizenFrequency;
    /**
     * The unique Datasworn ID for this item.
     */
    id: DelveSiteDenizenId;
    max: number;
    min: number;
    name?: Label;
    /**
     * The ID of the relevant NPC entry, if one is specified.
     */
    npc?: NpcId;
}
export declare enum DelveSiteDenizenFrequency {
    Common = "common",
    Rare = "rare",
    Uncommon = "uncommon",
    Unforeseen = "unforeseen",
    VeryCommon = "very_common"
}
/**
 * A unique ID for a DelveSiteDenizen.
 */
export type DelveSiteDenizenId = string;
/**
 * A delve site Domain card.
 */
export interface DelveSiteDomain {
    dangers: DelveSiteDomainDangerRow[];
    features: DelveSiteDomainFeatureRow[];
    /**
     * The unique Datasworn ID for this item.
     */
    id: DelveSiteDomainId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    summary: MarkdownString;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    description?: MarkdownString;
    icon?: SvgImageUrl;
    /**
     * An oracle table ID containing place name elements. For examples, see
     * oracle ID `delve/oracles/site_name/place/barrow`, and its siblings in
     * oracle collection ID `delve/collections/oracles/site_name/place`. These
     * oracles are used by the site name oracle from Ironsworn: Delve (ID:
     * delve/oracles/site_name/format) to create random names for delve sites.
     */
    name_oracle?: OracleTableId;
    suggestions?: Suggestions;
}
/**
 * Represents a single Danger entry from a delve site Domain card.
 */
export interface DelveSiteDomainDangerRow {
    /**
     * The unique Datasworn ID for this item.
     */
    id: DomainDangerRowId;
    /**
     * High end of the dice range for this table row.
     */
    max: number;
    /**
     * Low end of the dice range for this table row.
     */
    min: number;
    /**
     * The primary text content of this row.
     */
    result: MarkdownString;
    /**
     * Optional tertiary text content for this row. Generally, this is longer than
     * both `result` and `summary`.
     */
    description?: MarkdownString;
    /**
     * Hints that the identified table should be rendered inside this table row.
     */
    embed_table?: OracleTableId;
    i18n?: I18nHints;
    icon?: SvgImageUrl;
    /**
     * Further oracle rolls prompted by this table row.
     */
    rolls?: OracleTableRoll[];
    suggestions?: Suggestions;
    /**
     * Optional secondary text content for this row. Generally, this is longer
     * than `result`.
     */
    summary?: MarkdownString;
    template?: OracleRollTemplate;
}
/**
 * Represents a single Feature entry from a delve site Domain card.
 */
export interface DelveSiteDomainFeatureRow {
    /**
     * The unique Datasworn ID for this item.
     */
    id: DomainFeatureRowId;
    /**
     * High end of the dice range for this table row.
     */
    max: number;
    /**
     * Low end of the dice range for this table row.
     */
    min: number;
    /**
     * The primary text content of this row.
     */
    result: MarkdownString;
    /**
     * Optional tertiary text content for this row. Generally, this is longer than
     * both `result` and `summary`.
     */
    description?: MarkdownString;
    /**
     * Hints that the identified table should be rendered inside this table row.
     */
    embed_table?: OracleTableId;
    i18n?: I18nHints;
    icon?: SvgImageUrl;
    /**
     * Further oracle rolls prompted by this table row.
     */
    rolls?: OracleTableRoll[];
    suggestions?: Suggestions;
    /**
     * Optional secondary text content for this row. Generally, this is longer
     * than `result`.
     */
    summary?: MarkdownString;
    template?: OracleRollTemplate;
}
/**
 * A unique ID for a DelveSiteDomain.
 */
export type DelveSiteDomainId = string;
/**
 * A unique ID for a DelveSite.
 */
export type DelveSiteId = string;
/**
 * A delve site theme card.
 */
export interface DelveSiteTheme {
    dangers: DelveSiteThemeDangerRow[];
    features: DelveSiteThemeFeatureRow[];
    /**
     * The unique Datasworn ID for this item.
     */
    id: DelveSiteThemeId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    summary: MarkdownString;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    description?: MarkdownString;
    icon?: SvgImageUrl;
    suggestions?: Suggestions;
}
/**
 * Represents a single Danger entry from a delve site Theme card.
 */
export interface DelveSiteThemeDangerRow {
    /**
     * The unique Datasworn ID for this item.
     */
    id: ThemeDangerRowId;
    /**
     * High end of the dice range for this table row.
     */
    max: number;
    /**
     * Low end of the dice range for this table row.
     */
    min: number;
    /**
     * The primary text content of this row.
     */
    result: MarkdownString;
    /**
     * Optional tertiary text content for this row. Generally, this is longer than
     * both `result` and `summary`.
     */
    description?: MarkdownString;
    /**
     * Hints that the identified table should be rendered inside this table row.
     */
    embed_table?: OracleTableId;
    i18n?: I18nHints;
    icon?: SvgImageUrl;
    /**
     * Further oracle rolls prompted by this table row.
     */
    rolls?: OracleTableRoll[];
    suggestions?: Suggestions;
    /**
     * Optional secondary text content for this row. Generally, this is longer
     * than `result`.
     */
    summary?: MarkdownString;
    template?: OracleRollTemplate;
}
/**
 * Represents a single Feature entry from a delve site Theme card.
 */
export interface DelveSiteThemeFeatureRow {
    /**
     * The unique Datasworn ID for this item.
     */
    id: ThemeFeatureRowId;
    /**
     * High end of the dice range for this table row.
     */
    max: number;
    /**
     * Low end of the dice range for this table row.
     */
    min: number;
    /**
     * The primary text content of this row.
     */
    result: MarkdownString;
    /**
     * Optional tertiary text content for this row. Generally, this is longer than
     * both `result` and `summary`.
     */
    description?: MarkdownString;
    /**
     * Hints that the identified table should be rendered inside this table row.
     */
    embed_table?: OracleTableId;
    i18n?: I18nHints;
    icon?: SvgImageUrl;
    /**
     * Further oracle rolls prompted by this table row.
     */
    rolls?: OracleTableRoll[];
    suggestions?: Suggestions;
    /**
     * Optional secondary text content for this row. Generally, this is longer
     * than `result`.
     */
    summary?: MarkdownString;
    template?: OracleRollTemplate;
}
/**
 * A unique ID for a DelveSiteTheme.
 */
export type DelveSiteThemeId = string;
/**
 * A simple dice roll expression with an optional modifer.
 */
export type DiceExpression = string;
/**
 * A key used in a Datasworn dictionary object.
 */
export type DictKey = string;
/**
 * A unique ID for a DomainDangerRow.
 */
export type DomainDangerRowId = string;
/**
 * A unique ID for a DomainFeatureRow.
 */
export type DomainFeatureRowId = string;
/**
 * The ID of a Datasworn package that relies on an external package to provide
 * its ruleset.
 */
export type ExpansionId = string;
export interface I18nHint {
    part_of_speech?: PartOfSpeech;
}
export interface I18nHintsTemplate {
    description?: I18nHint;
    result?: I18nHint;
    summary?: I18nHint;
}
/**
 * Internationalization/localization hints for the text content of this object.
 */
export interface I18nHints {
    description?: I18nHint;
    result?: I18nHint;
    summary?: I18nHint;
    template?: I18nHintsTemplate;
}
/**
 * Describes a category of standard impacts/debilities.
 */
export interface ImpactCategory {
    /**
     * A dictionary object of the Impacts in this category.
     */
    contents: {
        [key: string]: ImpactRule;
    };
    /**
     * A description of this impact category.
     */
    description: MarkdownString;
    /**
     * A label for this impact category.
     */
    label: Label;
}
/**
 * Describes a standard impact/debility.
 */
export interface ImpactRule {
    /**
     * A description of this impact.
     */
    description: MarkdownString;
    /**
     * The label for this impact.
     */
    label: Label;
    /**
     * Is this impact permanent?
     */
    permanent: boolean;
    /**
     * Any ruleset condition meters that can't recover when this impact is active.
     */
    prevents_recovery: ConditionMeterKey[];
    /**
     * Is this impact applied to all players at once?
     */
    shared: boolean;
}
/**
 * A unique ID for an ImpactRuleCollection.
 */
export type ImpactRuleCollectionId = string;
/**
 * A unique ID for an ImpactRule.
 */
export type ImpactRuleId = string;
/**
 * A localized label for an input. In some contexts it may be undesirable to
 * render this text, but it should always be exposed to assistive technology
 * (e.g. with `aria-label` in HTML).
 */
export type InputLabel = string;
/**
 * A localized plain text name or label.
 */
export type Label = string;
/**
 * Localized text, formatted in Markdown.
 *
 * It uses some custom syntax; e.g. `{{table:some_oracle_table_id}}` indicates
 * that the referenced oracle table is rendered there part of the source
 * material.
 */
export type MarkdownString = string;
export type Move = MoveActionRoll | MoveNoRoll | MoveProgressRoll | MoveSpecialTrack;
/**
 * A move that makes an action roll.
 */
export interface MoveActionRoll {
    roll_type: "action_roll";
    /**
     * The unique Datasworn ID for this item.
     */
    id: MoveId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    outcomes: MoveOutcomes;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    /**
     * The complete rules text of the move.
     */
    text: MarkdownString;
    /**
     * Trigger conditions for this move.
     */
    trigger: TriggerActionRoll;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    /**
     * Oracles associated with this move. It's not recommended to roll these
     * automatically, as almost all moves present them as an option, not a
     * requirement.
     */
    oracles?: OracleTableId[];
    /**
     * Indicates that this move replaces the identified move. References to the
     * replaced move can be considered equivalent to this move.
     */
    replaces?: MoveId;
    suggestions?: Suggestions;
}
/**
 * A move that makes no progress rolls or action rolls.
 */
export interface MoveNoRoll {
    roll_type: "no_roll";
    /**
     * The unique Datasworn ID for this item.
     */
    id: MoveId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    /**
     * The complete rules text of the move.
     */
    text: MarkdownString;
    /**
     * Trigger conditions for this move.
     */
    trigger: TriggerNoRoll;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    /**
     * Oracles associated with this move. It's not recommended to roll these
     * automatically, as almost all moves present them as an option, not a
     * requirement.
     */
    oracles?: OracleTableId[];
    /**
     * Indicates that this move replaces the identified move. References to the
     * replaced move can be considered equivalent to this move.
     */
    replaces?: MoveId;
    suggestions?: Suggestions;
}
/**
 * A progress move that rolls on a standard progress track type (whose features
 * are defined by this move object). For progress rolls that use special tracks,
 * see MoveSpecialTrack.
 */
export interface MoveProgressRoll {
    roll_type: "progress_roll";
    /**
     * The unique Datasworn ID for this item.
     */
    id: MoveId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    outcomes: MoveOutcomes;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    /**
     * The complete rules text of the move.
     */
    text: MarkdownString;
    /**
     * Describes the common features of progress tracks associated with this move.
     */
    tracks: ProgressTrackTypeInfo;
    /**
     * Trigger conditions for this move.
     */
    trigger: TriggerProgressRoll;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    /**
     * Oracles associated with this move. It's not recommended to roll these
     * automatically, as almost all moves present them as an option, not a
     * requirement.
     */
    oracles?: OracleTableId[];
    /**
     * Indicates that this move replaces the identified move. References to the
     * replaced move can be considered equivalent to this move.
     */
    replaces?: MoveId;
    suggestions?: Suggestions;
}
/**
 * A progress move that rolls on a special track, such as Legacies (Starforged)
 * or Bonds (classic Ironsworn). For progress moves that use standard progress
 * tracks, see MoveProgressRoll instead.
 */
export interface MoveSpecialTrack {
    roll_type: "special_track";
    /**
     * The unique Datasworn ID for this item.
     */
    id: MoveId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    outcomes: MoveOutcomes;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    /**
     * The complete rules text of the move.
     */
    text: MarkdownString;
    /**
     * Trigger conditions for this move.
     */
    trigger: TriggerSpecialTrack;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    /**
     * Oracles associated with this move. It's not recommended to roll these
     * automatically, as almost all moves present them as an option, not a
     * requirement.
     */
    oracles?: OracleTableId[];
    /**
     * Indicates that this move replaces the identified move. References to the
     * replaced move can be considered equivalent to this move.
     */
    replaces?: MoveId;
    suggestions?: Suggestions;
}
export interface MoveCategory {
    /**
     * The unique Datasworn ID for this item.
     */
    id: MoveCategoryId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    /**
     * A thematic color associated with this collection.
     */
    color?: CssColor;
    contents?: {
        [key: string]: Move;
    };
    /**
     * A longer description of this collection, which might include multiple
     * paragraphs. If it's only a couple sentences, use the `summary` key instead.
     */
    description?: MarkdownString;
    /**
     * This collection's content enhances the identified collection, rather than
     * being a standalone collection of its own.
     */
    enhances?: MoveCategoryId;
    /**
     * An SVG icon associated with this collection.
     */
    icon?: SvgImageUrl;
    images?: WebpImageUrl[];
    /**
     * This collection replaces the identified collection. References to the
     * replaced collection can be considered equivalent to this collection.
     */
    replaces?: MoveCategoryId;
    suggestions?: Suggestions;
    /**
     * A brief summary of this collection, no more than a few sentences in length.
     * This is intended for use in application tooltips and similar sorts of
     * hints. Longer text should use the "description" key instead.
     */
    summary?: MarkdownString;
}
/**
 * A unique ID for a MoveCategory.
 */
export type MoveCategoryId = string;
export type MoveEnhancement = MoveEnhancementActionRoll | MoveEnhancementNoRoll | MoveEnhancementProgressRoll | MoveEnhancementSpecialTrack;
/**
 * An object that describes changes to a move. These changes should be applied
 * recursively, altering only the specified properties; enhanced arrays should
 * be concatencated with the original array value.
 */
export interface MoveEnhancementActionRoll {
    roll_type: "action_roll";
    enhances: MoveIdWildcard[];
    trigger?: TriggerActionRollEnhancement;
}
/**
 * An object that describes changes to a move. These changes should be applied
 * recursively, altering only the specified properties; enhanced arrays should
 * be concatencated with the original array value.
 */
export interface MoveEnhancementNoRoll {
    roll_type: "no_roll";
    enhances: MoveIdWildcard[];
    trigger?: TriggerNoRollEnhancement;
}
/**
 * An object that describes changes to a move. These changes should be applied
 * recursively, altering only the specified properties; enhanced arrays should
 * be concatencated with the original array value.
 */
export interface MoveEnhancementProgressRoll {
    roll_type: "progress_roll";
    enhances: MoveIdWildcard[];
    trigger?: TriggerProgressRollEnhancement;
}
/**
 * An object that describes changes to a move. These changes should be applied
 * recursively, altering only the specified properties; enhanced arrays should
 * be concatencated with the original array value.
 */
export interface MoveEnhancementSpecialTrack {
    roll_type: "special_track";
    enhances: MoveIdWildcard[];
    trigger?: TriggerSpecialTrackEnhancement;
}
/**
 * A move ID, for a standard move or a unique asset move
 */
export type MoveId = string;
/**
 * A move ID with wildcards.
 */
export type MoveIdWildcard = string;
export interface MoveOutcome {
    text: MarkdownString;
}
export declare enum MoveOutcomeType {
    /**
     * The score doesn't beat either challenge die.
     */
    Miss = "miss",
    /**
     * The score is greater than both challenge dice.
     */
    StrongHit = "strong_hit",
    /**
     * The score is greater than one challenge die.
     */
    WeakHit = "weak_hit"
}
/**
 * A standalone localized description for each move outcome (miss, weak hit,
 * or strong hit). This is for for e.g. VTT implementations, where it's often
 * useful to display only the rules text relevant to a roll result.
 *
 *   This often requires light editorialization to create text that can stand
 * alone without reference to the rest of the move. For example, 'as above'
 * (in reference to another move outcome) shouldn't be used here; instead, the
 * relevant text should be repeated.
 */
export interface MoveOutcomes {
    miss: MoveOutcome;
    strong_hit: MoveOutcome;
    weak_hit: MoveOutcome;
}
export declare enum MoveRollType {
    /**
     * A move that makes an action roll.
     */
    ActionRoll = "action_roll",
    /**
     * A move that makes no action rolls or progress rolls.
     */
    NoRoll = "no_roll",
    /**
     * A progress move that rolls on a standard progress track type (defined by
     * this move).
     */
    ProgressRoll = "progress_roll",
    /**
     * A progress move that rolls on one or more special tracks, like Bonds
     * (classic Ironsworn), Failure (Delve), or Legacies (Starforged).
     */
    SpecialTrack = "special_track"
}
/**
 * A non-player character entry, similar to those in Chapter 5 of the Ironsworn
 * Rulebook, or Chapter 4 of Starforged.
 */
export interface Npc {
    description: MarkdownString;
    drives: MarkdownString[];
    features: MarkdownString[];
    /**
     * The unique Datasworn ID for this item.
     */
    id: NpcId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    nature: NpcNature;
    quest_starter: MarkdownString;
    /**
     * The suggested challenge rank for this NPC.
     */
    rank: ChallengeRank;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    tactics: MarkdownString[];
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    suggestions?: Suggestions;
    summary?: MarkdownString;
    variants?: {
        [key: string]: NpcVariant;
    };
    your_truth?: MarkdownString;
}
export interface NpcCollection {
    /**
     * The unique Datasworn ID for this item.
     */
    id: NpcCollectionId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    /**
     * A thematic color associated with this collection.
     */
    color?: CssColor;
    contents?: {
        [key: string]: Npc;
    };
    /**
     * A longer description of this collection, which might include multiple
     * paragraphs. If it's only a couple sentences, use the `summary` key instead.
     */
    description?: MarkdownString;
    /**
     * This collection's content enhances the identified collection, rather than
     * being a standalone collection of its own.
     */
    enhances?: NpcCollectionId;
    /**
     * An SVG icon associated with this collection.
     */
    icon?: SvgImageUrl;
    images?: WebpImageUrl[];
    /**
     * This collection replaces the identified collection. References to the
     * replaced collection can be considered equivalent to this collection.
     */
    replaces?: NpcCollectionId;
    suggestions?: Suggestions;
    /**
     * A brief summary of this collection, no more than a few sentences in length.
     * This is intended for use in application tooltips and similar sorts of
     * hints. Longer text should use the "description" key instead.
     */
    summary?: MarkdownString;
}
/**
 * A unique ID for a NpcCollection.
 */
export type NpcCollectionId = string;
/**
 * A unique ID for a Npc.
 */
export type NpcId = string;
/**
 * A wildcarded ID that can be used to match multiple Npcs.
 */
export type NpcIdWildcard = string;
/**
 * A localized category label describing the nature of this NPC.
 *
 * In Ironsworn classic, this is probably the singular form of the parent
 * collection's name.
 *
 * For Starforged, see the table on p. 258 for examples.
 */
export type NpcNature = Label;
export interface NpcVariant {
    description: MarkdownString;
    /**
     * The unique Datasworn ID for this item.
     */
    id: NpcVariantId;
    name: Label;
    nature: NpcNature;
    /**
     * The suggested challenge rank for this NPC.
     */
    rank: ChallengeRank;
    summary?: MarkdownString;
}
/**
 * A unique ID for a NpcVariant.
 */
export type NpcVariantId = string;
export interface OracleCollection {
    /**
     * The unique Datasworn ID for this item.
     */
    id: OracleCollectionId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    collections?: {
        [key: string]: OracleCollection;
    };
    /**
     * A thematic color associated with this collection.
     */
    color?: CssColor;
    contents?: {
        [key: string]: OracleTable;
    };
    /**
     * A longer description of this collection, which might include multiple
     * paragraphs. If it's only a couple sentences, use the `summary` key instead.
     */
    description?: MarkdownString;
    /**
     * This collection's content enhances the identified collection, rather than
     * being a standalone collection of its own.
     */
    enhances?: OracleCollectionId;
    /**
     * An SVG icon associated with this collection.
     */
    icon?: SvgImageUrl;
    images?: WebpImageUrl[];
    rendering?: OracleCollectionRendering;
    /**
     * This collection replaces the identified collection. References to the
     * replaced collection can be considered equivalent to this collection.
     */
    replaces?: OracleCollectionId;
    suggestions?: Suggestions;
    /**
     * A brief summary of this collection, no more than a few sentences in length.
     * This is intended for use in application tooltips and similar sorts of
     * hints. Longer text should use the "description" key instead.
     */
    summary?: MarkdownString;
}
/**
 * A unique ID for an OracleCollection.
 */
export type OracleCollectionId = string;
/**
 * Describes the presentation of this oracle collection, which might represent a
 * group of separate tables, or a single table with additional columns.
 */
export type OracleCollectionRendering = OracleCollectionRenderingMultiTable | OracleCollectionRenderingTables;
export interface OracleCollectionRenderingMultiTable {
    style: "multi_table";
    columns: {
        [key: string]: OracleCollectionTableColumn;
    };
}
export interface OracleCollectionRenderingTables {
    style: "tables";
}
export declare enum OracleCollectionStyle {
    /**
     * Presented as a single table, with its OracleTable children rendered as
     * columns.
     */
    MultiTable = "multi_table",
    /**
     * Presented as a collection of separate tables.
     */
    Tables = "tables"
}
export interface OracleCollectionTableColumn {
    content_type: OracleTableColumnContentKey;
    /**
     * The column's header text.
     */
    label: Label;
    /**
     * The key of the OracleTable (within this collection), whose data is used to
     * render this column.
     */
    table_key: DictKey;
    /**
     * The thematic color for this column.
     */
    color?: CssColor;
}
/**
 * Provides string templates that may be used in place of the static
 * row text from `OracleTableRow#result`, `OracleTableRow#summary`, and
 * `OracleTableRow#description`.
 *
 *   These strings are formatted in Markdown, but use a special syntax for their
 * placeholders: `{{result:some_oracle_table_id}}`. The placeholder should be
 * replaced with the value of a rolled (or selected) `OracleTableRow#result`
 * from the target oracle table ID.
 */
export interface OracleRollTemplate {
    /**
     * A string template that may be used in place of OracleTableRow#description.
     */
    description?: TemplateString;
    /**
     * A string template that may be used in place of OracleTableRow#result.
     */
    result?: TemplateString;
    /**
     * A string template that may be used in place of OracleTableRow#summary.
     */
    summary?: TemplateString;
}
/**
 * Represents a single oracle table, or a single table column of a table that
 * has multiple "Roll" or "Result" columns.
 */
export interface OracleTable {
    /**
     * The roll used to select a result on this table.
     */
    dice: DiceExpression;
    /**
     * The unique Datasworn ID for this item.
     */
    id: OracleTableId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    table: OracleTableRow[];
    _i18n?: I18nHints;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    /**
     * A longer description of the oracle table's intended usage, which might
     * include multiple paragraphs. If it's only a couple sentences, use the
     * `summary` key instead.
     */
    description?: MarkdownString;
    /**
     * An icon that represents this table.
     */
    icon?: SvgImageUrl;
    images?: WebpImageUrl[];
    /**
     * Most oracle tables are insensitive to matches, but a few define special
     * match behavior.
     */
    match?: OracleTableMatchBehavior;
    /**
     * Describes how how to render this table, when presenting it as a standalone
     * table.
     */
    rendering?: OracleTableRendering;
    /**
     * Indicates that this table replaces the identified table. References to the
     * replaced table can be considered equivalent to this table.
     */
    replaces?: OracleTableId;
    suggestions?: Suggestions;
    /**
     * A brief summary of the oracle table's intended usage, no more than a few
     * sentences in length. This is intended for use in application tooltips
     * and similar sorts of hints. Longer text should use the "description" key
     * instead.
     */
    summary?: MarkdownString;
}
export interface OracleTableColumn {
    content_type: OracleTableColumnContentKey;
    /**
     * The column's header text.
     */
    label: Label;
    /**
     * The thematic color for this column.
     */
    color?: CssColor;
}
/**
 * The value(s) from each OracleTableRow that is rendered in this column.
 */
export declare enum OracleTableColumnContentKey {
    /**
     * Column displays the OracleTableRow's `description` key.
     */
    Description = "description",
    /**
     * Column displays the OracleTableRow's `result` key.
     */
    Result = "result",
    /**
     * Column displays the roll range (`min` and `max`) of each OracleTableRow.
     */
    Roll = "roll",
    /**
     * Column displays the OracleTableRow's `summary` key.
     */
    Summary = "summary"
}
/**
 * A unique ID for an OracleTable.
 */
export type OracleTableId = string;
/**
 * Oracle table wildcards can also use '**' to represent any number of
 * collection levels in the oracle tree.
 */
export type OracleTableIdWildcard = string;
export interface OracleTableMatchBehavior {
    text: MarkdownString;
}
/**
 * Describes the presentation of this table.
 */
export type OracleTableRendering = OracleTableRenderingColumn | OracleTableRenderingEmbedInRow | OracleTableRenderingStandalone;
export interface OracleTableRenderingColumn {
    style: "column";
}
export interface OracleTableRenderingEmbedInRow {
    style: "embed_in_row";
}
export interface OracleTableRenderingStandalone {
    style: "standalone";
    columns: {
        [key: string]: OracleTableColumn;
    };
}
export interface OracleTableRoll {
    /**
     * Both Ironsworn and Starforged explicitly recommend *against* rolling
     * all details at once. That said, some oracle results only provide useful
     * information once a secondary roll occurs, such as "Action + Theme".
     */
    auto: boolean;
    dice: DiceExpression;
    /**
     * Special rules on how the oracle table roll is performed.
     */
    method: OracleTableRollMethod;
    oracle: OracleTableId;
    /**
     * The number of times to roll.
     */
    times: number;
}
/**
 * Special roll instructions to use when rolling multiple times on a single
 * oracle table.
 */
export declare enum OracleTableRollMethod {
    /**
     * Duplicates should be kept.
     */
    KeepDuplicates = "keep_duplicates",
    /**
     * Duplicates should be kept, and they compound to make things worse.
     */
    MakeItWorse = "make_it_worse",
    /**
     * Duplicates should be re-rolled.
     */
    NoDuplicates = "no_duplicates"
}
/**
 * Represents a row in an oracle table.
 */
export interface OracleTableRow {
    /**
     * The unique Datasworn ID for this item.
     */
    id: OracleTableRowId;
    /**
     * High end of the dice range for this table row.
     */
    max: number;
    /**
     * Low end of the dice range for this table row.
     */
    min: number;
    /**
     * The primary text content of this row.
     */
    result: MarkdownString;
    /**
     * Optional tertiary text content for this row. Generally, this is longer than
     * both `result` and `summary`.
     */
    description?: MarkdownString;
    /**
     * Hints that the identified table should be rendered inside this table row.
     */
    embed_table?: OracleTableId;
    i18n?: I18nHints;
    icon?: SvgImageUrl;
    /**
     * Further oracle rolls prompted by this table row.
     */
    rolls?: OracleTableRoll[];
    suggestions?: Suggestions;
    /**
     * Optional secondary text content for this row. Generally, this is longer
     * than `result`.
     */
    summary?: MarkdownString;
    template?: OracleRollTemplate;
}
/**
 * Normally, rows will end with two numbers separated by a dash, indicating
 * their dice range.
 *
 * Rows with a single number represent unrollable rows that are sometimes
 * included for rendering purposes; in this case, the number represents the
 * row's index.
 */
export type OracleTableRowId = string;
export declare enum OracleTableStyle {
    /**
     * Render as a single column of a table.
     */
    Column = "column",
    /**
     * Render as a table, within a row in another table.
     */
    EmbedInRow = "embed_in_row",
    /**
     * Render as a standalone table.
     */
    Standalone = "standalone"
}
export declare enum PartOfSpeech {
    /**
     * An adjective.
     */
    Adjective = "adjective",
    /**
     * A common noun used as an adjective, to modify another noun.
     */
    AdjunctCommonNoun = "adjunct_common_noun",
    /**
     * A proper noun used as an adjective, to modify another noun.
     */
    AdjunctProperNoun = "adjunct_proper_noun",
    /**
     * A verb used as an adjective, to modify a noun.
     */
    AttributiveVerb = "attributive_verb",
    /**
     * A common noun.
     */
    CommonNoun = "common_noun",
    /**
     * Gerund or present participle of a verb, e.g. "going", "seeing", "waving"
     */
    Gerund = "gerund",
    /**
     * A proper noun.
     */
    ProperNoun = "proper_noun",
    /**
     * A verb in present tense
     */
    Verb = "verb"
}
export declare enum ProgressRollMethod {
    /**
     * An automatic miss.
     */
    Miss = "miss",
    /**
     * Make a progress roll on a progress track associated with this move.
     */
    ProgressRoll = "progress_roll",
    /**
     * An automatic strong hit.
     */
    StrongHit = "strong_hit",
    /**
     * An automatic weak hit.
     */
    WeakHit = "weak_hit"
}
export declare enum ProgressRollOptionUsing {
    ProgressTrack = "progress_track"
}
export interface ProgressRollOption {
    using: ProgressRollOptionUsing;
}
/**
 * Describes the features of a type of progress track.
 */
export interface ProgressTrackTypeInfo {
    /**
     * A category label for progress tracks of this type.
     */
    category: Label;
    controls?: {
        [key: string]: any;
    };
}
/**
 * A rarity, as described in Ironsworn: Delve.
 */
export interface Rarity {
    /**
     * The asset augmented by this rarity.
     */
    asset: AssetId;
    description: MarkdownString;
    /**
     * The unique Datasworn ID for this item.
     */
    id: RarityId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    /**
     * From Ironsworn: Delve, p. 174:
     *
     *       Some assets will bring a rarity into play more often than others, so
     * the experience point cost for a rarity will vary by the linked asset. These
     * costs are shown in the tables on page 175.
     *
     *       If you are playing solo, and aren’t concerned with the relative
     * balance of rarity abilities, you can ignore these variable costs. If so,
     * spend 3 experience points to purchase a rarity.
     */
    xp_cost: number;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    icon?: SvgImageUrl;
    suggestions?: Suggestions;
}
/**
 * A unique ID for a Rarity.
 */
export type RarityId = string;
export type RollableValue = RollableValueAssetControl | RollableValueAssetOption | RollableValueAttachedAssetControl | RollableValueAttachedAssetOption | RollableValueConditionMeter | RollableValueCustom | RollableValueStat;
/**
 * A reference to the value of an asset control.
 */
export interface RollableValueAssetControl {
    using: "asset_control";
    assets: AssetIdWildcard[];
    /**
     * The dictionary key of the asset control field.
     */
    control: DictKey;
}
/**
 * A reference to the value of an asset option.
 */
export interface RollableValueAssetOption {
    using: "asset_option";
    assets: AssetIdWildcard[];
    /**
     * The dictionary key of the asset option field.
     */
    option: DictKey;
}
/**
 * A reference to the value of an attached asset control. For example, a Module
 * asset could use this to roll using the `integrity` control of an attached
 * Vehicle.
 */
export interface RollableValueAttachedAssetControl {
    using: "attached_asset_control";
    /**
     * The dictionary key of the asset control field.
     */
    control: DictKey;
}
/**
 * A reference to the value of an attached asset option.
 */
export interface RollableValueAttachedAssetOption {
    using: "attached_asset_option";
    /**
     * The dictionary key of the asset option field.
     */
    option: DictKey;
}
/**
 * A reference to the value of a standard player condition meter.
 */
export interface RollableValueConditionMeter {
    using: "condition_meter";
    condition_meter: ConditionMeterKey;
}
/**
 * An arbitrary static integer value with a label.
 */
export interface RollableValueCustom {
    using: "custom";
    label: Label;
    value: number;
}
/**
 * A reference to the value of a standard player character stat.
 */
export interface RollableValueStat {
    using: "stat";
    stat: StatKey;
}
export declare enum RollableValueType {
    /**
     * A reference to the value of an asset control.
     */
    AssetControl = "asset_control",
    /**
     * A reference to the value of an asset option.
     */
    AssetOption = "asset_option",
    /**
     * A reference to the value of an attached asset control. For example, a
     * Module asset could use this to roll using the `integrity` control of an
     * attached Vehicle.
     */
    AttachedAssetControl = "attached_asset_control",
    /**
     * A reference to the value of an attached asset option.
     */
    AttachedAssetOption = "attached_asset_option",
    /**
     * A reference to the value of a standard player condition meter.
     */
    ConditionMeter = "condition_meter",
    /**
     * An arbitrary static integer value with a label.
     */
    Custom = "custom",
    /**
     * A reference to the value of a standard player character stat.
     */
    Stat = "stat"
}
/**
 * Describes rules for player characters in this ruleset, such as stats and
 * condition meters.
 */
export interface Rules {
    /**
     * Describes the standard condition meters used by player characters in this
     * ruleset.
     */
    condition_meters: {
        [key: string]: ConditionMeterRule;
    };
    /**
     * Describes the standard impacts/debilities used by player characters in
     * this ruleset.
     */
    impacts: {
        [key: string]: ImpactCategory;
    };
    /**
     * Describes the special tracks used by player characters in this ruleset,
     * like Bonds (classic Ironsworn), Failure (Delve), or Legacies (Starforged).
     */
    special_tracks: {
        [key: string]: SpecialTrackRule;
    };
    /**
     * Describes the standard stats used by player characters in this ruleset.
     */
    stats: {
        [key: string]: StatRule;
    };
}
/**
 * Describes rules for player characters in this ruleset, such as stats and
 * condition meters.
 */
export interface RulesExpansion {
    /**
     * Describes the standard condition meters used by player characters in this
     * ruleset.
     */
    condition_meters?: {
        [key: string]: ConditionMeterRule;
    };
    /**
     * Describes the standard impacts/debilities used by player characters in
     * this ruleset.
     */
    impacts?: {
        [key: string]: ImpactCategory;
    };
    /**
     * Describes the special tracks used by player characters in this ruleset,
     * like Bonds (classic Ironsworn), Failure (Delve), or Legacies (Starforged).
     */
    special_tracks?: {
        [key: string]: SpecialTrackRule;
    };
    /**
     * Describes the standard stats used by player characters in this ruleset.
     */
    stats?: {
        [key: string]: StatRule;
    };
}
/**
 * The ID of standalone Datasworn package that describes its own ruleset.
 */
export type RulesetId = string;
export type SemanticVersion = string;
export interface SourceAuthor {
    name: string;
    /**
     * An optional email contact for the author
     */
    email?: string;
    /**
     * An optional URL for the author's website.
     */
    url?: string;
}
/**
 * Metadata describing the original source of this item
 */
export interface Source {
    authors: SourceAuthor[];
    /**
     * The date of the source documents's last update, formatted YYYY-MM-DD.
     * Required because it's used to determine whether the data needs updating.
     */
    date: string;
    license: string;
    /**
     * The title of the source document.
     */
    title: string;
    /**
     * An absolute URL where the source document is available.
     */
    url: string;
    /**
     * The page number where this item is described in full.
     */
    page?: number;
}
export declare enum SpecialTrackRollMethod {
    /**
     * Use **every** roll option at once.
     */
    All = "all",
    /**
     * Use the roll option with the best/highest value.
     */
    Highest = "highest",
    /**
     * Use the roll option with the worst/lowest value.
     */
    Lowest = "lowest",
    /**
     * An automatic miss.
     */
    Miss = "miss",
    /**
     * The player chooses which roll option to use.
     */
    PlayerChoice = "player_choice",
    /**
     * An automatic strong hit.
     */
    StrongHit = "strong_hit",
    /**
     * An automatic weak hit.
     */
    WeakHit = "weak_hit"
}
/**
 * Describes a special track like Bonds (classic Ironsworn), Failure (Delve), or
 * Legacies (Starforged).
 */
export interface SpecialTrackRule {
    /**
     * A description of this special track.
     */
    description: MarkdownString;
    /**
     * A label for this special track.
     */
    label: Label;
    /**
     * Is this track an optional rule?
     */
    optional: boolean;
    /**
     * Is this track shared by all players?
     */
    shared: boolean;
}
/**
 * A unique ID for a SpecialTrackRule.
 */
export type SpecialTrackRuleId = string;
/**
 * Special, ruleset-specific progress tracks. Usually, one exists per player
 * character, and they persist through the life of the player character.
 * 'Canonical' examples:
 *   * `bonds_track`, described in the Ironsworn Rulebook. For the Starforged
 * legacy track, use `bonds_legacy` instead.
 *   * `failure_track`, described in Ironsworn: Delve
 *   * `quests_legacy`, `bonds_legacy`, and `discoveries_legacy`, described
 * Ironsworn: Starforged
 *
 */
export type SpecialTrackType = DictKey;
/**
 * A basic player character stat.
 */
export type StatKey = DictKey;
/**
 * Describes a standard player character stat.
 */
export interface StatRule {
    /**
     * A description of this stat.
     */
    description: MarkdownString;
    /**
     * A label for this stat.
     */
    label: Label;
}
/**
 * A unique ID for a StatRule.
 */
export type StatRuleId = string;
export interface Suggestions {
    assets?: AssetId[];
    atlas?: AtlasEntryId[];
    moves?: MoveId[];
    npcs?: NpcId[];
    oracles?: OracleTableId[];
    rarities?: RarityId[];
    site_domains?: DelveSiteDomainId[];
    site_themes?: DelveSiteThemeId[];
}
/**
 * A relative URL pointing to a vector image in the SVG format.
 */
export type SvgImageUrl = string;
/**
 * A rich text string in Markdown with replaced values from oracle roll results.
 *
 * The custom syntax `{{some_row_key:some_oracle_table_id}}` should be replaced
 * by the `some_row_key` string of a rolled oracle table. This is usually the
 * `result` key, for example `{{result:starforged/oracles/core/action}}`
 */
export type TemplateString = string;
/**
 * A unique ID for a ThemeDangerRow.
 */
export type ThemeDangerRowId = string;
/**
 * A unique ID for a ThemeFeatureRow.
 */
export type ThemeFeatureRowId = string;
/**
 * Describes trigger conditions for a move that makes an action roll.
 */
export interface TriggerActionRoll {
    /**
     * Specific conditions that qualify for this trigger.
     */
    conditions: TriggerActionRollCondition[];
    /**
     * A markdown string containing the primary trigger text for this move.
     *
     * Secondary trigger text (for specific stats or uses of an asset ability) may
     * be described in individual trigger conditions.
     */
    text: MarkdownString;
}
export interface TriggerActionRollCondition {
    method: ActionRollMethod;
    /**
     * The options available when rolling with this trigger condition.
     */
    roll_options: RollableValue[];
    by?: TriggerBy;
    /**
     * A markdown string of any trigger text specific to this trigger condition.
     */
    text?: MarkdownString;
}
export interface TriggerActionRollConditionEnhancement {
    method: ActionRollMethod;
    /**
     * The options available when rolling with this trigger condition.
     */
    roll_options: RollableValue[];
    by?: TriggerBy;
    /**
     * A markdown string of any trigger text specific to this trigger condition.
     */
    text?: MarkdownString;
}
/**
 * Describes changes/additions made to the enhanced move's trigger conditions.
 */
export interface TriggerActionRollEnhancement {
    /**
     * Trigger conditions added to the enhanced move.
     */
    conditions: TriggerActionRollConditionEnhancement[];
}
/**
 * Information on who can trigger this trigger condition. Usually this is just
 * the player, but some asset abilities can trigger from an ally's move.
 */
export interface TriggerBy {
    /**
     * Can this trigger be activated by one of the player's allies?
     */
    ally: boolean;
    /**
     * Can this trigger be activated by the player who owns this?
     */
    player: boolean;
}
/**
 * Describes trigger conditions for a move that makes no rolls.
 */
export interface TriggerNoRoll {
    conditions: TriggerNoRollCondition[];
    /**
     * A markdown string containing the primary trigger text for this move.
     *
     * Secondary trigger text (for specific stats or uses of an asset ability) may
     * be described in individual trigger conditions.
     */
    text: MarkdownString;
}
export interface TriggerNoRollCondition {
    by?: TriggerBy;
    /**
     * A markdown string of any trigger text specific to this trigger condition.
     */
    text?: MarkdownString;
}
/**
 * Describes changes/additions made to the enhanced move's trigger conditions.
 */
export interface TriggerNoRollEnhancement {
    /**
     * Trigger conditions added to the enhanced move.
     */
    conditions: TriggerNoRollCondition[];
}
export interface TriggerProgressRoll {
    /**
     * Specific conditions that qualify for this trigger.
     */
    conditions: TriggerProgressRollCondition[];
    /**
     * A markdown string containing the primary trigger text for this move.
     *
     * Secondary trigger text (for specific stats or uses of an asset ability) may
     * be described in individual trigger conditions.
     */
    text: MarkdownString;
}
export interface TriggerProgressRollCondition {
    method: ProgressRollMethod;
    /**
     * The options available when rolling with this trigger condition.
     */
    roll_options: ProgressRollOption[];
    by?: TriggerBy;
    /**
     * A markdown string of any trigger text specific to this trigger condition.
     */
    text?: MarkdownString;
}
export interface TriggerProgressRollConditionEnhancement {
    method: ProgressRollMethod;
    /**
     * The options available when rolling with this trigger condition.
     */
    roll_options: ProgressRollOption[];
    by?: TriggerBy;
    /**
     * A markdown string of any trigger text specific to this trigger condition.
     */
    text?: MarkdownString;
}
/**
 * Describes changes/additions made to the enhanced move's trigger conditions.
 */
export interface TriggerProgressRollEnhancement {
    /**
     * Trigger conditions added to the enhanced move.
     */
    conditions: TriggerProgressRollConditionEnhancement[];
}
export interface TriggerSpecialTrack {
    /**
     * Specific conditions that qualify for this trigger.
     */
    conditions: TriggerSpecialTrackCondition[];
    /**
     * A markdown string containing the primary trigger text for this move.
     *
     * Secondary trigger text (for specific stats or uses of an asset ability) may
     * be described in individual trigger conditions.
     */
    text: MarkdownString;
}
export interface TriggerSpecialTrackCondition {
    method: SpecialTrackRollMethod;
    /**
     * The options available when rolling with this trigger condition.
     */
    roll_options: TriggerSpecialTrackConditionOption[];
    by?: TriggerBy;
    /**
     * A markdown string of any trigger text specific to this trigger condition.
     */
    text?: MarkdownString;
}
/**
 * A progress move that rolls on one or more special tracks, like Bonds (classic
 * Ironsworn), Failure (Delve), or Legacy (Starforged).
 */
export interface TriggerSpecialTrackConditionEnhancement {
    method: SpecialTrackRollMethod;
    /**
     * The options available when rolling with this trigger condition.
     */
    roll_options: TriggerSpecialTrackConditionOption[];
    by?: TriggerBy;
    /**
     * A markdown string of any trigger text specific to this trigger condition.
     */
    text?: MarkdownString;
}
export interface TriggerSpecialTrackConditionOption {
    using: SpecialTrackType;
}
/**
 * Describes changes/additions made to the enhanced move's trigger conditions.
 */
export interface TriggerSpecialTrackEnhancement {
    /**
     * Trigger conditions added to the enhanced move.
     */
    conditions: TriggerSpecialTrackConditionEnhancement[];
}
/**
 * A setting truth category.
 */
export interface Truth {
    /**
     * The unique Datasworn ID for this item.
     */
    id: TruthId;
    /**
     * The primary name/label for this item.
     */
    name: Label;
    options: TruthOption[];
    /**
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    source: Source;
    /**
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    canonical_name?: Label;
    icon?: SvgImageUrl;
    suggestions?: Suggestions;
    your_character?: MarkdownString;
}
/**
 * A unique ID for a Truth.
 */
export type TruthId = string;
export interface TruthOption {
    description: MarkdownString;
    /**
     * The unique Datasworn ID for this item.
     */
    id: TruthOptionId;
    quest_starter: MarkdownString;
    max?: number;
    min?: number;
    summary?: MarkdownString;
    table?: TruthOptionTableRow[];
}
/**
 * A unique ID for a TruthOption.
 */
export type TruthOptionId = string;
/**
 * Represents a row in an oracle table.
 */
export interface TruthOptionTableRow {
    /**
     * High end of the dice range for this table row.
     */
    max: number;
    /**
     * Low end of the dice range for this table row.
     */
    min: number;
    /**
     * The primary text content of this row.
     */
    result: MarkdownString;
    /**
     * Optional tertiary text content for this row. Generally, this is longer than
     * both `result` and `summary`.
     */
    description?: MarkdownString;
    /**
     * Hints that the identified table should be rendered inside this table row.
     */
    embed_table?: OracleTableId;
    i18n?: I18nHints;
    icon?: SvgImageUrl;
    /**
     * Further oracle rolls prompted by this table row.
     */
    rolls?: OracleTableRoll[];
    suggestions?: Suggestions;
    /**
     * Optional secondary text content for this row. Generally, this is longer
     * than `result`.
     */
    summary?: MarkdownString;
    template?: OracleRollTemplate;
}
/**
 * A relative URL pointing to a raster image in the WEBP format.
 */
export type WebpImageUrl = string;
