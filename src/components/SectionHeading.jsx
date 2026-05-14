export default function SectionHeading({ eyebrow, title, description, align = 'start' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title mt-3">{title}</h2>
      {description ? <p className="section-copy mt-4">{description}</p> : null}
    </div>
  )
}
