# FinAlizer ⚡

**Advanced Financial Statement Analysis Platform**  
🔐 **100% Privacy • No Servers • Open Source • MIT License**

An intelligent, web-based financial statement analyzer that uses PDF.js for text extraction and Tesseract.js for OCR to automatically analyze financial statements and generate insights. Built with a modern dark theme and futuristic design.

## ✨ Features

- **📤 PDF Upload & Auto-Analysis**: Upload financial statements and extract data automatically
- **🔍 OCR Fallback**: When PDF text extraction fails, automatically uses Tesseract.js optical character recognition
- **📈 8 Financial Ratios**: Calculates ROE, ROA, Current Ratio, Debt-to-Equity, Gross/Operating/Net Margins, and Debt Ratio
- **💡 Smart Insights**: AI-generated strengths, concerns, and recommendations based on financial benchmarks
- **📝 Manual Data Entry**: Type in financial figures directly for quick analysis with input validation
- **📊 Progress Visualization**: Visual progress bars for ratio metrics with intelligent scaling and color-coded status
- **📥 JSON Export**: Download your analysis results as JSON for further processing
- **🧪 In-Browser Tests**: Built-in test suite validates all utility functions
- **🎨 Modern UI**: Dark theme with futuristic design, smooth animations, and responsive layout
- **🔒 No Data Transmission**: 100% client-side processing—your financial data never leaves your device

## 🚀 Quick Start

### Option 1: Online (No Installation)
Simply open `fin_statement_analyzer.html` in any modern web browser. No installation needed.

### Option 2: Run Locally

```bash
# Windows
start fin_statement_analyzer.html

# macOS
open fin_statement_analyzer.html

# Linux
xdg-open fin_statement_analyzer.html
```

### Option 3: Run Test Suite
Open `test_runner.html` in your browser to run all utility tests.

## 📁 File Structure

```
FinAlizer/
├── fin_statement_analyzer.html    # Main application (dark theme, futuristic UI)
├── fin_utils.js                   # Shared utilities (parsing, validation, metrics)
├── test_runner.html               # Comprehensive test suite (30+ tests)
└── README.md                      # This file
```

## 🛠️ Technical Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **PDF Processing**: PDF.js (v3.11.174)
- **OCR Engine**: Tesseract.js (v4.1.1)
- **Architecture**: No dependencies, single-file utilities, zero external data transmission
- **Testing**: Client-side test runner with comprehensive assertions

## 💻 Usage Guide

### Uploading a PDF
1. Click the upload area or drag & drop a PDF file
2. The app automatically extracts financial data
3. If text extraction fails, OCR kicks in automatically
4. Review extracted data in the "Data" tab

### Manual Entry
1. Switch to "Upload" tab
2. Fill in the financial figures manually
3. Click "Analyze Financial Data"
4. View results across all tabs

### Understanding the Analysis

#### Financial Ratios
- **ROE (Return on Equity)**: > 15% is excellent, < 10% needs attention
- **ROA (Return on Assets)**: > 5% is healthy, < 2% is concerning
- **Current Ratio**: > 1.5 indicates strong liquidity, < 1.0 is critical
- **Debt-to-Equity**: ≤ 1 is conservative, > 2 is risky
- **Margins**: Track profitability at different levels

#### Color-Coded Status
- 🟢 **Green (Good)**: Ratio exceeds good threshold
- 🟡 **Orange (Warning)**: Ratio between good and warning threshold
- 🔴 **Red (Bad)**: Ratio fails to meet minimum threshold

### Exporting Results
Click "Export JSON" to download analysis as structured JSON for:
- Further analysis in Excel or Python
- Integration with other tools
- Long-term record keeping

## 🔐 Security & Privacy

✅ **No Backend Servers**: All processing happens in your browser  
✅ **No Data Upload**: Financial data never leaves your device  
✅ **No Tracking**: No analytics, no cookies, no user tracking  
✅ **Open Source**: All code is visible and auditable  
✅ **MIT License**: Free to use, modify, and distribute  

