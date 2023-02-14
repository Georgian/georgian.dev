const isProduction = process.env.NODE_ENV === 'production'

export interface AnalyticsProps {
  umamiWebsiteId: string
  umamiScriptSrc: string
}

export const Analytics = ({ umamiWebsiteId, umamiScriptSrc }: AnalyticsProps) => {
  return (
    <>
      {isProduction && umamiWebsiteId && umamiScriptSrc && (
        <script async defer data-website-id={umamiWebsiteId} src={umamiScriptSrc} />
      )}
    </>
  )
}
