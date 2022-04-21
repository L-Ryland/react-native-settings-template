type CustomViewProps = {
  Element: () => React.ReactElement<unknown>
}
export const CustomView = ({Element}: CustomViewProps) => {
  return <Element />
}