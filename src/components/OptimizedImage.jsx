const localImagePattern = /\.(avif|gif|jpe?g|png|svg|webp)$/i
const assetVersion = import.meta.env.VITE_ASSET_VERSION

function withAssetVersion(src) {
  if (typeof src !== 'string' || !assetVersion || !src.startsWith('/')) {
    return src
  }

  const [pathAndQuery, hash = ''] = src.split('#')
  const [path, query = ''] = pathAndQuery.split('?')

  if (!localImagePattern.test(path)) {
    return src
  }

  const versionedQuery = new URLSearchParams(query)
  versionedQuery.set('v', assetVersion)

  return `${path}?${versionedQuery.toString()}${hash ? `#${hash}` : ''}`
}

export default function OptimizedImage({
  alt,
  className,
  loading,
  priority = false,
  sizes,
  src,
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
      src={withAssetVersion(src)}
      {...props}
    />
  )
}
