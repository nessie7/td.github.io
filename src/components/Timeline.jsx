import { motion } from 'framer-motion'
import { timelineEvents } from '../data/config'

export default function Timeline() {
  return (
    <section className="section" id="timeline">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        我们的时光线
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        那些值得铭记的每一个瞬间
      </motion.p>

      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-date">{event.date}</div>
              <div className="timeline-title">{event.title}</div>
              <div className="timeline-desc">{event.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
