/**
 * LIVE MATRIX DATA
 * Real-time updates for consciousness simulation monitoring
 */

(function() {
    'use strict';

    // =============================================
    // MOON PHASE CALCULATOR
    // =============================================
    function getMoonPhase() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();

        // Calculate Julian Day
        let jd = 367 * year - Math.floor((7 * (year + Math.floor((month + 9) / 12))) / 4)
            + Math.floor((275 * month) / 9) + day + 1721013.5;
        jd += (now.getUTCHours() + now.getUTCMinutes() / 60.0 + now.getUTCSeconds() / 3600.0) / 24.0;

        // Days since known new moon (Jan 6, 2000)
        const daysSinceNew = jd - 2451549.5;

        // Lunar cycle is ~29.53 days
        const newMoons = daysSinceNew / 29.53;
        const phase = (newMoons - Math.floor(newMoons));

        // Calculate illumination percentage
        const illumination = Math.round((1 - Math.cos(phase * 2 * Math.PI)) * 50);

        // Determine phase name and emoji
        let phaseName, phaseEmoji;
        if (phase < 0.0625) {
            phaseName = "New Moon";
            phaseEmoji = "🌑";
        } else if (phase < 0.1875) {
            phaseName = "Waxing Crescent";
            phaseEmoji = "🌒";
        } else if (phase < 0.3125) {
            phaseName = "First Quarter";
            phaseEmoji = "🌓";
        } else if (phase < 0.4375) {
            phaseName = "Waxing Gibbous";
            phaseEmoji = "🌔";
        } else if (phase < 0.5625) {
            phaseName = "Full Moon";
            phaseEmoji = "🌕";
        } else if (phase < 0.6875) {
            phaseName = "Waning Gibbous";
            phaseEmoji = "🌖";
        } else if (phase < 0.8125) {
            phaseName = "Last Quarter";
            phaseEmoji = "🌗";
        } else {
            phaseName = "Waning Crescent";
            phaseEmoji = "🌘";
        }

        return {
            emoji: phaseEmoji,
            name: phaseName,
            illumination: illumination
        };
    }

    // =============================================
    // UNIX TIMESTAMP
    // =============================================
    function getUnixTime() {
        return Math.floor(Date.now() / 1000);
    }

    // =============================================
    // POPULATION ESTIMATOR
    // =============================================
    // Base: ~8.045 billion as of Nov 2024
    // Growth: ~2.5 births/sec, ~1.8 deaths/sec = ~0.7 net increase/sec
    const BASE_POPULATION = 8045311447;
    const BASE_TIMESTAMP = 1731705600; // Nov 15, 2024 00:00 UTC
    const NET_GROWTH_PER_SECOND = 0.7;

    function getEstimatedPopulation() {
        const now = Math.floor(Date.now() / 1000);
        const elapsed = now - BASE_TIMESTAMP;
        const estimated = BASE_POPULATION + (elapsed * NET_GROWTH_PER_SECOND);
        return Math.floor(estimated).toLocaleString('en-US');
    }

    // =============================================
    // BITCOIN PRICE FETCHER
    // =============================================
    let lastBtcPrice = null;
    let btcDirection = null;

    async function getBtcPrice() {
        try {
            // Using CoinGecko free API (no key needed)
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
            const data = await response.json();
            const price = data.bitcoin.usd;

            // Determine direction
            if (lastBtcPrice !== null) {
                if (price > lastBtcPrice) {
                    btcDirection = 'up';
                } else if (price < lastBtcPrice) {
                    btcDirection = 'down';
                } else {
                    btcDirection = null;
                }
            }

            lastBtcPrice = price;
            return {
                price: price.toLocaleString('en-US', { maximumFractionDigits: 0 }),
                direction: btcDirection
            };
        } catch (error) {
            console.error('Failed to fetch BTC price:', error);
            return { price: 'OFFLINE', direction: null };
        }
    }

    // =============================================
    // UPDATE FUNCTIONS
    // =============================================
    function updateMoonPhase() {
        const moonEl = document.getElementById('moonPhase');
        if (!moonEl) return;

        const moon = getMoonPhase();
        moonEl.classList.add('updating');
        setTimeout(() => {
            moonEl.textContent = `${moon.emoji} ${moon.illumination}% ${moon.name}`;
            moonEl.classList.remove('updating');
        }, 100);
    }

    function updateUnixTime() {
        const unixEl = document.getElementById('unixTime');
        if (!unixEl) return;

        unixEl.classList.add('updating');
        setTimeout(() => {
            unixEl.textContent = getUnixTime();
            unixEl.classList.remove('updating');
        }, 100);
    }

    function updatePopulation() {
        const popEl = document.getElementById('population');
        if (!popEl) return;

        popEl.classList.add('updating');
        setTimeout(() => {
            popEl.textContent = getEstimatedPopulation();
            popEl.classList.remove('updating');
        }, 100);
    }

    async function updateBtcPrice() {
        const btcEl = document.getElementById('btcPrice');
        if (!btcEl) return;

        const btc = await getBtcPrice();

        btcEl.classList.add('updating');

        // Remove old direction classes
        btcEl.classList.remove('up', 'down');

        setTimeout(() => {
            const arrow = btc.direction === 'up' ? '↗' : btc.direction === 'down' ? '↘' : '';
            btcEl.textContent = `$${btc.price} ${arrow}`;

            // Add direction class for color
            if (btc.direction) {
                btcEl.classList.add(btc.direction);
            }

            btcEl.classList.remove('updating');
        }, 100);
    }

    // =============================================
    // INITIALIZATION
    // =============================================
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initial updates
        updateMoonPhase();
        updateUnixTime();
        updatePopulation();
        updateBtcPrice();

        // Set up intervals
        // Unix time: every 1 second
        setInterval(updateUnixTime, 1000);

        // Population: every 5 seconds (grows continuously)
        setInterval(updatePopulation, 5000);

        // Moon phase: every 1 hour (doesn't change much)
        setInterval(updateMoonPhase, 3600000);

        // BTC price: every 30 seconds (API rate limit friendly)
        setInterval(updateBtcPrice, 30000);

        console.log('◈ LIVE MATRIX DATA INITIALIZED ◈');
    }

    // Start initialization
    init();

})();
