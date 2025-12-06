// fin_utils.js
// Shared utilities for FinAlizer
(function (root, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        root.finUtils = factory();
    }
})(typeof self !== 'undefined' ? self : this, function () {
    function parseNumberString(s) {
        if (s === null || s === undefined) return 0;
        s = String(s).trim();
        if (!s) return 0;

        const negative = /^\(.*\)$/.test(s);
        s = s.replace(/[()]/g, '');
        s = s.replace(/[\$£€¥\s]/g, '');

        let multiplier = 1;
        const mulMatch = s.match(/(bn|billion|m|million|k|thousand)$/i);
        if (mulMatch) {
            const token = mulMatch[0].toLowerCase();
            if (token.includes('bn') || token.includes('billion') || token === 'b') multiplier = 1e9;
            else if (token.includes('m') || token.includes('million')) multiplier = 1e6;
            else if (token.includes('k') || token.includes('thousand')) multiplier = 1e3;
            s = s.replace(/(bn|billion|m|million|k|thousand)$/i, '');
        }

        s = s.replace(/,/g, '');
        s = s.replace(/[^0-9.\-]/g, '');

        let v = parseFloat(s);
        if (isNaN(v)) v = 0;
        v = v * multiplier;
        return negative ? -v : v;
    }

    function metricToProgress(metricKey, value, unit) {
        if (value === null || value === undefined) return 0;
        if (unit === '%') return Math.max(0, Math.min(value, 100));
        switch (metricKey) {
            case 'currentRatio': return Math.max(0, Math.min((value / 3) * 100, 100));
            case 'debtToEquity': return Math.max(0, Math.min((value / 2) * 100, 100));
            case 'debtRatio': return Math.max(0, Math.min(value, 100));
            case 'roe': return Math.max(0, Math.min(value, 100));
            default: return Math.max(0, Math.min(value * 1, 100));
        }
    }

    function validateFinancialValue(value, min = 0, max = Infinity) {
        const num = parseNumberString(value);
        if (isNaN(num) || num < min || num > max) return null;
        return num;
    }

    function sanitizeInput(input) {
        return String(input).trim().substring(0, 100);
    }

    return {
        parseNumberString,
        metricToProgress,
        validateFinancialValue,
        sanitizeInput
    };
});
