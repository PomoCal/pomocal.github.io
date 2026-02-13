export const translations = {
    ko: {
        // Layout
        layout: {
            title: 'PomoCal — 당신의 성장을 기록하는 캘린더',
            description: '포모도로와 캘린더의 완벽한 조화. macOS 사용자를 위한 가장 직관적인 학습 관리 도구.',
        },

        // Navbar
        navbar: {
            why: '왜 PomoCal인가?',
            features: '기능',
            screenshots: '앱 미리보기',
            techPrivacy: '기술 & 프라이버시',
            faq: 'FAQ',
        },

        // Hero
        hero: {
            badge: 'macOS 전용 · 무료 다운로드',
            headlineBefore: '단순한 타이머를 넘어,',
            headlineAccent: '당신의 하루',
            headlineAfter: '를 기록하는 캘린더.',
            subtext1: '포모도로와 캘린더의 완벽한 조화.',
            subtext2: 'PomoCal로 당신의 집중 시간을 극대화하세요.',
            ctaPrimary: 'Download for macOS',
            ctaVersion: 'v0.1.0',
            ctaSecondary: '자세히 알아보기',
        },

        // Updates
        updates: {
            badge: '최신 업데이트',
            title: 'PomoCal 1.2를 소개합니다',
            items: [
                {
                    version: 'v1.2.0',
                    date: '2026.02.13',
                    label: '스톱워치 모드',
                    badge: 'New',
                    title: '자유롭게 시간을 측정하세요',
                    description: '정해진 시간 없이 자유롭게 집중하고 싶을 때 사용하세요. 스톱워치 모드로 기록된 시간도 캘린더에 자동으로 저장됩니다.',
                },
                {
                    version: 'v1.1.0',
                    date: '2026.01.20',
                    label: '통계 개선',
                    title: '더 직관적인 데이터 시각화',
                    description: '카테고리별 학습 시간을 한눈에 파악할 수 있도록 차트 디자인을 개선했습니다. 주간, 월간 통계를 더욱 쉽게 확인하세요.',
                },
                {
                    version: 'v1.0.0',
                    date: '2026.01.01',
                    label: '캘린더 자동 연동',
                    title: '더 이상 수동 기록은 필요 없습니다',
                    description: '타이머가 끝나면 Apple 캘린더에 자동으로 기록됩니다. 집중하는 것 외에는 신경 쓸 필요가 없습니다.',
                },
            ],
        },

        // PainPoint
        painPoint: {
            label: '왜 PomoCal일까요?',
            title1: '혹시 여러 앱을 오가며',
            title2: '시간을 낭비하고 있진 않나요?',
            before: 'BEFORE',
            after: 'AFTER',
            apps: [
                { name: 'TickTick', category: '포모도로/유료' },
                { name: 'Apple 캘린더', category: '일정 관리/무료' },
                { name: 'Focus To Do', category: '포모도로/유료' },
                { name: 'Notion / 메모앱', category: '학습 기록/무료' },
            ],
            beforeDesc: '구독 서비스는 부담되고, 무료 버전은 아쉬워 기록을 포기하게됩니다.',
            solutionTagline: '집중, 기록, 관리를 하나로',
            solutionBadges: ['뽀모도로', '캘린더', '할 일', '통계', '도서 API 연동'],
            afterDesc: 'PomoCal로 캘린더에 자동 기록, 더 이상 앱을 오갈 필요가 없습니다.',
        },

        // Features
        features: {
            label: '핵심 기능',
            title1: '오직 공부에만 몰입할 수 있도록',
            title2: '나머지는 PomoCal이 합니다.',
            items: [
                {
                    title: '가장 확실한 동기화',
                    description: '타이머가 끝나면 iCloud 캘린더에 자동으로 기록됩니다. 기록하는 번거로움 없이 오직 공부에만 집중하세요.',
                },
                {
                    title: '도서 중심 학습',
                    description: 'Naver Books API 연동으로 읽고 있는 책과 연계된 학습 목표를 설정하고 관리하세요.',
                },
                {
                    title: '데이터 시각화',
                    description: '카테고리별 요약 차트를 통해 내가 어디에 시간을 가장 많이 썼는지 한눈에 파악하세요.',
                },
            ],
        },

        // Screenshots
        screenshots: {
            label: '앱 미리보기',
            title1: '직관적인 인터페이스,',
            title2: '무료지만 유료앱을 뛰어넘는 기능',
            subtitle: '심플하면서도 필요한 모든 것을 담은 올인원 학습 도구',
            prevLabel: '이전',
            nextLabel: '다음',
            slideLabel: '슬라이드',
            items: [
                { title: '메인 화면', desc: '캘린더, 할 일, 뽀모도로 타이머를 한 화면에서' },
                { title: '도서 라이브러리', desc: '교재를 검색하고 학습에 연결' },
                { title: '학습 세션 추가', desc: '카테고리와 교재를 지정해 체계적으로 계획' },
                { title: '집중 모드', desc: '뽀모도로 타이머로 깊은 집중에 몰입' },
                { title: '휴식 타이머', desc: '집중 후 자동으로 전환되는 휴식 시간' },
                { title: '학습 통계', desc: '카테고리별 시간 투자를 차트로 분석' },
            ],
        },

        // Workflow
        workflow: {
            label: '작동 원리',
            title1: '4단계로 완성되는',
            title2: '당신의 학습 루틴',
            subtitle: '복잡한 설정 없이, 자연스러운 워크플로우를 경험하세요.',
            steps: [
                { title: '계획하기', subtitle: 'Todo 작성' },
                { title: '집중하기', subtitle: '뽀모도로 실행' },
                { title: '기록하기', subtitle: '캘린더 자동 연동' },
                { title: '분석하기', subtitle: '통계 확인' },
            ],
        },

        // TechPrivacy
        techPrivacy: {
            label: '기술 & 프라이버시',
            title1: '신뢰할 수 있는 기술,',
            title2: '외부로 유출되지 않는 나만의 데이터',
            items: [
                {
                    label: 'Native & Swift',
                    title: 'macOS를 위해 태어난 앱',
                    description: 'SwiftUI로 개발된 Native 앱으로, macOS 최신 버전에서 가장 빠르고 안정적입니다. 시스템 자원을 최소한으로 사용하며 빠른 반응 속도를 제공합니다.',
                },
                {
                    label: 'Privacy First',
                    title: '당신의 데이터는<br/>오로지 당신의 것입니다',
                    description: '외부 서버가 아닌 iCloud Drive에만 저장됩니다. 어떤 학습 데이터도 외부로 전송되지 않으며, 완벽한 프라이버시를 보장합니다.',
                },
            ],
        },

        // FAQ
        faq: {
            label: '자주 묻는 질문',
            title: '궁금한 점이 있으신가요?',
            items: [
                {
                    question: '이 프로그램을 무료로 배포하는 이유는 무엇인가요?',
                    answer: 'TMI이긴 하지만, 개발자의 MBTI가 극 J형이라서, 내가 공부한 내용을 직접 기록해서 시각화하는 것을 좋아합니다. 하지만, 시중에 출시되어있는 앱들의 경우 대학생들이 감당하기에는 다소 높은(?) 가격이 형성되어있어서 직접 앱을 개발하여 무료로 배포하였습니다.',
                },
                {
                    question: 'Windows에서도 사용할 수 있나요?',
                    answer: '현재는 macOS 전용입니다. PomoCal은 macOS의 기본 프레임워크인 SwiftUI로 제작되어 최적의 성능을 제공합니다. 추후 모바일 버전은 출시 계획에 있지만, Windows를 지원하지는 않을 예정입니다.',
                },
                {
                    question: '데이터가 날아가면 어떡하나요?',
                    answer: '걱정하지 마세요. 모든 데이터는 사용자의 iCloud Drive에 안전하게 저장됩니다. 앱을 삭제하더라도 iCloud에 데이터가 남아있어 언제든지 복구할 수 있습니다.',
                },
                {
                    question: '무료인가요?',
                    answer: '네, 모든 기능을 무료로 제공하고 있습니다. 정식 출시 후에도 모든 기능은 평생 무료로 제공될 예정입니다.',
                },
                {
                    question: '다른 캘린더와 연동되나요?',
                    answer: 'Apple 기본 캘린더(iCal)와 완벽하게 연동됩니다. Apple 캘린더에 로그인되어 있다면 PomoCal에서 그대로 확인하고 관리할 수 있습니다.',
                },
            ],
        },

        // CTA
        cta: {
            title1: '오늘부터 당신의',
            title2: '성장 이야기를 기록하세요',
            desc1: 'PomoCal과 함께 집중 시간을 시각화하고,',
            desc2: '매일의 작은 성장을 확인하세요.',
            button: '무료 다운로드',
            meta: 'macOS 13.0+ · 무료 · 오프라인 사용 가능',
        },

        // Footer
        footer: {
            product: '제품',
            productLinks: {
                features: '핵심 기능',
                screenshots: '앱 미리보기',
                workflow: '작동 원리',
                techPrivacy: '기술 & 프라이버시',
            },
            download: '다운로드',
            downloadLinks: {
                macOS: 'macOS 앱',
                releaseNotes: '릴리스 노트',
            },
            sysReq1: 'macOS 13.0+',
            sysReq2: '무료 · 오프라인 동작',
            resources: '자료',
            resourceLinks: {
                github: 'GitHub',
                bugReport: '버그 리포트',
                docs: '문서',
            },
            legal: '법적 고지',
            legalLinks: {
                terms: '이용약관',
                privacy: '개인정보 처리방침',
            },
            langLabel: '한국어',
        },
    },

    en: {
        // Layout
        layout: {
            title: 'PomoCal — A Calendar That Records Your Growth',
            description: 'The perfect harmony of Pomodoro and Calendar. The most intuitive study management tool for macOS users.',
        },

        // Navbar
        navbar: {
            why: 'Why PomoCal?',
            features: 'Features',
            screenshots: 'App Preview',
            techPrivacy: 'Tech & Privacy',
            faq: 'FAQ',
        },

        // Hero
        hero: {
            badge: 'macOS Only · Free Download',
            headlineBefore: 'Beyond a simple timer,',
            headlineAccent: 'your growth',
            headlineAfter: ' recorded in a calendar.',
            subtext1: 'The perfect harmony of Pomodoro and Calendar.',
            subtext2: 'Visualize your focus time with PomoCal.',
            ctaPrimary: 'Download for macOS',
            ctaVersion: 'v0.1.0',
            ctaSecondary: 'Learn More',
        },

        // Updates
        updates: {
            badge: 'What\'s New',
            title: 'Introducing PomoCal 1.2',
            items: [
                {
                    version: 'v1.2.0',
                    date: 'Feb 13, 2026',
                    label: 'Stopwatch Mode',
                    badge: 'New',
                    title: 'Measure time freely',
                    description: 'Use stopwatch mode when you want to focus without a preset timer. Time tracked in stopwatch mode is also automatically saved to your calendar.',
                },
                {
                    version: 'v1.1.0',
                    date: 'Jan 20, 2026',
                    label: 'Enhanced Statistics',
                    title: 'More intuitive data visualization',
                    description: 'We\'ve improved chart designs so you can see study time by category at a glance. Check weekly and monthly statistics more easily.',
                },
                {
                    version: 'v1.0.0',
                    date: 'Jan 1, 2026',
                    label: 'Auto Calendar Sync',
                    title: 'No more manual tracking',
                    description: 'When the timer ends, it\'s automatically logged to Apple Calendar. You don\'t need to worry about anything except focusing.',
                },
            ],
        },

        // PainPoint
        painPoint: {
            label: 'Why PomoCal?',
            title1: 'Are you wasting time',
            title2: 'switching between apps?',
            before: 'BEFORE',
            after: 'AFTER',
            apps: [
                { name: 'TickTick', category: 'To-Do' },
                { name: 'Apple Calendar', category: 'Scheduling' },
                { name: 'Focus Timer', category: 'Pomodoro' },
                { name: 'Notion / Notes', category: 'Study Log' },
            ],
            beforeDesc: 'Context switching kills focus. Data is scattered. You eventually stop tracking.',
            solutionTagline: 'Focus, Record, Manage — All in One',
            solutionBadges: ['Pomodoro', 'Calendar', 'Todos', 'Stats', 'Books'],
            afterDesc: 'Start a timer and it auto-logs to your calendar. No more switching apps.',
        },

        // Features
        features: {
            label: 'Core Features',
            title1: 'So you can focus on what matters —',
            title2: 'PomoCal handles the rest.',
            items: [
                {
                    title: 'Synced Focus',
                    description: 'When the timer ends, it\'s automatically logged to your system calendar. Focus without the hassle of manual tracking.',
                },
                {
                    title: 'Book-Centered Study',
                    description: 'Set and manage study goals linked to the books you\'re reading through Google Books API integration.',
                },
                {
                    title: 'Data Visualization',
                    description: 'See at a glance where you\'ve spent the most time through summary charts by category.',
                },
            ],
        },

        // Screenshots
        screenshots: {
            label: 'App Preview',
            title1: 'Intuitive interface,',
            title2: 'powerful features',
            subtitle: 'An all-in-one study tool that\'s simple yet has everything you need',
            prevLabel: 'Previous',
            nextLabel: 'Next',
            slideLabel: 'Slide',
            items: [
                { title: 'Main Screen', desc: 'Calendar, to-dos, and Pomodoro timer in one view' },
                { title: 'Book Library', desc: 'Search textbooks and connect them to your study' },
                { title: 'Add Study Session', desc: 'Plan systematically with categories and textbooks' },
                { title: 'Focus Mode', desc: 'Deep focus with the Pomodoro timer' },
                { title: 'Break Timer', desc: 'Automatically transitions to break time after focus' },
                { title: 'Study Statistics', desc: 'Analyze time investment by category with charts' },
            ],
        },

        // Workflow
        workflow: {
            label: 'How It Works',
            title1: 'Your study routine',
            title2: 'completed in 4 steps',
            subtitle: 'Experience a natural workflow without complex setup.',
            steps: [
                { title: 'Plan', subtitle: 'Write Todos' },
                { title: 'Focus', subtitle: 'Run Pomodoro' },
                { title: 'Record', subtitle: 'Auto Calendar Sync' },
                { title: 'Analyze', subtitle: 'View Statistics' },
            ],
        },

        // TechPrivacy
        techPrivacy: {
            label: 'Tech & Privacy',
            title1: 'Reliable technology,',
            title2: 'secure data',
            items: [
                {
                    label: 'Native & Swift',
                    title: 'Built for macOS',
                    description: 'A native app built with SwiftUI, delivering the fastest and most stable experience on the latest macOS. Uses minimal system resources with instant responsiveness.',
                },
                {
                    label: 'Privacy First',
                    title: 'Your data belongs<br/>to you',
                    description: 'Stored only on iCloud Drive and locally — never on external servers. No study data is ever transmitted externally, ensuring complete privacy.',
                },
            ],
        },

        // FAQ
        faq: {
            label: 'FAQ',
            title: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Is it available on Windows?',
                    answer: 'Currently, it is macOS only. PomoCal is built with SwiftUI, macOS\'s native framework, for optimal performance. We are considering Windows and mobile versions for the future.',
                },
                {
                    question: 'What happens to my data?',
                    answer: 'Don\'t worry. All data is securely stored locally and in your iCloud Drive. Even if you delete the app, your data remains safe in iCloud and can be restored at any time.',
                },
                {
                    question: 'Is it free?',
                    answer: 'Yes, the current beta version provides all features for free. Even after the official release, basic Pomodoro and calendar features will remain free forever.',
                },
                {
                    question: 'Does it sync with other calendars?',
                    answer: 'It seamlessly integrates with Apple Calendar (iCal). If you have Google Calendar or Outlook synced to Apple Calendar, you can view and manage them directly in PomoCal.',
                },
            ],
        },

        // CTA
        cta: {
            title1: 'Start recording',
            title2: 'your growth today',
            desc1: 'Visualize your focus time with PomoCal,',
            desc2: 'and track your small daily progress.',
            button: 'Free Download',
            meta: 'macOS 13.0+ · Free · Works Offline',
        },

        // Footer
        footer: {
            product: 'Product',
            productLinks: {
                features: 'Core Features',
                screenshots: 'App Preview',
                workflow: 'How It Works',
                techPrivacy: 'Tech & Privacy',
            },
            download: 'Download',
            downloadLinks: {
                macOS: 'macOS App',
                releaseNotes: 'Release Notes',
            },
            sysReq1: 'macOS 13.0+',
            sysReq2: 'Free · Works Offline',
            resources: 'Resources',
            resourceLinks: {
                github: 'GitHub',
                bugReport: 'Bug Report',
                docs: 'Documentation',
            },
            legal: 'Legal',
            legalLinks: {
                terms: 'Terms of Service',
                privacy: 'Privacy Policy',
            },
            langLabel: 'English',
        },
    },
} as const;

export type Locale = keyof typeof translations;
export type Translations = typeof translations[Locale];
