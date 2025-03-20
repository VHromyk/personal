export type IconType =
  | 'LETTER_ICON'
  | 'LINKEDIN'
  | 'GITHUB'
  | 'TELEGRAM'
  | 'DOWNLOAD'
  | 'UK_FLAG'
  | 'UA_FLAG'
  | 'BURGER'
  | 'CROSS'
  | 'PHONE_ICON'
  | 'EMAIL_ICON'

export type TIconProps = {
  type: IconType
  fill?: string
  width?: number
  height?: number
}
