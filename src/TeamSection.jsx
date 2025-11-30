import { Linkedin, Github, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function TeamSection() {
    const { t } = useTranslation();

    const team = [
        {
            name: t('team.member1Name'),
            role: t('team.member1Role'),
            bio: t('team.member1Bio'),
            image: "/shokhrukh.png",
            social: {
                linkedin: "#",
                github: "#",
                twitter: "#"
            }
        },
        {
            name: t('team.member2Name'),
            role: t('team.member2Role'),
            bio: t('team.member2Bio'),
            image: "/dilmurod.png",
            social: {
                linkedin: "#",
                github: "#",
                twitter: "#"
            }
        }
    ];

    return (
        <section className="px-6 py-16 lg:py-20">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('team.title')} <span className="gradient-text">{t('team.titleGradient')}</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t('team.subtitle')}
                    </p>
                </div>

                {/* Team Grid - 2 members centered */}
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
                        >
                            {/* Avatar */}
                            <div className="relative h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 overflow-hidden flex items-center justify-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40"></div>
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm text-cyan-400 mb-3">
                                    {member.role}
                                </div>
                                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                                {/* Social Links */}
                                <div className="flex gap-3">
                                    <a
                                        href={member.social.linkedin}
                                        className="w-8 h-8 glass rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={member.social.github}
                                        className="w-8 h-8 glass rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={member.social.twitter}
                                        className="w-8 h-8 glass rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
