import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Missions() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div 
            ref={ref}
            id='Mission' 
            className="flex min-h-[90vh] px-4 py-12 items-center justify-center bg-gray-50"
        >
            <motion.div 
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={sectionVariants}
                className="w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg flex flex-col gap-8"
            >
                <motion.h2 
                    variants={sectionVariants}
                    className="text-sm md:text-base text-gray-600 uppercase tracking-wide mb-2"
                >
                    ABOUT US
                </motion.h2>

                <motion.div 
                    variants={sectionVariants}
                    className="space-y-4"
                >
                    <h2 className="text-2xl font-semibold text-600 italic">
                        Our Mission
                    </h2>
                    <p className="text-base text-gray-700 leading-relaxed">
                        To be Africa's leading retail analytics and consultancy partner, empowering businesses with insights and expert guidance to drive growth, efficiency, and lasting success.
                    </p>
                </motion.div>

                <motion.div 
                    variants={sectionVariants}
                    className="space-y-4"
                >
                    <h2 className="text-2xl font-semibold text-600 italic">
                        Our Vision
                    </h2>
                    <p className="text-base text-gray-700 leading-relaxed">
                        HOVA AI envisions a future where small and medium enterprises in Africa's retail industry have access to cutting-edge financial technology and expert consultancy services. By providing tools and tailored guidance, we aim to formalize businesses, enhance competitiveness, and expand financial access, ultimately fostering economic growth and development across the continent.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}