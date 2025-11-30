import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function RoadmapAndStatus() {
    const { t } = useTranslation();

    const milestones = [
        {
            phase: t('roadmap.phase1'),
            title: t('roadmap.phase1Title'),
            status: "completed",
            date: t('roadmap.phase1Date'),
            items: [
                t('roadmap.phase1Item1'),
                t('roadmap.phase1Item2'),
                t('roadmap.phase1Item3')
            ]
        },
        {
            phase: t('roadmap.phase2'),
            title: t('roadmap.phase2Title'),
            status: "completed",
            date: t('roadmap.phase2Date'),
            items: [
                t('roadmap.phase2Item1'),
                t('roadmap.phase2Item2'),
                t('roadmap.phase2Item3')
            ]
        },
        {
            phase: t('roadmap.phase3'),
            title: t('roadmap.phase3Title'),
            status: "in-progress",
            date: t('roadmap.phase3Date'),
            items: [
                t('roadmap.phase3Item1'),
                t('roadmap.phase3Item2'),
                t('roadmap.phase3Item3')
            ]
        },
        {
            phase: t('roadmap.phase4'),
            title: t('roadmap.phase4Title'),
            status: "upcoming",
            date: t('roadmap.phase4Date'),
            items: [
                t('roadmap.phase4Item1'),
                t('roadmap.phase4Item2'),
                t('roadmap.phase4Item3')
            ]
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return <CheckCircle2 className="w-6 h-6 text-green-400" />;
            case 'in-progress':
                return <Clock className="w-6 h-6 text-cyan-400 animate-pulse" />;
            default:
                return <Circle className="w-6 h-6 text-gray-500" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'from-green-500 to-emerald-600';
            case 'in-progress':
                return 'from-cyan-500 to-blue-600';
            default:
                return 'from-gray-600 to-gray-700';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'completed':
                return t('roadmap.statusCompleted');
            case 'in-progress':
                return t('roadmap.statusInProgress');
            default:
                return t('roadmap.statusUpcoming');
        }
    };

    return (
        <section className="px-6 py-16 lg:py-20">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('roadmap.title')} <span className="gradient-text">{t('roadmap.titleGradient')}</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t('roadmap.subtitle')}
                    </p>
                </div>

                {/* Current Status Banner */}
                <div className="glass rounded-xl p-6 mb-12 border-l-4 border-cyan-500">
                    <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-5 h-5 text-cyan-400 animate-pulse" />
                        <h3 className="text-xl font-semibold">{t('roadmap.currentStatusTitle')}</h3>
                    </div>
                    <p className="text-gray-400">
                        {t('roadmap.currentStatusDesc')}
                    </p>
                    <div className="mt-4 bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{t('roadmap.progressLabel')}</p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-gray-700"></div>

                    {/* Milestones */}
                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="relative pl-20">
                                {/* Icon */}
                                <div className="absolute left-5 top-0 -translate-x-1/2">
                                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${getStatusColor(milestone.status)} flex items-center justify-center`}>
                                        {getStatusIcon(milestone.status)}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <span className="text-sm font-semibold text-gray-400">{milestone.phase}</span>
                                        <span className="text-sm px-3 py-1 bg-gray-800 rounded-full text-gray-300">
                                            {milestone.date}
                                        </span>
                                        <span className={`text-sm px-3 py-1 rounded-full ${milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                                milestone.status === 'in-progress' ? 'bg-cyan-500/20 text-cyan-400' :
                                                    'bg-gray-700 text-gray-400'
                                            }`}>
                                            {getStatusText(milestone.status)}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-4">{milestone.title}</h3>

                                    <ul className="space-y-2">
                                        {milestone.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-400">
                                                <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${milestone.status === 'completed' ? 'text-green-400' : 'text-gray-600'
                                                    }`} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RoadmapAndStatus;