## 🧪 Testing

Run the built-in test suite:
1. Open `test_runner.html` in your browser
2. View test results with pass/fail status
3. Success rate displayed as percentage

**Test Coverage:**
- 30+ unit tests
- parseNumberString: 12 tests
- metricToProgress: 5 tests
- validateFinancialValue: 5 tests
- sanitizeInput: 4 tests

## 🎨 Design Features

### Modern Dark Theme
- Cyberpunk-inspired color scheme
- Gradient backgrounds and glowing effects
- Smooth animations and transitions
- Responsive grid layouts

### Futuristic UI Elements
- Animated upload area
- Glow effects on primary elements
- Smooth tab transitions
- Glass-morphism card design

## 🚨 Input Validation

The app validates all financial inputs:
- ✅ Rejects negative asset/liability values
- ✅ Enforces reasonable financial constraints
- ✅ Shows error messages for invalid inputs
- ✅ Prevents division by zero errors

## 📊 Supported Financial Statements

The analyzer recognizes:
- **Balance Sheet**: Assets, Liabilities, Equity
- **Income Statement**: Revenue, COGS, Operating Expenses, Net Income
- **Custom Formats**: Handles various naming conventions (e.g., "Sales" = Revenue)

## 🤝 Contributing

Contributions are welcome! Areas for enhancement:
- Support for more financial metrics
- Additional financial statement types
- Improved OCR accuracy
- Multi-language support
- Advanced visualization options

## 📝 License

MIT License - Free to use, modify, and distribute

## ⚖️ Disclaimer

This tool provides preliminary financial analysis based on standard benchmarks. Always consult with qualified financial professionals before making investment or business decisions.

## 🆘 Support

For issues or questions:
1. Check the test suite to verify utility functions
2. Ensure PDF is clear and readable
3. Try manual data entry as alternative
4. Review browser console for error messages

---

Built with ❤️ for financial transparency and privacy  
© 2025 FinAlizer • Open Source Financial Analysis Platform

## How It Works 🔧

### PDF Upload Flow
1. User uploads a PDF financial statement
2. PDF.js extracts text from each page
3. If text < 150 characters (likely scanned image), Tesseract.js OCR kicks in
4. Extracted text is parsed using regex + `parseNumberString()` helper
5. Financial figures are auto-extracted from common formats (e.g., "Total Assets: $1,234,567")
6. Ratios are calculated and insights are generated

### Manual Entry Flow
1. User enters financial figures in form fields
2. `processManualData()` collects values
3. `parseNumberString()` converts entries to numbers (handles K/M/B multipliers)
4. Same ratio calculation & insights pipeline as PDF

### Ratio Calculations
Each ratio uses null-safe calculation (division-by-zero → `null` → "N/A"):

| Ratio | Formula | Benchmark |
|-------|---------|-----------|
| **ROE** | Net Income / Equity × 100 | > 15% = excellent |
| **ROA** | Net Income / Total Assets × 100 | > 5% = healthy |
| **Current Ratio** | Current Assets / Current Liabilities | > 1.5 = strong |
| **Debt-to-Equity** | Total Liabilities / Equity | < 1 = conservative |
| **Gross Margin** | (Revenue - COGS) / Revenue × 100 | > 40% = excellent |
| **Operating Margin** | (Revenue - COGS - OpEx) / Revenue × 100 | > 15% = healthy |
| **Net Margin** | Net Income / Revenue × 100 | > 10% = strong |
| **Debt Ratio** | Total Liabilities / Total Assets × 100 | < 50% = safe |

## Key Functions 🔑

### `fin_utils.js`

#### `parseNumberString(s)`
Converts financial strings to numbers. Handles:
- Commas: `"1,234"` → 1234
- Currency: `"$500"` → 500
- Multipliers: `"2.5M"` → 2500000
- Words: `"1.5 billion"` → 1500000000
- Parentheses (negative): `"(500)"` → -500

