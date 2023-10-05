import { AnchorHTMLAttributes, FC, ReactNode } from "react"

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

const ExternalLink: FC<ExternalLinkProps> = ({ href, children, ...props }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

export default ExternalLink