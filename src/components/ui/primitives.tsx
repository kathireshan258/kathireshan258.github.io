import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

export function Container({
  children,
  className = '',
  ...props
}: {
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`container ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow?: string
  title: string
  description?: string
  id?: string
}) {
  return (
    <header className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {description ? (
        <p className="section-description">{description}</p>
      ) : null}
    </header>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>
}

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}: {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  className?: string
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>) {
  const composedClassName = `button ${variant} ${className}`.trim()

  if (href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>

    return (
      <a className={composedClassName} href={href} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button className={composedClassName} type="button" {...buttonProps}>
      {children}
    </button>
  )
}

export function Card({
  title,
  description,
  meta,
}: {
  title: string
  description: string
  meta?: string
}) {
  return (
    <article className="card">
      <div className="card-meta">{meta ?? 'Core principle'}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
