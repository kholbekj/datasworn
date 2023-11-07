import path from 'path'

export const VERSION = '2.0.0-dev'

export const PKG_SCOPE_OFFICIAL = '@datasworn'
export const PKG_SCOPE_COMMUNITY = '@datasworn-community-content'

export const PKG_ROOT = path.join(process.cwd(), 'pkg')

export const PKG_DIR_NODE = path.join(PKG_ROOT, 'nodejs')

export const LEGACY_ID_PATH = path.join(process.cwd(), 'src/legacy_id_map.json')

export const ROOT_DATA_IN = path.join(process.cwd(), 'src/data-in')
export const TEMP = path.join(process.cwd(), 'src/data-out')
export const ROOT_TYPES_OUT = path.join(process.cwd(), 'src/types/io')

export const TYPES_OUT = path.join(ROOT_TYPES_OUT, 'datasworn.d.ts')

export const SCHEMA_OUT = path.join(
	process.cwd(),
	'src/data-out',
	'datasworn.schema.json'
)
export const SCHEMA_IN = path.join(ROOT_DATA_IN, 'datasworn-input.schema.json')

export const SCHEMA_DELVE_OUT = path.join(TEMP, 'datasworn-delve.schema.json')

export const SCHEMA_DELVE_IN = path.join(
	TEMP,
	'datasworn-delve-input.schema.json'
)

export const SCHEMA_ID = 'https://ironswornrpg.com/datasworn.schema.json'

export const INPUT_SCHEMA_ID =
	'https://ironswornrpg.com/datasworn-input.schema.json'

export const DELVE_SCHEMA_ID =
	'https://ironswornrpg.com/datasworn-delve.schema.json'

export const DELVE_INPUT_ID =
	'https://ironswornrpg.com/datasworn-delve-input.schema.json'
