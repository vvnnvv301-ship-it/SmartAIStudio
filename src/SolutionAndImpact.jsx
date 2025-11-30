import { Target, Zap, TrendingUp, Users, Award, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function SolutionAndImpact() {
    const { t } = useTranslation();

    const problems = [
        {
            icon: Target,
            title: t('solution.problem1Title'),
            description: t('solution.problem1Desc')
        },
        {
            icon: Zap,
            title: t('solution.problem2Title'),
            description: t('solution.problem2Desc')
        },
        {
            icon: Users,
            title: t('solution.problem3Title'),
            description: t('solution.problem3Desc')
        },
        {
            icon: Award,
            title: t('solution.problem4Title'),
            description: t('solution.problem4Desc')
        }
    ];

    const solutions = [
        {
            icon: Rocket,
            title: t('solution.solution1Title'),
            description: t('solution.solution1Desc'),
            color: "cyan"
        },
        {
            icon: TrendingUp,
            title: t('solution.solution2Title'),
            description: t('solution.solution2Desc'),
            color: "purple"
        },
        {
            icon: Award,
            title: t('solution.solution3Title'),
            description: t('solution.solution3Desc'),
            color: "cyan"
        }
    ];

    const impacts = [
        { metric: t('solution.impact1Value'), label: t('solution.impact1Label') },
        { metric: t('solution.impact2Value'), label: t('solution.impact2Label') },
        { metric: t('solution.impact3Value'), label: t('solution.impact3Label') },
        { metric: t('solution.impact4Value'), label: t('solution.impact4Label') }
    ];

    return (
        <section className="px-6 py-16 lg:py-20">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('solution.title')} <span className="gradient-text">{t('solution.titleGradient')}</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t('solution.subtitle')}
                    </p>
                </div>

                {/* Problem Statement */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">{t('solution.challengeTitle')}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {problems.map((problem, index) => (
                            <div key={index} className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                <problem.icon className="w-10 h-10 text-red-400 mb-4" />
                                <h4 className="text-xl font-semibold mb-2">{problem.title}</h4>
                                <p className="text-gray-400">{problem.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Solutions */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">{t('solution.approachTitle')}</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
                            >
                                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${solution.color === 'cyan' ? 'from-cyan-500 to-cyan-600' : 'from-purple-500 to-purple-600'
                                    } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <solution.icon className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold mb-2">{solution.title}</h4>
                                <p className="text-gray-400">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact Metrics */}
                <div className="glass rounded-2xl p-8 md:p-12">
                    <h3 className="text-2xl font-semibold mb-8 text-center">{t('solution.impactTitle')}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {impacts.map((impact, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                    {impact.metric}
                                </div>
                                <div className="text-sm text-gray-400">{impact.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SolutionAndImpact;
