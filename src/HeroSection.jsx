import { Sparkles, ArrowRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
            {/* Logo in top left corner - Inline SVG for instant loading */}
            <div className="absolute top-8 left-8 z-20">
                <svg
                    className="h-12 md:h-16 w-auto"
                    viewBox="0 0 600 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Smart AI Studio"
                >
                    {/* Emblem - Golden Ratio Infinity Loop */}
                    <g id="Emblem_Mark">
                        <path
                            d="M 80 150 Q 90 100, 120 90 Q 150 80, 170 100 Q 190 120, 180 150 Q 170 180, 150 190 Q 130 200, 110 180 Q 90 160, 100 140 Q 110 120, 130 115 Q 150 110, 165 125 Q 180 140, 175 155 Q 170 170, 155 175 Q 140 180, 125 170 Q 110 160, 115 145 M 100 150 Q 105 135, 120 130 Q 135 125, 150 135 Q 165 145, 162 160 Q 159 175, 145 180 Q 131 185, 118 175 Q 105 165, 108 150"
                            fill="#2A2A72"
                            opacity="0.9"
                        />
                        <circle cx="130" cy="140" r="8" fill="#00A5A8" opacity="0.6" />
                        <circle cx="160" cy="160" r="6" fill="#00A5A8" opacity="0.4" />
                    </g>

                    {/* Wordmark - SMART AI */}
                    <g id="Wordmark_SMART_AI">
                        <text
                            x="220"
                            y="155"
                            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
                            fontSize="48"
                            fontWeight="800"
                            fill="#2A2A72"
                            letterSpacing="-1"
                        >
                            SMART AI
                        </text>
                    </g>

                    {/* Wordmark - Studio */}
                    <g id="Wordmark_Studio">
                        <text
                            x="220"
                            y="195"
                            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
                            fontSize="36"
                            fontWeight="400"
                            fill="#00A5A8"
                            letterSpacing="0.5"
                        >
                            Studio
                        </text>
                    </g>
                </svg>
            </div>

            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full particle" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full particle" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-300 rounded-full particle" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full particle" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full text-sm">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">{t('hero.badge')}</span>
                </div>

                {/* Main heading with gradient */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    {t('hero.title')}{' '}
                    <span className="gradient-text animate-gradient">{t('hero.titleGradient')}</span>
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                    {t('hero.subtitle')}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="https://smart-ai-studio-platform.vercel.app/"
                        className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                        {t('hero.ctaPrimary')}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="https://images-asd.vercel.app/"
                        className="group px-8 py-4 glass rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                    >
                        <Play className="w-5 h-5" />
                        {t('hero.ctaSecondary')}
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{t('hero.stat1Value')}</div>
                        <div className="text-sm text-gray-400">{t('hero.stat1Label')}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{t('hero.stat2Value')}</div>
                        <div className="text-sm text-gray-400">{t('hero.stat2Label')}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{t('hero.stat3Value')}</div>
                        <div className="text-sm text-gray-400">{t('hero.stat3Label')}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
