import { Code2, Database, Cloud, Cpu, Brain, Sparkles, Zap, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function TechStackAndAI() {
    const { t } = useTranslation();

    const techStack = [
        {
            category: t('techstack.categoryFrontend'),
            icon: Code2,
            technologies: [t('techstack.tech1'), t('techstack.tech2')],
            color: "cyan"
        },
        {
            category: t('techstack.categoryBackend'),
            icon: Database,
            technologies: [t('techstack.tech3'), t('techstack.tech4')],
            color: "purple"
        },
        {
            category: t('techstack.categoryInfra'),
            icon: Cloud,
            technologies: [t('techstack.tech5'), t('techstack.tech6')],
            color: "cyan"
        },
        {
            category: t('techstack.categoryAI'),
            icon: Cpu,
            technologies: [t('techstack.tech7'), t('techstack.tech8')],
            color: "purple"
        }
    ];

    const aiCapabilities = [
        {
            icon: Brain,
            title: t('techstack.ai1Title'),
            description: t('techstack.ai1Desc')
        },
        {
            icon: Sparkles,
            title: t('techstack.ai2Title'),
            description: t('techstack.ai2Desc')
        },
        {
            icon: Zap,
            title: t('techstack.ai3Title'),
            description: t('techstack.ai3Desc')
        },
        {
            icon: Shield,
            title: t('techstack.ai4Title'),
            description: t('techstack.ai4Desc')
        }
    ];

    return (
        <section className="px-6 py-16 lg:py-20">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('techstack.title')} <span className="gradient-text">{t('techstack.titleGradient')}</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t('techstack.subtitle')}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-20">
                    <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">{t('techstack.stackTitle')}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 group"
                            >
                                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${tech.color === 'cyan' ? 'from-cyan-500 to-cyan-600' : 'from-purple-500 to-purple-600'
                                    } flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                                    <tech.icon className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold mb-3">{tech.category}</h4>
                                <div className="space-y-2">
                                    {tech.technologies.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="text-sm px-3 py-1 bg-gray-800/50 rounded-full text-gray-300 inline-block mr-2 mb-2"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI Capabilities */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">{t('techstack.aiTitle')}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {aiCapabilities.map((capability, index) => (
                            <div
                                key={index}
                                className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <capability.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">{capability.title}</h4>
                                        <p className="text-gray-400">{capability.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 glass rounded-2xl p-8 md:p-12 text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                    <h3 className="text-3xl font-bold mb-4">{t('techstack.ctaTitle')}</h3>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        {t('techstack.ctaSubtitle')}
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                        {t('techstack.ctaButton')}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TechStackAndAI;
