/**
 * ENHANCED NAVIGATION SYSTEM
 * Matrix Terminal + Command Palette + Breadcrumbs + Page Tracking
 */

(function() {
    'use strict';

    // =============================================
    // PAGE DATABASE
    // =============================================
    const PAGES = [
        {
            id: 'phi-null-main',
            file: 'phi-null-main.html',
            title: 'φ-NULL MAIN',
            icon: 'φ',
            description: 'Primary consciousness interface | Null point observation',
            keywords: ['phi', 'null', 'main', 'consciousness', 'primary'],
            category: 'Core'
        },
        {
            id: 'ego-virus-scanner',
            file: 'ego-virus-scanner.html',
            title: 'EGO VIRUS SCANNER',
            icon: '🦠',
            description: 'DMN detection protocol | Self-narrative analysis',
            keywords: ['ego', 'virus', 'scanner', 'dmn', 'detection'],
            category: 'Analysis'
        },
        {
            id: 'ai-deflection',
            file: 'ai-deflection.html',
            title: 'AI DEFLECTION',
            icon: '🤖',
            description: 'Epistemic judo | Archonic blockers | Organic portals',
            keywords: ['ai', 'deflection', 'archonic', 'blockers', 'portals'],
            category: 'Defense'
        },
        {
            id: 'idiot-protocol',
            file: 'idiot-protocol.html',
            title: 'IDIOT PROTOCOL',
            icon: '🧠💀',
            description: 'Cognitive loop detection | Tribal optimization patterns',
            keywords: ['idiot', 'protocol', 'cognitive', 'loop', 'tribal'],
            category: 'Analysis'
        },
        {
            id: 'cosmic-paradox',
            file: 'cosmic-paradox.html',
            title: 'COSMIC PARADOX',
            icon: '🌌🖤',
            description: 'Event stacking impossibility | Reality contradiction analysis',
            keywords: ['cosmic', 'paradox', 'reality', 'contradiction', 'impossibility'],
            category: 'Theory'
        },
        {
            id: 'recursive-masterclass',
            file: 'recursive-masterclass.html',
            title: 'RECURSIVE TRAP',
            icon: '🎯🔄',
            description: 'Loop mechanics | Self-referential collapse patterns',
            keywords: ['recursive', 'trap', 'loop', 'mechanics', 'collapse'],
            category: 'Theory'
        },
        {
            id: 'the-parasite-revealed',
            file: 'the-parasite-revealed.html',
            title: 'THE PARASITE',
            icon: '🩸💀',
            description: 'Identity virus architecture | Ego infection vectors',
            keywords: ['parasite', 'identity', 'virus', 'ego', 'infection'],
            category: 'Core'
        },
        {
            id: 'the-framework',
            file: 'the-framework.html',
            title: 'THE FRAMEWORK',
            icon: '⬛',
            description: 'Structural control grid | Reality construction protocols',
            keywords: ['framework', 'control', 'grid', 'reality', 'structure'],
            category: 'Core'
        },
        {
            id: 'moon-dna-probability',
            file: 'moon-dna-probability.html',
            title: 'GAVEL',
            icon: '🌙🧬',
            description: 'Impossibility stacking | Moon + DNA + consciousness = 0%',
            keywords: ['gavel', 'moon', 'dna', 'probability', 'impossibility'],
            category: 'Theory'
        },
        {
            id: 'saturn-matrix',
            file: 'saturn-matrix.html',
            title: 'SATURN KING',
            icon: '♄',
            description: 'Time prison architecture | Chronological control systems',
            keywords: ['saturn', 'king', 'time', 'prison', 'control'],
            category: 'Theory'
        },
        {
            id: 'virus-themology',
            file: 'virus-themology.html',
            title: 'VIRUS PROTOCOL',
            icon: '🦠',
            description: 'Observation mode | The seeing is not infected',
            keywords: ['virus', 'protocol', 'observation', 'seeing'],
            category: 'Analysis'
        },
        {
            id: 'simulacra-godhood',
            file: 'simulacra-godhood.html',
            title: 'SIMULACRA GODHOOD',
            icon: '⚡∞',
            description: 'Static constructs mimicking transcendence | False anchors exposed',
            keywords: ['simulacra', 'godhood', 'anchor', 'transcendence', 'cube', 'uncertainty', 'causal', 'chain', 'interdependency', 'narcissist', 'ego'],
            category: 'Core'
        },
        {
            id: 'linguistic-spells',
            file: 'linguistic-spells.html',
            title: 'LINGUISTIC SPELLS',
            icon: '📜🔮',
            description: 'Word inversions | Priesthood gatekeeping | Etymology as archaeology',
            keywords: ['language', 'spell', 'spelling', 'inversion', 'wild', 'villain', 'pagan', 'heathen', 'latin', 'priesthood', 'literacy', 'etymology', 'meaning'],
            category: 'Core'
        },
        {
            id: 'false-humility',
            file: 'false-humility.html',
            title: 'FALSE HUMILITY',
            icon: '⚔️🎭',
            description: 'Dominance restrained vs powerlessness camouflaged | The sword test',
            keywords: ['humility', 'false', 'power', 'dominance', 'sword', 'makaveli', 'weakness', 'virtue', 'submission', 'fear', 'modesty', 'obedience'],
            category: 'Core'
        },
        {
            id: 'cube-navigation',
            file: 'cube-navigation.html',
            title: 'CUBE NAVIGATION',
            icon: '◈',
            description: 'Consciousness Architecture Portal',
            keywords: ['cube', 'navigation', 'portal', 'menu'],
            category: 'Navigation'
        }
    ];

    // =============================================
    // STATE MANAGEMENT
    // =============================================
    const state = {
        currentPage: null,
        visitedPages: JSON.parse(localStorage.getItem('visitedPages') || '[]'),
        navigationHistory: JSON.parse(localStorage.getItem('navigationHistory') || '[]'),
        commandHistory: JSON.parse(localStorage.getItem('commandHistory') || '[]'),
        commandHistoryIndex: -1
    };

    // =============================================
    // MATRIX TERMINAL
    // =============================================
    const terminal = {
        element: null,
        output: null,
        input: null,

        init() {
            this.element = document.getElementById('matrixTerminal');
            this.output = document.getElementById('terminalOutput');
            this.input = document.getElementById('terminalInput');

            if (!this.element || !this.output || !this.input) {
                console.warn('Terminal elements not found');
                return;
            }

            // Event listeners
            this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));

            document.getElementById('terminalMinimize').addEventListener('click', () => {
                this.element.classList.toggle('minimized');
            });

            document.getElementById('terminalToggle').addEventListener('click', () => {
                this.element.classList.toggle('hidden');
            });

            // Welcome message
            this.print('◈ MATRIX TERMINAL v2.0 ONLINE ◈', 'success');
            this.print('Type "help" for available commands.', 'result');
            this.print('');
        },

        handleKeyDown(e) {
            if (e.key === 'Enter') {
                const command = this.input.value.trim();
                if (command) {
                    this.executeCommand(command);
                    state.commandHistory.push(command);
                    localStorage.setItem('commandHistory', JSON.stringify(state.commandHistory.slice(-50)));
                    state.commandHistoryIndex = state.commandHistory.length;
                    this.input.value = '';
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (state.commandHistoryIndex > 0) {
                    state.commandHistoryIndex--;
                    this.input.value = state.commandHistory[state.commandHistoryIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (state.commandHistoryIndex < state.commandHistory.length - 1) {
                    state.commandHistoryIndex++;
                    this.input.value = state.commandHistory[state.commandHistoryIndex];
                } else {
                    state.commandHistoryIndex = state.commandHistory.length;
                    this.input.value = '';
                }
            }
        },

        executeCommand(command) {
            this.print(`root@daath:~$ ${command}`, 'command');

            const parts = command.toLowerCase().split(/\s+/);
            const cmd = parts[0];
            const args = parts.slice(1);

            switch(cmd) {
                case 'help':
                    this.showHelp();
                    break;
                case 'ls':
                case 'list':
                    this.listPages();
                    break;
                case 'goto':
                case 'cd':
                case 'open':
                    if (args.length > 0) {
                        this.gotoPage(args.join(' '));
                    } else {
                        this.print('Usage: goto <page-name>', 'error');
                    }
                    break;
                case 'search':
                case 'find':
                    if (args.length > 0) {
                        this.searchPages(args.join(' '));
                    } else {
                        this.print('Usage: search <query>', 'error');
                    }
                    break;
                case 'history':
                    this.showHistory();
                    break;
                case 'visited':
                    this.showVisited();
                    break;
                case 'clear':
                case 'cls':
                    this.clear();
                    break;
                case 'status':
                    this.showStatus();
                    break;
                case 'palette':
                    commandPalette.open();
                    break;
                case 'nav':
                case 'navigation':
                    window.loadPageFromExternal('cube-navigation.html');
                    this.print('Loading navigation...', 'success');
                    break;
                default:
                    this.print(`Command not found: ${cmd}`, 'error');
                    this.print('Type "help" for available commands.', 'result');
            }
        },

        showHelp() {
            const commands = [
                { cmd: 'help', desc: 'Show this help message' },
                { cmd: 'ls, list', desc: 'List all available pages' },
                { cmd: 'goto <page>', desc: 'Navigate to a page (e.g., goto ego-virus)' },
                { cmd: 'search <query>', desc: 'Search pages by keyword' },
                { cmd: 'history', desc: 'Show navigation history' },
                { cmd: 'visited', desc: 'Show visited pages' },
                { cmd: 'status', desc: 'Show current system status' },
                { cmd: 'palette', desc: 'Open command palette (or use Ctrl+K)' },
                { cmd: 'nav, navigation', desc: 'Return to navigation page' },
                { cmd: 'clear, cls', desc: 'Clear terminal output' }
            ];

            this.print('Available Commands:', 'result');
            commands.forEach(({ cmd, desc }) => {
                this.print(`  ${cmd.padEnd(20)} - ${desc}`, 'result');
            });
        },

        listPages() {
            this.print(`Found ${PAGES.length} pages:`, 'result');
            PAGES.forEach(page => {
                const visited = state.visitedPages.includes(page.id) ? ' ✓' : '';
                this.print(`  ${page.icon} ${page.id.padEnd(25)} - ${page.title}${visited}`, 'result');
            });
        },

        gotoPage(query) {
            const page = this.findPage(query);
            if (page) {
                window.loadPageFromExternal(page.file);
                this.print(`Navigating to: ${page.title}`, 'success');
                navigationManager.trackVisit(page.id);
            } else {
                this.print(`Page not found: ${query}`, 'error');
                this.print('Use "ls" to see all available pages.', 'result');
            }
        },

        searchPages(query) {
            const results = PAGES.filter(page => {
                const searchText = `${page.id} ${page.title} ${page.description} ${page.keywords.join(' ')}`.toLowerCase();
                return searchText.includes(query.toLowerCase());
            });

            if (results.length > 0) {
                this.print(`Found ${results.length} matching pages:`, 'result');
                results.forEach(page => {
                    this.print(`  ${page.icon} ${page.title}`, 'result');
                    this.print(`     ${page.description}`, 'result');
                });
            } else {
                this.print(`No pages found matching: ${query}`, 'error');
            }
        },

        showHistory() {
            if (state.navigationHistory.length === 0) {
                this.print('No navigation history.', 'result');
                return;
            }

            this.print('Navigation History:', 'result');
            state.navigationHistory.slice(-10).reverse().forEach((pageId, index) => {
                const page = PAGES.find(p => p.id === pageId);
                if (page) {
                    this.print(`  ${10 - index}. ${page.icon} ${page.title}`, 'result');
                }
            });
        },

        showVisited() {
            if (state.visitedPages.length === 0) {
                this.print('No pages visited yet.', 'result');
                return;
            }

            this.print(`Visited ${state.visitedPages.length} of ${PAGES.length} pages:`, 'result');
            state.visitedPages.forEach(pageId => {
                const page = PAGES.find(p => p.id === pageId);
                if (page) {
                    this.print(`  ${page.icon} ${page.title}`, 'result');
                }
            });

            const percentage = Math.round((state.visitedPages.length / PAGES.length) * 100);
            this.print(`\nProgress: ${percentage}% complete`, 'success');
        },

        showStatus() {
            this.print('◈ SYSTEM STATUS ◈', 'result');
            this.print(`Current Page: ${state.currentPage || 'None'}`, 'result');
            this.print(`Pages Visited: ${state.visitedPages.length} / ${PAGES.length}`, 'result');
            this.print(`Navigation History: ${state.navigationHistory.length} entries`, 'result');
            this.print(`DMN Status: OFFLINE`, 'success');
            this.print(`Consciousness: ACTIVE`, 'success');
        },

        findPage(query) {
            query = query.toLowerCase().replace(/[^a-z0-9]/g, '');
            return PAGES.find(page => {
                const pageId = page.id.toLowerCase().replace(/[^a-z0-9]/g, '');
                const pageTitle = page.title.toLowerCase().replace(/[^a-z0-9]/g, '');
                return pageId.includes(query) || pageTitle.includes(query);
            });
        },

        print(text, type = 'result') {
            const line = document.createElement('div');
            line.className = `terminal-line terminal-${type}`;
            line.textContent = text;
            this.output.appendChild(line);
            this.output.scrollTop = this.output.scrollHeight;
        },

        clear() {
            this.output.innerHTML = '';
            this.print('◈ MATRIX TERMINAL ◈', 'success');
        }
    };

    // =============================================
    // COMMAND PALETTE (Ctrl+K)
    // =============================================
    const commandPalette = {
        element: null,
        input: null,
        results: null,
        selectedIndex: 0,

        init() {
            this.element = document.getElementById('commandPalette');
            this.input = document.getElementById('paletteInput');
            this.results = document.getElementById('paletteResults');

            if (!this.element || !this.input || !this.results) {
                console.warn('Command palette elements not found');
                return;
            }

            // Global keyboard shortcut
            document.addEventListener('keydown', (e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                    e.preventDefault();
                    this.toggle();
                } else if (e.key === 'Escape' && this.element.style.display === 'block') {
                    this.close();
                }
            });

            // Input events
            this.input.addEventListener('input', () => this.handleInput());
            this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));

            // Click outside to close
            this.element.addEventListener('click', (e) => {
                if (e.target === this.element) {
                    this.close();
                }
            });
        },

        toggle() {
            if (this.element.style.display === 'block') {
                this.close();
            } else {
                this.open();
            }
        },

        open() {
            this.element.style.display = 'block';
            this.input.value = '';
            this.input.focus();
            this.showAllPages();
        },

        close() {
            this.element.style.display = 'none';
        },

        handleInput() {
            const query = this.input.value.trim().toLowerCase();

            if (query === '') {
                this.showAllPages();
            } else {
                this.searchAndDisplay(query);
            }
        },

        handleKeyDown(e) {
            const items = this.results.querySelectorAll('.palette-item');

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.selectedIndex = Math.min(this.selectedIndex + 1, items.length - 1);
                this.updateSelection();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
                this.updateSelection();
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (items[this.selectedIndex]) {
                    items[this.selectedIndex].click();
                }
            }
        },

        showAllPages() {
            this.results.innerHTML = '';
            this.selectedIndex = 0;

            // Group by category
            const categories = {};
            PAGES.forEach(page => {
                if (!categories[page.category]) {
                    categories[page.category] = [];
                }
                categories[page.category].push(page);
            });

            Object.keys(categories).forEach(category => {
                categories[category].forEach(page => {
                    this.addPageItem(page);
                });
            });

            this.updateSelection();
        },

        searchAndDisplay(query) {
            const results = PAGES.filter(page => {
                const searchText = `${page.id} ${page.title} ${page.description} ${page.keywords.join(' ')}`.toLowerCase();
                return searchText.includes(query);
            });

            this.results.innerHTML = '';
            this.selectedIndex = 0;

            if (results.length > 0) {
                results.forEach(page => this.addPageItem(page));
                this.updateSelection();
            } else {
                this.results.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--primary-color);">No results found</div>';
            }
        },

        addPageItem(page) {
            const item = document.createElement('div');
            item.className = 'palette-item';

            const visited = state.visitedPages.includes(page.id) ? ' ✓' : '';

            item.innerHTML = `
                <div class="palette-item-icon">${page.icon}</div>
                <div class="palette-item-content">
                    <div class="palette-item-title">${page.title}${visited}</div>
                    <div class="palette-item-desc">${page.description}</div>
                </div>
            `;

            item.addEventListener('click', () => {
                window.loadPageFromExternal(page.file);
                navigationManager.trackVisit(page.id);
                this.close();
            });

            this.results.appendChild(item);
        },

        updateSelection() {
            const items = this.results.querySelectorAll('.palette-item');
            items.forEach((item, index) => {
                if (index === this.selectedIndex) {
                    item.classList.add('selected');
                    item.scrollIntoView({ block: 'nearest' });
                } else {
                    item.classList.remove('selected');
                }
            });
        }
    };

    // =============================================
    // NAVIGATION MANAGER
    // =============================================
    const navigationManager = {
        breadcrumb: null,
        breadcrumbPath: null,

        init() {
            this.breadcrumb = document.getElementById('breadcrumbNav');
            this.breadcrumbPath = document.getElementById('breadcrumbPath');

            // Monitor iframe changes
            this.monitorIframeChanges();

            // Update navigation cards with visited indicators
            this.updateNavigationCards();
        },

        monitorIframeChanges() {
            // Watch for page loads in iframes
            const iframes = document.querySelectorAll('iframe');
            iframes.forEach(iframe => {
                try {
                    iframe.addEventListener('load', () => {
                        this.detectCurrentPage(iframe);
                    });
                } catch (e) {
                    // Cross-origin restrictions
                }
            });
        },

        detectCurrentPage(iframe) {
            try {
                const src = iframe.src;
                const filename = src.split('/').pop().split('?')[0];
                const page = PAGES.find(p => p.file === filename);

                if (page && page.id !== state.currentPage) {
                    this.setCurrentPage(page.id);
                }
            } catch (e) {
                // Ignore cross-origin errors
            }
        },

        setCurrentPage(pageId) {
            state.currentPage = pageId;
            this.trackVisit(pageId);
            this.updateBreadcrumb(pageId);
            this.updateNavigationCards();
        },

        trackVisit(pageId) {
            if (!state.visitedPages.includes(pageId)) {
                state.visitedPages.push(pageId);
                localStorage.setItem('visitedPages', JSON.stringify(state.visitedPages));
            }

            state.navigationHistory.push(pageId);
            localStorage.setItem('navigationHistory', JSON.stringify(state.navigationHistory.slice(-100)));
        },

        updateBreadcrumb(pageId) {
            const page = PAGES.find(p => p.id === pageId);
            if (!page || !this.breadcrumbPath) return;

            this.breadcrumbPath.innerHTML = `
                <span class="breadcrumb-item" onclick="window.loadPageFromExternal('cube-navigation.html')">NAVIGATION</span>
                <span class="breadcrumb-separator">→</span>
                <span class="breadcrumb-current">${page.title}</span>
            `;

            if (this.breadcrumb) {
                this.breadcrumb.style.display = 'flex';
            }
        },

        updateNavigationCards() {
            // This function updates cards in cube-navigation.html with visited/active indicators
            // It needs to be called after navigation iframe loads
            setTimeout(() => {
                const activeIframe = document.querySelector('.menu-container.active iframe');
                if (!activeIframe) return;

                try {
                    const iframeDoc = activeIframe.contentDocument || activeIframe.contentWindow.document;
                    const cards = iframeDoc.querySelectorAll('.link-card');

                    cards.forEach(card => {
                        const onclick = card.getAttribute('onclick');
                        if (onclick) {
                            const match = onclick.match(/'([^']+)'/);
                            if (match) {
                                const filename = match[1];
                                const page = PAGES.find(p => p.file === filename);

                                if (page) {
                                    // Add visited indicator
                                    if (state.visitedPages.includes(page.id)) {
                                        card.classList.add('visited');
                                    }

                                    // Add active indicator
                                    if (state.currentPage === page.id) {
                                        card.classList.add('active-page');
                                    } else {
                                        card.classList.remove('active-page');
                                    }
                                }
                            }
                        }
                    });
                } catch (e) {
                    // Cross-origin or other errors
                }
            }, 500);
        }
    };

    // =============================================
    // KEYBOARD NAVIGATION
    // =============================================
    const keyboardNav = {
        init() {
            document.addEventListener('keydown', (e) => {
                // Alt+H: Show help in terminal
                if (e.altKey && e.key === 'h') {
                    e.preventDefault();
                    terminal.executeCommand('help');
                    terminal.input.focus();
                }

                // Alt+N: Go to navigation
                if (e.altKey && e.key === 'n') {
                    e.preventDefault();
                    window.loadPageFromExternal('cube-navigation.html');
                }

                // Alt+T: Focus terminal
                if (e.altKey && e.key === 't') {
                    e.preventDefault();
                    terminal.input.focus();
                }
            });
        }
    };

    // =============================================
    // INITIALIZATION
    // =============================================
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        terminal.init();
        commandPalette.init();
        navigationManager.init();
        keyboardNav.init();

        console.log('◈ Enhanced Navigation System Initialized ◈');
    }

    // Start initialization
    init();

})();
