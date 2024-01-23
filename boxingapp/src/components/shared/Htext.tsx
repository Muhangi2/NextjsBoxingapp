
type Props = {
    children:React.ReactNode,
    className?:string
}

const Htext = ({children,className}: Props) => {
    const combinedClasses = `font-bold text-3xl font-montserrat  ${className || ''}`;
  return (
    <div className={combinedClasses}>{children}</div>
  )
}
export default Htext