import HeroSection from './HeroSection';
import SolutionAndImpact from './SolutionAndImpact';
import TeamSection from './TeamSection';
import RoadmapAndStatus from './RoadmapAndStatus';
import TechStackAndAI from './TechStackAndAI';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();

    return (
        // Set global dark mode background, max width, and clean sans-serif font
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Ensure main content area for semantic HTML and accessibility */}
            <main className="max-w-6xl mx-auto">
                <HeroSection />
                {/* Separator for clear visual rhythm and section distinction */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-16 lg:my-24" />
                <SolutionAndImpact />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-16 lg:my-24" />
                <TeamSection />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-16 lg:my-24" />
                <RoadmapAndStatus />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-16 lg:my-24" />
                <TechStackAndAI />

                {/* Footer */}
                <footer className="py-12 text-center text-gray-400 text-sm">
                    <p>{t('footer.copyright')}</p>
                </footer>
            </main>
        </div>
    );
}

export default App;
