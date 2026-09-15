import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function Philosophy() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32 bg-surface-elevated/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start"
        >
          <div className="w-full md:w-1/3">
            <SectionHeading 
              eyebrow="Philosophy"
              title="How I Think."
            />
          </div>
          
          <div className="w-full md:w-2/3 flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-foreground">Keseimbangan antara logika dan empati</h3>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                Bagi saya, development bukan sekadar menumpuk baris kode. Ini tentang memahami masalah dari sudut pandang 
                pengguna, merancang solusi yang elegan, dan mengimplementasikannya dengan teknologi yang tepat.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-foreground">Sederhana itu sulit</h3>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                Membuat sesuatu menjadi kompleks itu mudah, tetapi membuatnya menjadi sederhana membutuhkan pemikiran yang 
                mendalam. Saya selalu berusaha mereduksi kompleksitas teknis agar hasil akhirnya terasa natural saat digunakan.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
