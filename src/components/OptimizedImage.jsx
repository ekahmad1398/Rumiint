export default function OptimizedImage({
  alt,
  className,
  loading,
  priority = false,
  sizes,
  ...props
}) {
  return (
    <img
      alt={alt}
      className={className}
      decoding="async"
      draggable="false"
      fetchPriority={priority ? 'high' : undefined}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      sizes={sizes}
      {...props}
    />
  )
}
