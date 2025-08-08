
// Basic MCP server
import { MCPServer } from '@modelcontextprotocol/sdk';
import dotenv from 'dotenv';

dotenv.config();

class AICPAAuditDataMCPServer extends MCPServer {
  constructor() {
    super();
    this.apiUrl = process.env.AICPA_API_URL;
    this.apiKey = process.env.AICPA_API_KEY;
    this.defaultEntityId = process.env.DEFAULT_ENTITY_ID;
  }
}

const server = new AICPAAuditDataMCPServer();
server.start();

export default AICPAAuditDataMCPServer;
