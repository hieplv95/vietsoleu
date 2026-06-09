import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Stats.css'

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatItem({ stat, inView }) {
  const count = useCountUp(stat.value, 2000, inView)
  return (
    <div className="stats__item">
      <div className="stats__value">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="stats__label">{stat.label}</div>
      <div className="stats__sub">{stat.sub}</div>
    </div>
  )
}

export default function Stats() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  const stats = [
    { value: 500, suffix: '+', label: t('stats.clientLabel'), sub: t('stats.clientSub') },
    { value: 50000, suffix: '+', label: t('stats.checkinLabel'), sub: t('stats.checkinSub') },
    { value: 10, suffix: '+', label: t('stats.experienceLabel'), sub: t('stats.experienceSub') },
    { value: 15, suffix: '', label: t('stats.countriesLabel'), sub: t('stats.countriesSub') },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats section" ref={ref}>
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
