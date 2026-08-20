import './SkeletonCard.css'

export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img shimmer" />
      <div className="skeleton-body">
        <div className="skeleton-line shimmer" style={{ width: '70%' }} />
        <div className="skeleton-line shimmer" style={{ width: '40%' }} />
      </div>
    </div>
  )
}
