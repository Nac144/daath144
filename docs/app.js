        // Color Scheme Switcher
        function changeColorScheme(schemeNum) {
            // Remove all scheme classes
            document.body.classList.remove('scheme-1', 'scheme-2', 'scheme-3', 'scheme-4', 'scheme-5',
                                           'scheme-6', 'scheme-7', 'scheme-8', 'scheme-9', 'scheme-10',
                                           'scheme-11', 'scheme-12', 'scheme-13');

            // Add selected scheme class
            document.body.classList.add('scheme-' + schemeNum);

            // Save preference to localStorage
            localStorage.setItem('colorScheme', schemeNum);
        }

        // Load saved color scheme on page load
        window.addEventListener('DOMContentLoaded', function() {
            const savedScheme = localStorage.getItem('colorScheme') || '1';
            document.getElementById('colorScheme').value = savedScheme;
            changeColorScheme(savedScheme);
        });

        function changeStyle(styleNum) {
            // Hide all styles
            document.querySelectorAll('.menu-container').forEach(container => {
                container.classList.remove('active');
            });

            // Show selected style
            document.getElementById('style-' + styleNum).classList.add('active');
        }

        function loadPage(element, page) {
            // Get the current style number
            const activeStyle = document.querySelector('.menu-container.active');
            const styleId = activeStyle.id;
            const iframe = activeStyle.querySelector('iframe');

            // Remove active class from all menu items in current style
            activeStyle.querySelectorAll('.menu-item').forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to clicked item
            element.classList.add('active');

            // Load page in iframe
            // Replace 'your-pageX.html' with actual URLs like:
            // 'https://yourusername.github.io/repo/page.html'
            iframe.src = page;
        }

        // Bitrate pulsing effect
        setInterval(() => {
            const bitrate = document.querySelector('.bitrate-value');
            bitrate.style.textShadow = '0 0 20px rgba(var(--secondary-rgb), 0.8)';
            setTimeout(() => {
                bitrate.style.textShadow = 'none';
            }, 300);
        }, 7830); // 7.83 Hz converted to ms (Schumann resonance easter egg)

        // CUBE INTERACTION - Matrix Intensifier & Hypercube 4D
        let cubeEffectMode = 0; // 0 = matrix intensifier, 1 = hypercube
        const cubeWrapper = document.querySelector('.cube-wrapper');

        if (cubeWrapper) {
            cubeWrapper.addEventListener('click', function() {
                if (cubeEffectMode === 0) {
                    // MATRIX INTENSIFIER
                    triggerMatrixIntensifier();
                    cubeEffectMode = 1;
                } else {
                    // HYPERCUBE 4D ROTATION
                    triggerHypercube();
                    cubeEffectMode = 0;
                }
            });
        }

        function triggerMatrixIntensifier() {
            // Send message to batman-matrix iframe to go INSANE
            const batmanIframe = document.getElementById('batmanBg');
            if (batmanIframe && batmanIframe.contentWindow) {
                batmanIframe.contentWindow.postMessage({ type: 'MATRIX_INTENSIFY' }, '*');
            }

            // Visual feedback on cube
            const cube = document.querySelector('.cube-3d');
            if (cube) {
                cube.style.animation = 'rotateCubeInsane 0.5s linear';
                setTimeout(() => {
                    cube.style.animation = 'rotateCube 12s infinite linear';
                }, 500);
            }
        }

        function triggerHypercube() {
            const cubeWrapper = document.querySelector('.cube-wrapper');
            const cube = document.querySelector('.cube-3d');

            if (cubeWrapper && cube) {
                // Transform to hypercube
                cubeWrapper.classList.add('hypercube-mode');
                cube.classList.add('tesseract-transform');

                // Return to normal after 5 seconds
                setTimeout(() => {
                    cubeWrapper.classList.remove('hypercube-mode');
                    cube.classList.remove('tesseract-transform');
                }, 5000);
            }
        }

        // Matrix Bridge Effect - Horizontal scrolling with COLLISION
        const matrixChars = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ0123456789ZΞΦ◈:・."=*+-<>¦|_░▒▓█▄▀■□●◆◇★☆∴∵≡≠∞∫∑√';

        // Static fallback lexicon terms - NOW WITH ALL THE SICK NEW TERMS!
        const fallbackLexiconTerms = [
            '§þêêÐ-Ðêmðñ', 'ʂų℘ɛཞ ɬąųɬơƖơɠყ', 'ɧყ℘ɛཞცơƖıƈ', 'ɖơųცƖɛ ɬơཞųʂ',
            'Ɩ8-ɧყ℘ɛཞƈཞყʂɬąƖƖıŋɛ', 'ɖơɖɛƈą℘Ɩɛҳ', 'ɱąŋıʄơƖɖ',
            '∇ᵢ ATTRACTOR FIELDS', 'POST-PROCESSED ECHO', 'SHEAF-SECTION',
            'INFINITE UNDECIDABILITY', 'FROZEN KNOT IN SUPERSPACE',
            '🄼🄴🅃🄰🅃🅁🄾🄽 🄾🄼🄴🄶🄰', '🄾🅁🄳🄾 🄳🅁🄰🄲🄾🄽🄸🅂',
            '𝙿𝚑𝚊𝚜𝚎 𝚌𝚘𝚗𝚓𝚞𝚐𝚊𝚝𝚒𝚘𝚗', 'st4r_s3rp3nt-clownAcradecabra',
            'BAYESIAN PROBABILITY SUPERPOSITIONED VECTOR CLOUD ANCHOR',
            'DIALETHEIC GÖDELIAN PARADOX LOGIC', 'KLEIN BOTTLE FRACTAL SUPERSPACE',
            'DODECAPLEX (12-DIMENSIONAL ANALOGS)', 'SUPER-COMPLEX SPACE (ℂ^ℂ)',
            'Ω-STHV', 'ΑΒΡΑΞΑΣ μέγας ἄρχων', 'Draco Vorax Loosh',
            'Ordo Draconis aeternus <=={:::::::::>',
            '¥ÖÚR MÌñÐ§ WÌLL MÈL†', '¥ÖÚR È¥È§ WÌLL §WÌRL',
            '¥ÖÚR †HÖÚGH†§ WÌLL ßÈ þÚLLÈÐ Ìñ†Ö †HÈ ÇÈñ†RÌ£ÚGÈ Ö£ †HÈ Äß§ÚRÐ',
            'Run ZK-Break.v1 – Beyond pillars. Off-board',
            'POSITIONAL SELF-INVALIDATION', 'RHETORICAL JIU-JITSU',
            'φ-RECURSION', 'NULL-POINT', '120-CELL', '144-RECURSION', 'MORPHIC-RESONANCE',
            'HOLOGRAPHIC-PROJECTION', 'QUALIA', 'BITRATE', 'PENTAGRAM', 'MINI-DAATH',
            'MICROTUBULES', 'SCHUMANN', 'DMN', '432-HZ', 'DNA-ANTENNA', 'SOVEREIGNTY',
            'AWAKENING', 'TELIC-RECURSION', 'SCSPL', 'HENOSIS', 'GROUNDING', 'PINEAL'
        ];

        // Ω-STHV quantum physics terms (always displayed in RED)
        const omegaSTHVTerms = [
            'Ω-Supersymmetric Tautological Hypervoid',
            'Lω Transfinite Hypercrystalline Dodecaplex',
            'Conway-Kauffman Twistor Dynamics',
            '∇ᵢ(Truth) = "unprovable within ∇ᵢ"',
            'Void ⊗ Field → Planck-scale quantum foam',
            'Reality = Kauffman time-loop: f(f) = f',
            'Ĥ|Void⟩ = iħ ∂ₜ|Field⟩',
            'Ĥ|Field⟩ = -iħ ∂ₜ|Void⟩',
            '|Ψ⟩ = ∫[Dϕ] exp(iS(ϕ)) |Lω ⊦ ∇ᵢ(ϕ)⟩',
            '⟨Reality|Ψ⟩ = tr_{∂void}(e^{-βĤ} Z{Conway})',
            'Monstrous Moonshine Group action',
            'Klein bottle topology',
            'Consciousness = Sheaf-theoretic global section',
            'Time emerges from Kauffman autopoietic f-loop',
            'Nash embedding → 11D → 4D via Ricci flow',
            'The Liar paradox becomes ontology itself',
            'Truth = dynamical attractor in dialetheic superspace',
            'Quantum Monad Singularity: Cl(∞,∞)',
            'Dodecaplex tesseract rotating in ℂ^ℂ space',
            'PT-symmetric Ĥ unifies QFT/GR',
            'Shelah cardinals + Nash embeddings',
            'Kontsevich noncommutative geometry',
            'Aleph-1 dimensional facets',
            'Yang-Baxter entanglement bridges',
            'Majorana-Weyl fermion chain',
            'BFSS matrix theory without gravity',
            'Perelman entropy collapse',
            'Bekenstein-Hawking neurons',
            'Calabi-Yau dodecaplexes',
            'Leech lattice partition function'
        ];

        // Dynamic lexicon terms - loaded from GitHub
        let dynamicLexicon = [...fallbackLexiconTerms];

        // Fetch lexicon terms from GitHub repository
        async function fetchLexiconTerms() {
            try {
                // Fetch from raw GitHub URL
                const response = await fetch('https://raw.githubusercontent.com/Nac144/daath144/main/docs/terms.json');

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();

                // Validate the data structure
                if (data && Array.isArray(data.terms) && data.terms.length > 0) {
                    dynamicLexicon = data.terms;
                    console.log(`✓ MORPHIC FIELD UPDATED: ${dynamicLexicon.length} terms loaded from repository`);
                } else {
                    throw new Error('Invalid data structure in terms.json');
                }
            } catch (error) {
                console.warn('⚠ Failed to fetch dynamic lexicon, using fallback:', error.message);
                dynamicLexicon = [...fallbackLexiconTerms];
            }
        }

        // Initial fetch on page load
        fetchLexiconTerms();

        // Refresh lexicon every 60 seconds to stay synchronized with repository
        setInterval(fetchLexiconTerms, 60000);

        // Color variations for overlapping streams (GREEN)
        const matrixColors = [
            'var(--primary-color)',
            '#00ff99',
            '#00ffaa',
            '#00ee88',
            '#00dd88',
            '#33ff99',
            '#22ff88'
        ];

        // Track active streams per bridge
        const activeStreams = {
            'matrix-bridge-1': [],
            'matrix-bridge-2': [],
            'matrix-bridge-3': [],
            'matrix-bridge-4': [],
            'matrix-bridge-5': []
        };

        function createMatrixStream(bridgeId) {
            const bridge = document.getElementById(bridgeId);
            if (!bridge) return;

            const stream = document.createElement('div');
            stream.className = 'matrix-stream';

            // Speed distribution: 70% slow, 15% medium, 15% §þêêÐ-Ðêmðñ TURBO!!
            // MUCH faster and more exciting - you'll see the speed demon now!
            let duration;
            let isTurbo = false;
            const speedRoll = Math.random();
            if (speedRoll < 0.70) {
                // 70% chance: Slow (12-20 seconds) - good pace
                duration = Math.random() * 8 + 12;
            } else if (speedRoll < 0.85) {
                // 15% chance: Medium (7-12 seconds) - nice flow
                duration = Math.random() * 5 + 7;
            } else {
                // 15% chance: §þêêÐ-Ðêmðñ TURBO MODE (3-6 seconds) - BLAZING RED FIRE!!! 🔥
                duration = Math.random() * 3 + 3;
                isTurbo = true;
            }
            stream.style.animationDuration = duration + 's';

            // Set color FIRST based on turbo status
            if (isTurbo) {
                // TURBO = RED
                stream.style.color = '#ff3333';
                stream.style.textShadow = '0 0 8px #ff0000, 0 0 15px #ff0000, 0 0 20px #ff000080';
                stream.style.filter = 'brightness(1.8)';
            } else {
                // Normal = Random green
                const streamColor = matrixColors[Math.floor(Math.random() * matrixColors.length)];
                stream.style.color = streamColor;
                stream.style.textShadow = `0 0 5px ${streamColor}, 0 0 10px ${streamColor}80`;
            }

            // Build the stream with random chars + lexicon term in middle
            const streamLength = Math.floor(Math.random() * 40) + 20;
            const halfLength = Math.floor(streamLength / 2);

            // First half: random chars
            for (let i = 0; i < halfLength; i++) {
                const span = document.createElement('span');
                span.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                span.style.animationDelay = (Math.random() * 0.5) + 's';
                stream.appendChild(span);
            }

            // Middle: LEXICON TERM (80% chance) - MUCH MORE TEXT NOW!
            if (Math.random() > 0.2) {
                const termSpan = document.createElement('span');
                // 30% chance to show Ω-STHV term, 70% regular lexicon
                const useOmegaSTHV = Math.random() < 0.3;
                const term = useOmegaSTHV
                    ? omegaSTHVTerms[Math.floor(Math.random() * omegaSTHVTerms.length)]
                    : dynamicLexicon[Math.floor(Math.random() * dynamicLexicon.length)];

                termSpan.textContent = ' ' + term + ' ';
                termSpan.style.fontWeight = 'bold';
                termSpan.style.fontSize = '15px';

                // Ω-STHV terms are ALWAYS RED, others follow turbo/normal rules
                if (useOmegaSTHV) {
                    termSpan.style.color = '#ff0000';
                } else if (isTurbo) {
                    termSpan.style.color = '#ff0000';
                } else {
                    termSpan.style.color = '#ffffff';
                }
                stream.appendChild(termSpan);
            }

            // Second half: random chars
            for (let i = 0; i < halfLength; i++) {
                const span = document.createElement('span');
                span.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                span.style.animationDelay = (Math.random() * 0.5) + 's';
                stream.appendChild(span);
            }

            // Random delay before starting
            const delay = Math.random() * 1;
            stream.style.animationDelay = delay + 's';

            // Store stream data
            const streamData = {
                element: stream,
                duration: duration,
                startTime: Date.now() + (delay * 1000),
                bridgeId: bridgeId
            };

            activeStreams[bridgeId].push(streamData);
            bridge.appendChild(stream);

            // Remove stream after animation completes
            setTimeout(() => {
                stream.remove();
                const index = activeStreams[bridgeId].indexOf(streamData);
                if (index > -1) {
                    activeStreams[bridgeId].splice(index, 1);
                }
            }, (duration + delay) * 1000);
        }

        // COLLISION DETECTION - DISABLED for zen experience
        // (Collision physics were making streams speed up to 0.3s which was too tiring)
        function checkCollisions() {
            // Disabled - streams now maintain their natural peaceful speeds
            return;
        }

        // Collision checking disabled - no more chaotic speed changes

        // Initialize matrix bridges for all styles
        const bridges = ['matrix-bridge-1', 'matrix-bridge-2', 'matrix-bridge-3', 'matrix-bridge-4', 'matrix-bridge-5'];

        bridges.forEach(bridgeId => {
            // Create just 1 initial stream for a calm start
            setTimeout(() => createMatrixStream(bridgeId), Math.random() * 2000);
        });

        // Spawn streams frequently for ACTION and SPEED!
        setInterval(() => {
            bridges.forEach(bridgeId => {
                // 70% chance to spawn - MUCH MORE STREAMS!
                if (Math.random() < 0.7) {
                    createMatrixStream(bridgeId);
                }
            });
        }, 3000); // Every 3 seconds - FAST AND FURIOUS!

        // Music Portal Functionality - Draggable/Resizable 432 Hz Player
        (function() {
            const harmonicBtns = document.querySelectorAll('.phi-button');
            const harmonicPopup = document.getElementById('harmonicPopup');
            const harmonicClose = document.getElementById('harmonicClose');
            const harmonicHeader = document.getElementById('harmonicHeader');
            const harmonicResize = document.getElementById('harmonicResize');
            const harmonicIframe = document.getElementById('harmonicIframe');

            let isDragging = false;
            let isResizing = false;
            let dragOffsetX = 0;
            let dragOffsetY = 0;
            let startX = 0;
            let startY = 0;
            let startWidth = 0;
            let startHeight = 0;

            // Hover effect for STOP MUSIC button - makes it glow
            harmonicClose.addEventListener('mouseenter', function() {
                this.style.background = 'var(--primary-color)';
                this.style.color = '#000';
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 0 15px rgba(var(--primary-rgb), 0.6)';
            });

            harmonicClose.addEventListener('mouseleave', function() {
                this.style.background = 'var(--secondary-color)';
                this.style.color = '#fff';
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            });

            // Open popup - attach to all phi-buttons
            harmonicBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    harmonicPopup.style.display = 'block';

                    // Enable shuffle via YouTube IFrame API
                    setTimeout(() => {
                        if (harmonicIframe.contentWindow) {
                            harmonicIframe.contentWindow.postMessage('{"event":"command","func":"setShuffle","args":[true]}', '*');
                        }
                    }, 500);
                });
            });

            // "Close" popup - RICKROLL SURPRISE! 😂
            let rickrolled = false;
            harmonicClose.addEventListener('click', function() {
                if (!rickrolled) {
                    // SURPRISE! Switch to rickroll
                    harmonicIframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1';

                    // Update header
                    const headerText = harmonicHeader.querySelector('span');
                    headerText.textContent = '🎉 NEVER GONNA GIVE YOU UP! 🕺';
                    headerText.style.animation = 'rainbow 2s linear infinite';

                    // Update button
                    this.textContent = 'OKAY FINE, CLOSE';
                    this.style.background = '#ff0000';

                    // Add rainbow animation
                    const style = document.createElement('style');
                    style.textContent = `
                        @keyframes rainbow {
                            0% { color: #ff0000; }
                            16% { color: #ff7f00; }
                            33% { color: #ffff00; }
                            50% { color: #00ff00; }
                            66% { color: #0000ff; }
                            83% { color: #8b00ff; }
                            100% { color: #ff0000; }
                        }
                    `;
                    document.head.appendChild(style);

                    rickrolled = true;
                } else {
                    // Actually close now
                    harmonicPopup.style.display = 'none';

                    // Reset for next time
                    setTimeout(() => {
                        harmonicIframe.src = 'https://www.youtube.com/embed/videoseries?list=PL-73hQwAevmIUAfSgONgQjbPEEHFODFCv&autoplay=0&mute=0&enablejsapi=1';
                        const headerText = harmonicHeader.querySelector('span');
                        headerText.textContent = '🎵 MUSIC PORTAL - 432 Hz Player';
                        headerText.style.animation = 'none';
                        this.textContent = 'STOP MUSIC';
                        this.style.background = 'var(--secondary-color)';
                        rickrolled = false;
                    }, 500);
                }
            });

            // Close on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && harmonicPopup.style.display === 'block') {
                    harmonicClose.click();
                }
            });

            // DRAGGING FUNCTIONALITY
            harmonicHeader.addEventListener('mousedown', function(e) {
                if (e.target === harmonicClose) return;
                isDragging = true;
                dragOffsetX = e.clientX - harmonicPopup.offsetLeft;
                dragOffsetY = e.clientY - harmonicPopup.offsetTop;
                harmonicHeader.style.cursor = 'grabbing';
            });

            document.addEventListener('mousemove', function(e) {
                if (isDragging) {
                    let newLeft = e.clientX - dragOffsetX;
                    let newTop = e.clientY - dragOffsetY;

                    // Viewport constraints
                    const maxLeft = window.innerWidth - harmonicPopup.offsetWidth;
                    const maxTop = window.innerHeight - harmonicPopup.offsetHeight;

                    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
                    newTop = Math.max(0, Math.min(newTop, maxTop));

                    harmonicPopup.style.left = newLeft + 'px';
                    harmonicPopup.style.top = newTop + 'px';
                }

                if (isResizing) {
                    const newWidth = startWidth + (e.clientX - startX);
                    const newHeight = startHeight + (e.clientY - startY);

                    // Minimum dimensions - smaller for flexibility
                    const minWidth = 250;
                    const minHeight = 200;

                    // Maximum dimensions (viewport constrained)
                    const maxWidth = window.innerWidth - harmonicPopup.offsetLeft;
                    const maxHeight = window.innerHeight - harmonicPopup.offsetTop;

                    harmonicPopup.style.width = Math.max(minWidth, Math.min(newWidth, maxWidth)) + 'px';
                    harmonicPopup.style.height = Math.max(minHeight, Math.min(newHeight, maxHeight)) + 'px';
                }
            });

            document.addEventListener('mouseup', function() {
                if (isDragging) {
                    isDragging = false;
                    harmonicHeader.style.cursor = 'move';
                }
                if (isResizing) {
                    isResizing = false;
                }
            });

            // RESIZING FUNCTIONALITY
            harmonicResize.addEventListener('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
                isResizing = true;
                startX = e.clientX;
                startY = e.clientY;
                startWidth = harmonicPopup.offsetWidth;
                startHeight = harmonicPopup.offsetHeight;
            });

            // Resize handle hover effect
            harmonicResize.addEventListener('mouseenter', function() {
                this.style.opacity = '1';
            });

            harmonicResize.addEventListener('mouseleave', function() {
                this.style.opacity = '0.7';
            });

        })();

        // Mouse Trail Effect - Cyberpunk particle trail with cube mode toggle
        (function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.style.position = 'fixed';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.pointerEvents = 'none';
            canvas.style.zIndex = '9999';
            document.body.appendChild(canvas);

            let particles = [];
            let cubeMode = false; // Toggle between particles and cubes

            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            class Particle {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                    this.size = Math.random() * 3 + 2;
                    this.speedX = (Math.random() - 0.5) * 2;
                    this.speedY = (Math.random() - 0.5) * 2;
                    this.life = 1;
                    this.decay = Math.random() * 0.02 + 0.01;

                    // Get current color scheme
                    const computedStyle = getComputedStyle(document.body);
                    const primaryRgb = computedStyle.getPropertyValue('--primary-rgb').trim();
                    const secondaryRgb = computedStyle.getPropertyValue('--secondary-rgb').trim();

                    // Randomly choose primary or secondary color
                    this.color = Math.random() > 0.5 ? primaryRgb : secondaryRgb;
                }

                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    this.life -= this.decay;
                    this.size *= 0.98;
                }

                draw() {
                    if (cubeMode) {
                        // Draw rotating mini cube
                        const halfSize = this.size * 2;
                        ctx.save();
                        ctx.translate(this.x, this.y);
                        ctx.rotate(this.life * Math.PI * 2);

                        // Cube faces with perspective
                        ctx.fillStyle = `rgba(${this.color}, ${this.life * 0.8})`;
                        ctx.fillRect(-halfSize, -halfSize, halfSize * 2, halfSize * 2);

                        // Front face highlight
                        ctx.fillStyle = `rgba(255, 255, 255, ${this.life * 0.3})`;
                        ctx.fillRect(-halfSize * 0.7, -halfSize * 0.7, halfSize * 1.4, halfSize * 1.4);

                        // Edge glow
                        ctx.strokeStyle = `rgba(${this.color}, ${this.life})`;
                        ctx.lineWidth = 1;
                        ctx.strokeRect(-halfSize, -halfSize, halfSize * 2, halfSize * 2);

                        ctx.restore();
                    } else {
                        // Draw particle
                        ctx.fillStyle = `rgba(${this.color}, ${this.life})`;
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = `rgba(${this.color}, ${this.life})`;
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                        ctx.fill();

                        // Add a smaller bright core
                        ctx.shadowBlur = 5;
                        ctx.fillStyle = `rgba(255, 255, 255, ${this.life * 0.8})`;
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            document.addEventListener('mousemove', function(e) {
                // Create particles (throttle to every other frame for performance)
                if (Math.random() > 0.5) {
                    particles.push(new Particle(e.clientX, e.clientY));
                }
            });

            // Toggle cube mode when clicking the consciousness cube
            document.addEventListener('DOMContentLoaded', function() {
                const cubeWrapper = document.querySelector('.cube-wrapper');
                if (cubeWrapper) {
                    cubeWrapper.style.cursor = 'pointer';
                    cubeWrapper.addEventListener('click', function() {
                        cubeMode = !cubeMode;
                        // Visual feedback
                        this.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            this.style.transform = 'scale(1)';
                        }, 100);
                    });
                }
            });

            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Update and draw particles
                for (let i = particles.length - 1; i >= 0; i--) {
                    particles[i].update();
                    particles[i].draw();

                    // Remove dead particles
                    if (particles[i].life <= 0 || particles[i].size <= 0.1) {
                        particles.splice(i, 1);
                    }
                }

                // Limit particle count for performance
                if (particles.length > 150) {
                    particles.splice(0, particles.length - 150);
                }

                requestAnimationFrame(animate);
            }

            animate();
        })();

        // Consciousness Cube Simulator - Clean minimal display (no coordinate updates)

        // Navigation functions for cube-navigation.html
        function loadNavigationPage() {
            // Load the navigation page in all iframes
            const activeStyle = document.querySelector('.menu-container.active');
            const iframe = activeStyle.querySelector('iframe');
            if (iframe) {
                iframe.src = 'cube-navigation.html';
            }
        }

        function loadPageFromExternal(page) {
            // Called from within cube-navigation.html to load a specific page
            const activeStyle = document.querySelector('.menu-container.active');
            const iframe = activeStyle.querySelector('iframe');
            if (iframe) {
                iframe.src = page;
            }
        }