```javascript
parseNumberString("$1,234.56K")  // → 1234560
parseNumberString("(500)")        // → -500
parseNumberString("2.5 million")  // → 2500000
```

#### `metricToProgress(metricKey, value, unit)`
Maps financial metric values to 0–100% for progress bar visualization.

```javascript
metricToProgress("currentRatio", 1.5, "")   // → 50 (ideal ratio)
metricToProgress("debtToEquity", 0.5, "")   // → 75 (conservative)
metricToProgress("netMargin", 10, "%")      // → 50 (typical margin)
```

### `fin_statement_analyzer.html`

#### Key Functions
- `handleFileUpload(event)` — PDF file handler with OCR fallback
- `ocrPdfPage(page)` — Tesseract.js OCR for scanned PDFs
- `parseFinancialData(text)` — Regex-based financial figure extraction
- `calculateRatios()` — Compute all 8 ratios with null-safety
- `displayRatios()` — Render ratio cards with progress bars
- `generateInsights()` — AI-like strengths/concerns/recommendations
- `exportJSON()` — Download analysis as JSON file

## Testing 🧪

### Run In-Browser Tests
Open `test_runner.html` in your browser. Tests include:

**parseNumberString Tests:**
- ✅ Simple integers
- ✅ Comma separators
- ✅ Dollar signs
- ✅ K/M/B multipliers
- ✅ Parentheses (negatives)
- ✅ Word multipliers ("million", "billion")
- ✅ Empty strings

**metricToProgress Tests:**
- ✅ Current Ratio scaling
- ✅ Debt-to-Equity scaling
- ✅ Margin percentage scaling

All 9+ tests run in the browser with pass/fail results displayed on screen and console.

## Example Workflow 📋

1. **Upload a PDF**: Click upload area, select a financial statement
2. **Auto-Extract**: System extracts financial figures (or shows progress bar during OCR)
3. **Review Data**: See extracted balance sheet and income statement
4. **Analyze**: View 8 calculated ratios with visual progress bars
5. **Get Insights**: Read strengths, concerns, and recommendations
6. **Export**: Download results as JSON for further analysis

## Architecture 🏗️

- **Frontend**: Plain HTML5 + CSS3 + Vanilla JavaScript (no frameworks)
- **PDF Processing**: [PDF.js](https://mozilla.github.io/pdf.js/) (v3.11.174)
- **OCR**: [Tesseract.js](https://tesseract.projectnaptha.com/) (v4.1.1) with web workers
- **Utilities**: UMD module pattern (works in browser and Node.js)
- **Privacy**: 100% client-side—no backend, no data transmission

## Browser Compatibility 🌐

- Chrome/Edge 60+
- Firefox 55+
- Safari 11+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Privacy & Security 🔒

✅ **100% Client-Side**: All processing happens in your browser.  
✅ **No External APIs**: No financial data leaves your device.  
✅ **No Tracking**: No analytics or user tracking.  
✅ **No Cookies**: No cookies or local storage (unless you enable browser devtools).  

## Future Enhancements 🚀

- [ ] Multi-year comparison (year-over-year trends)
- [ ] Custom ratio templates
- [ ] Export to PDF reports
- [ ] Industry benchmarking (auto-compare to peers)
- [ ] Trend analysis charts
- [ ] Duplicate statement detection
- [ ] Multi-language OCR support
- [ ] Mobile app (React Native)

## Troubleshooting ⚠️

### "File processing timed out"
- Large PDFs may take time for OCR. Wait 30-60 seconds.
- Try manual data entry for faster results.

### "OCR not working"
- Check internet connection (Tesseract.js downloads models on first use).
- Tesseract works best with clear, high-contrast text.
- Manual entry is a reliable fallback.

### "Number parsing incorrect"
- Ensure financial figures follow standard formats ($1,234 or 1.5M).
- Use manual entry for non-standard formats.

## License 📜

MIT License — Free to use, modify, and distribute.

## Contributing 💬

Found a bug? Have an idea? Open an issue or pull request!

---

**Made for financial transparency and privacy.**
