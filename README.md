# AICPA Audit Data API

A comprehensive implementation of the AICPA Audit Data Standards (2012-2015) with Model Context Protocol (MCP) server integration for AI assistants.

## 🚀 Features

- **Standards Compliant**: Implements AICPA-ADS specifications
- **AI-Ready**: Full MCP integration for AI assistants like Claude
- **Production-Ready**: Comprehensive error handling and validation
- **Interactive Demo**: Web interface for testing API endpoints
- **Docker Support**: Easy containerized deployment

## 📋 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GenAICPA/aicpa-audit-data-api.git
   cd aicpa-audit-data-api
   ```

2. **Start the API Server**
   ```bash
   cd api-server
   cp .env.example .env
   npm install
   npm start
   ```

3. **Start the MCP Server** (in a new terminal)
   ```bash
   cd mcp-server
   cp .env.example .env
   npm install
   npm start
   ```

4. **Access the Demo**
   Open http://localhost:3000 in your browser

### Docker Setup

```bash
docker-compose up -d
```

## 📚 Documentation

- [API Documentation](docs/API.md)
- [MCP Integration Guide](docs/MCP-INTEGRATION.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

## 🔧 API Endpoints

| Endpoint | Description | Parameters |
|----------|-------------|------------|
| `/api/v1/general-ledger/trial-balance` | Trial balance data | entityId, endDate |
| `/api/v1/general-ledger/chart-of-accounts` | Chart of accounts | entityId, level |
| `/api/v1/general-ledger/detail` | GL transactions | entityId, startDate, endDate |
| `/api/v1/subledgers/accounts-receivable` | AR aging data | entityId, asOfDate |
| `/api/v1/subledgers/accounts-payable` | AP details | entityId, asOfDate |

## 🤖 MCP Integration

This project includes a Model Context Protocol server that enables AI assistants to interact with audit data using natural language:

```javascript
// Example AI interactions
"What's the current cash position for DEMO-CORP-001?"
"Calculate liquidity ratios as of December 31, 2024"  
"Show me all revenue transactions from Q4"
```

## 📊 Standards Compliance

- **AICPA-ADS-GL-v1.0**: General Ledger Standard
- **AICPA-ADS-AR-v1.0**: Accounts Receivable Standard  
- **AICPA-ADS-AP-v1.0**: Accounts Payable Standard
- **XBRL-JSON**: Data exchange format
- **ISO-8601**: Date formatting

## 🧪 Testing

```bash
# API Server tests
cd api-server && npm test

# MCP Server tests  
cd mcp-server && npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- AICPA Audit Data Standards Working Group
- Model Context Protocol contributors
- Open source community

## 📞 Support

- Create an [Issue](https://github.com/GenAICPA/aicpa-audit-data-api/issues)
- Read the [Documentation](docs/)
- Check [Examples](examples/)

---

⭐ **Star this repo if you find it helpful!**
