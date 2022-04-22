import * as React from 'react'
type CustomViewProps = {
  Element: () => JSX.Element 
}
export const CustomView = ({Element}: CustomViewProps) => {
  return <Element />
}