import { ReactNode } from "react"

interface Props {
  children?: ReactNode
  // any props that come into the components
}

export default function Layout(props: Props): ReactNode {
  return (
    <>
      <main>{props.children}</main>
    </>
  )
}