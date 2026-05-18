export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  titleClassName = '',
}) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'section-heading mx-auto max-w-3xl text-center' : 'section-heading max-w-3xl'}>
      {eyebrow ? (
        <div className={centered ? 'section-heading-row justify-center' : 'section-heading-row'}>
          <span className="section-heading-line" />
          <p className="eyebrow">{eyebrow}</p>
        </div>
      ) : null}
      <h2 className={`section-title mt-4 ${titleClassName}`.trim()}>{title}</h2>
      {description ? <p className="section-copy mt-5">{description}</p> : null}
    </div>
  )
}
