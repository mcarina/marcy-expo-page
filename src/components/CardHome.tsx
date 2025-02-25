"use client"

import { motion } from "framer-motion"
import Link from 'next/link'

function CardHome() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
  >
    <Link href="/Projects" className="group card-containers">
      <h3 className="text-xl font-semibold mb-2">
      <span className="text-primary">&gt; </span>
        Front-end
      </h3>
      <pre className="text-muted-foreground text-sm">
        {`[ Next.js, React.js]`}
      </pre>
    </Link>

    <Link href="/Projects" className="group card-containers">
      <h3 className="text-xl font-semibold mb-2">
      <span className="text-primary">&gt; </span>
        Back-end
      </h3>
      <pre className="text-muted-foreground text-sm">
        {`[ Laravel, Python, Node.js ]`}
      </pre>

    </Link>
    <Link href="/Dashboards" className="group card-containers">
      <h3 className="text-xl font-semibold mb-2">
      <span className="text-primary">&gt; </span>
        Dashboards
      </h3>
      <pre className="text-muted-foreground text-sm">
        {`[ Py, PowerBi, LookerStudio ]`}
      </pre>

    </Link>

  </motion.div>

  )
}

export default CardHome